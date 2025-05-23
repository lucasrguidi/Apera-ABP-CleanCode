export interface IUser {
  id: string;
  name: string;
  email: string;
  profilePicture: string;
}

export interface IAuthContext {
  user: IUser | null;
  setUser: (setUser: IUser) => void;
}
