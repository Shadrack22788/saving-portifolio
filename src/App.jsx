import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react"; 
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
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
  const { user, setUser } = useAuth();

  useEffect(() => {
    if (!user) {
      const defaultUser = {
        email: "manager@gmail.com",
        role: "manager", 
      };

      localStorage.setItem("currentUser", JSON.stringify(defaultUser));
      setUser(defaultUser);
    }
  }, []);

  return (
    <>
      {user ? (
        <>
          <NavBar />
          <div className="flex">
            <SideBar />
            <div className="flex-1 p-6">
              <Routes>

              
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

                <Route
                  path="/member"
                  element={
                    <ProtectedRoute>
                      <MemberDashboard />
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

                <Route path="/forgot-password" element={<ForgotPassword />} />

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
                      <Navigate to="/dashboard" />
                    )
                  }
                />
              </Routes>
            </div>
          </div>
        </>
      ) : (
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