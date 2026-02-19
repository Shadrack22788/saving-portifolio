import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AgentDashboard from "./pages/AgentDashboard";
import Profile from "./pages/Profile";
import Savings from "./pages/Savings";
import Reports from "./pages/Report";
import MemberDashboard from "./pages/MemberDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";



function App() {
  const { user } = useAuth();

  return (
    <>{user && (
      <>
        <NavBar />
        <div className="flex">
          <SideBar />
          <div className="flex-1 p-6">
            <Routes>
              {/* Agent Dashboard */}
              <Route
                path="/agent"
                element={
                  <ProtectedRoute roleRequired="agent">
                    <AgentDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Manager Dashboard */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute roleRequired="manager">
                    <ManagerDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Member Dashboard */}
              <Route
                path="/member"
                element={
                  <ProtectedRoute roleRequired="member">
                    <MemberDashboard />
                  </ProtectedRoute>
                }
              />

              {/* Savings (only agents) */}
              <Route
                path="/savings"
                element={
                  <ProtectedRoute roleRequired="agent">
                    <Savings />
                  </ProtectedRoute>
                }
              />

              {/* Reports (only managers) */}
              <Route
                path="/reports"
                element={
                  <ProtectedRoute roleRequired="manager">
                    <Reports />
                  </ProtectedRoute>
                }
              />

              {/* Profile (any logged-in user) */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              {/* ✅ Catch-all route: redirect based on role */}
              <Route
  path="*"
  element={
    user.role === "agent" ? (
      <Navigate to="/agent" />
    ) : user.role === "manager" ? (
      <Navigate to="/dashboard" />
    ) : user.role === "member" ? (
      <Navigate to="/member" />
    ) : (
      <Navigate to="/login" />
    )
  }
/>

            </Routes>
          </div>
        </div>
      </>
    )}


      {/* Login/Register if not logged in */}
      {!user && (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </>
  );
}

export default App;
