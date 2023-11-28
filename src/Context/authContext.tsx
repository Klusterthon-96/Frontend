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
     await axios
      .post(
        `${domainUrl}/auth/register`,
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 200) {
          const registeredUser = res.data;
          setUser(registeredUser);

             Swal.fire({
        icon: "success",
        title: `Registration successfully!`,
                text: `Please check your inbox for your verification link!`,
               confirmButtonColor: "#006400",
      }).then(() => {
      window.open("https://mail.google.com/", "_system");
    });
    

          return `${domainUrl}/auth/register`;
        }
        return Promise.resolve(`${domainUrl}/auth/register`);
      })
      .catch(async (e) => {
        await Swal.fire({
          icon: "error",
          text: `${e.response.data.message}`,
        });
        return Promise.resolve(`${domainUrl}/auth/register`);
      });
  return Promise.resolve(`${domainUrl}/auth/register`);
  };
  const login = async (email: string, password: string) => {
     await axios
      .post(
        `${domainUrl}/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 200) {
          const data = res.data;
          setUser(data);
          return `${domainUrl}/auth/login`;
        }
      })
      .catch(async (e) => {
        await Swal.fire({
          icon: "error",
          text: `${e.response.data.message}`,
        });
      });
   return Promise.resolve(`${domainUrl}/auth/register`);
    // Handle the data, update state, or perform any other necessary actions
  };
  const logout = async (navigate: any) => {
    await axios
      .delete(`${domainUrl}/auth/logout`, { withCredentials: true })
      .then((res) => {
        console.log(res);
        localStorage.removeItem("user");
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
