// src/types/auth.ts

type User = {
  id: string;
  username: string;
  email: string;
  createdAt: Date;
};


type AuthResponse = {
  user: User;
  token: string;
};

export { User, AuthResponse };