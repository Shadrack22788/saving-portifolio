import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login function
  const login = (userData) => {
    const formattedUser = {
      id: userData.id || Date.now(),
      name: userData.name || "User",
      email: userData.email || "",
      role: userData.role || "member", // default role
      createdAt: new Date().toISOString(),
    };

    setUser(formattedUser);
    localStorage.setItem("user", JSON.stringify(formattedUser));
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export const useAuth = () => useContext(AuthContext);
