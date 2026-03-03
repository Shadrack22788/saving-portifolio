import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  useEffect(() => {
    if (!currentUser) {
      const defaultUser = {
        email: "manager@gmail.com",
        role: "manager",
      };

      localStorage.setItem("currentUser", JSON.stringify(defaultUser));
      setCurrentUser(defaultUser);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(
        (u) =>
          u.email.trim().toLowerCase() === email.trim().toLowerCase() &&
          u.password.trim() === password.trim()
      );

      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        setCurrentUser(user);

        return { success: true, user };
      }

      return { success: false, message: "Invalid credentials" };
    } catch (error) {
      return { success: false, message: "Something went wrong" };
    }
  };
  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, user: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);