import React, { useState } from "react";

export const AuthContext = React.createContext({
  isAuthenticated: false,
  login: () => {},
  user: {},
});

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const loginHandler = (user) => {
    setUser(user);
    setIsAuthenticated(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login: loginHandler,
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
