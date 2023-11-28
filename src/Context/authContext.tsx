/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode, useState, useEffect } from "react";
import axios from "axios";

import Swal from "sweetalert2";

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

const domainUrl: string = process.env.REACT_APP_BACKEND_URL || "";

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
    try {
      const response = await axios.post(
        `${domainUrl}/auth/register`,
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      );

      if (response.status === 201) {
        const registeredUser = response.data;
        setUser(registeredUser);
        localStorage.setItem("isVerified", response.data.data.user.isVerified);
        Swal.fire({
          icon: "success",
          title: `Registration successfully!`,
          text: `Please check your inbox for your verification link!`,
          confirmButtonColor: "#006400",
        });

        return `${domainUrl}/auth/register`;
      } else {
        // Handle other status codes
        throw new Error(`Registration failed with status ${response.status}`);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Registration failed";
      await Swal.fire({
        icon: "error",
        text: errorMessage,
      });

      // You can return a Promise with the error message or handle it differently
      return Promise.reject(errorMessage);
    }
  };
  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `${domainUrl}/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        const data = response.data;
        setUser(data);
        localStorage.setItem("isVerified", response.data.data.user.isVerified);
        Swal.fire({
          icon: "success",
          text: `Sign in successfully!`,
        });
        return `${domainUrl}/auth/login`;
      } else {
        throw new Error(`Registration failed with status ${response.status}`);
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Registration failed";
      await Swal.fire({
        icon: "error",
        text: errorMessage,
      });

      // You can return a Promise with the error message or handle it differently
      return Promise.reject(errorMessage);
    }
  };
  const logout = async (navigate: any) => {
    await axios
      .delete(`${domainUrl}/auth/logout`, { withCredentials: true })
      .then((res) => {
        console.log(res);
        localStorage.removeItem("user");
        localStorage.removeItem("isVerified");
        navigate(`/auth/login`);
      });
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
