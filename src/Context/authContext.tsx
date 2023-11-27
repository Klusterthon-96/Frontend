/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode, useState, useEffect } from "react";
import axios from "axios";

type User = {
  [key: string]: any;
};
// type User = {
//   accessToken: string;
//   createdAt: string;
//   email: string;
//   isVerified: boolean;
//   name: string;
//   role: string;
//   updatedAt: string;
// };

type AuthProps = {
  register: (name: string, email: string, password: string) => Promise<string>;
  login: (email: string, password: string) => Promise<string>;
  logout: (navigate: () => void) => void;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  user: User;
};

type Props = {
  children?: ReactNode;
};
const defaultState: AuthProps = {
  register: async () => "",
  login: async () => "",
  logout: () => {},
  setUser: () => {},
  user: {} as User,
};

const domainUrl: string = "https://backend-8fbc.onrender.com/api/v1" || "";

// const domainUrl: string = process.env.REACT_APP_BACKEND_URL || "";

export const authContext = React.createContext<AuthProps>(defaultState);

export const useAuth = () => React.useContext(authContext);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : {};
  });

  useEffect(() => {
    // Save user data to local storage whenever the user state changes
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const register = async (name: string, email: string, password: string) => {
    const response = await axios.post(`${domainUrl}/auth/register`, {
      name,
      email,
      password,
      withCredentials: true,
    });

    const registeredUser = response.data;

    // Update the user state
    setUser(registeredUser);

    return `${domainUrl}/auth/register`;
  };
  const login = async (email: string, password: string) => {
    const response = await axios.post(`${domainUrl}/auth/login`, {
      email,
      password,
      withCredentials: true,
    });

    const data = response.data;

    // Handle the data, update state, or perform any other necessary actions
    setUser(data);

    return `${domainUrl}/auth/login`;
  };
  const logout = (navigate: any) => {
    localStorage.removeItem("user");
    setUser(user);
    navigate();
  };

  const values = {
    register,
    login,
    logout,
    setUser,
    user,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};
