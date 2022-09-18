import { createContext } from "react";
import { ResponseLogin, User } from "../../types/User";

export type AuthContentType = {
  user: User | null;
  sigIn: (email: string, passwrod: string) => Promise<ResponseLogin>;
  sigOut: () => void;
  getUser: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
};
export const AuthContext = createContext<AuthContentType>(null!);
