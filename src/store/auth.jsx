import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [description, setDescription] = useState("plz select project first");
  const [images, setImages] = useState([]);

  return (
    <AuthContext.Provider
      value={{ description, setDescription, images, setImages }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const AuthContextvalue = useContext(AuthContext);
  if (!AuthContextvalue) {
    throw new Error("useAuth used outside of the provider");
  }
  return AuthContextvalue;
};
