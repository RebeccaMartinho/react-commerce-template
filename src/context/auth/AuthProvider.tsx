import { access } from "fs";
import { emit } from "process";
import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const api = useApi();

  useEffect(() => {
    console.log("AuthProvider");
    const validateToken = async () => {
      let now = new Date();
      const data_acccess_token = localStorage.getItem("acccess_token");
      const data_refresh_token = localStorage.getItem("refresh_token");
      const acccess_token = JSON.parse(data_acccess_token!);
      const refresh_token = JSON.parse(data_refresh_token!);

      if (acccess_token) {
        let token_expires_at = new Date(acccess_token.expAt);
        if (token_expires_at < now) {
          console.log("token expirou");
          setIsLoading(false);
        } else {
          console.log("token valido");
          const resp = await api.refreshToken(refresh_token.refreshJWT);
          console.log({ resp });
          let user = {
            id: resp.user.id,
            name: resp.user.name,
            email: resp.user.email,
            cpf: resp.user.cpf,
            accessToken: resp.accessToken,
            refreshToken: resp.refreshToken,
          };
          setUser(user);
          setToken(resp.accessToken, resp.refreshToken);
          setIsLoading(false);
          setIsAuthenticated(true);

          console.log({ user });
        }
      } else {
        console.log("no token");
        setIsLoading(false);
        setIsAuthenticated(false);
      }
    };
    validateToken();
  }, []);

  const refreshUser = (data: any) => {
    setUser(data.user);
    setToken(data.accessToken, data.refreshToken);
    setIsLoading(false);
    setIsAuthenticated(true);
  };

  const getUser = () => {
    return user;
  };

  const sigIn = async (email: string, password: string) => {
    const resp = await api.login(email, password);
    if (resp.error) {
      setIsAuthenticated(false);
      setIsLoading(false);
      return { message: resp.error, success: false };
    } else {
      let user = {
        id: resp.user.id,
        name: resp.user.name,
        email: resp.user.email,
        cpf: resp.user.cpf,
        accessToken: resp.accessToken,
        refreshToken: resp.refreshToken,
      };
      setUser(user);
      setToken(resp.accessToken, resp.refreshToken);
      setIsLoading(false);
      setIsAuthenticated(true);
      return { message: "sucesso", success: true };
    }
  };
  const sigOut = async () => {
    const data = localStorage.getItem("refresh_token");
    const refresh_token = JSON.parse(data!);
    const resp = await api.logout(refresh_token.refreshJWT);
    console.log({ resp });
    localStorage.removeItem("acccess_token");
    localStorage.removeItem("refresh_token");
    setUser(null);
    setIsLoading(false);
    setIsAuthenticated(false);
  };

  const setToken = (accessToken: any, refreshToken: any) => {
    localStorage.setItem("acccess_token", JSON.stringify(accessToken));
    localStorage.setItem("refresh_token", JSON.stringify(refreshToken));
  };

  return (
    <AuthContext.Provider
      value={{ user, sigIn, sigOut, getUser, isLoading, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
