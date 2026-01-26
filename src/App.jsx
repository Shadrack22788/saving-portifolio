import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import GroupManagement from "./pages/GroupManagement.jsx";
import Login from "./pages/Login.jsx"; // assuming you have a login page
import Register from "./pages/Register.jsx"; // optional

function App() {
  return (
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Group Management */}
        <Route path="/groups" element={<GroupManagement />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

  );
}

export default App;
