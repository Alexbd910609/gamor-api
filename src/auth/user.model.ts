export interface User {
  logo: {
    color: string;
    char: string;
  };
  nick: string,
  name: string;
  email: string;
  password: string;
}

export interface JwtPayload {
  logo: {
    color: string;
    char: string;
  },
  nick: string,
  name: string;
  email: string;
}