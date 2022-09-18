export type User = {
  id: number;
  email: string;
  name: string;
  cpf: string;
  accessToken: Token;
  refreshToken: Token;
};
export type ResponseLogin = {
  message: string;
  success: boolean;
};
type Token = {
  exp: number;
  expAt: string;
  iat: number;
  accessJWT: string;
};
