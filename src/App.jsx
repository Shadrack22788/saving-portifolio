
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

function App() {
  const { user } = useAuth();

  return (
    <>
      {user && (
        <>
          <NavBar />
          <div className="flex">
            <SideBar />
            <div className="flex-1 p-6">
              <Routes>
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
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
                  path="/reports"
                  element={
                    <ProtectedRoute roleRequired="manager">
                      <Reports />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                <Route path="*" element={<Navigate to="/dashboard" />} />
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
