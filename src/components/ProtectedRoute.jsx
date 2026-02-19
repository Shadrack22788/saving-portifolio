import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// roleRequired: optional, e.g., "agent"
export default function ProtectedRoute({ children, roleRequired }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  if (roleRequired && user.role !== roleRequired)
    return <Navigate to="/dashboard" />; // cyangwa page ifite permission

  return children;
}
