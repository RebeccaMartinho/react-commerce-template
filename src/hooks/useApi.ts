import * as api from "../lib/api";

export const useApi = () => ({
  validateToken: async (token: string) => {
    //chega o expires do token
    //se ja expirou
    //checa o expires do refresh
    //sendo valido solicita o refresh
    //nao sendo valido retorna token invalido
  },
  refreshToken: async (refreshToken: string) => {
    return await api.post("refresh-token", {}, refreshToken);
  },
  login: async (email: string, password: string) => {
    return await api.post("login", {
      email,
      password,
      type: "business",
      code: "0124",
    });
  },
  logout: async (refreshToken: string) => {
    return await api.post("logout", {}, `Bearer ${refreshToken}`);
  },
});
