import React, { useState,useEffect, createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
//   onLogOut:()=>{},
//   onLogin:()=>{},
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    // const stored
  })

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };
  const loginhandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        // handleLogin: loginhandler,
        // handleLogout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
