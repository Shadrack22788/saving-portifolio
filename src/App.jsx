import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AgentDashboard from "./pages/AgentDashboard";
import MemberDashboard from "./pages/MemberDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import Profile from "./pages/Profile";
import Savings from "./pages/Savings";
import Reports from "./pages/Report";
import MembersPage from "./pages/MembersPage";
import AgentsPage from "./pages/AgentsPage";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <>
          {/* Navbar + Sidebar */}
          <NavBar />
          <div className="flex">
            <SideBar />
            <div className="flex-1 p-6">
              <Routes>
                {/* Agent Routes */}
                <Route
                  path="/agent"
                  element={
                    <ProtectedRoute roleRequired="agent">
                      <AgentDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/savings"
                  element={
                    <ProtectedRoute roleRequired="agent">
                      <Savings />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/members"
                  element={
                    <ProtectedRoute roleRequired="agent">
                      <MembersPage />
                    </ProtectedRoute>
                  }
                />

                {/* Manager Routes */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute roleRequired="manager">
                      <ManagerDashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/reports"
                  element={
                    <ProtectedRoute roleRequired="manager">
                      <Reports />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/agents"
                  element={
                    <ProtectedRoute roleRequired="manager">
                      <AgentsPage />
                    </ProtectedRoute>
                  }
                />

                {/* Member Routes */}
                <Route
                  path="/member"
                  element={
                    <ProtectedRoute roleRequired="member">
                      <MemberDashboard />
                    </ProtectedRoute>
                  }
                />

                {/* Profile accessible by all roles */}
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route path="/forgot-password" element={<ForgotPassword />} />


                {/* Catch-all route: redirect based on user role */}
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
      ) : (
        // Login/Register if not logged in
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
