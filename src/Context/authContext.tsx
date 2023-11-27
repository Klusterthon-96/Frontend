import React, { ReactNode, useState } from "react";
type AuthProps = {
  register: Function;
  login: Function;
  logout: Function;
  setUserName: Function;
  userName: object;
};

type Props = {
  children?: ReactNode;
};
const defaultState = {
  register: () => {},
  login: () => {},
  logout: () => {},
  setUserName: () => {},
  userName: {},
};
const { REACT_APP_BACKEND_URL } = process.env;

export const authContext = React.createContext<AuthProps>(defaultState);

export const useAuth = () => React.useContext(authContext);

export const AuthProvider = ({ children }: Props) => {
  const [userName, setUserName] = useState({});

  const register = (payload: object) => {
    const registerUrl = "";
    return registerUrl;
  };
  const login = (payload: any) => {
    const registerUrl = ``;
    return registerUrl;
  };
  const logout = (navigate: any) => {
    navigate();
    // toast.success("Logged out successfully!");
  };

  const values = {
    register,
    login,
    logout,
    setUserName,
    userName,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};
