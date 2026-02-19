import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, roleRequired }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />; // not logged in
  }

  if (roleRequired && user.role !== roleRequired) {
    return <Navigate to="/dashboard" />; // role mismatch
  }

  return children;
}
