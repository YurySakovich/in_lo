export interface User {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  token: string;
  expiration: number;
}
