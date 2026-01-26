import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import GroupManagement from "./pages/GroupManagement";
import AgentDashboard from "./pages/AgentDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Group A",
      groupholders: [
        {
          id: 1,
          name: "John Doe",
          members: [
            {
              id: 1,
              name: "Alice",
              savings: [
                { id: 1, amount: 10, type: "deposit", date: "2026-01-26" },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return (
    
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route
          path="/dashboard"
          element={<Dashboard groups={groups} />}
        />

        <Route
          path="/groups"
          element={<GroupManagement groups={groups} setGroups={setGroups} />}
        />

        <Route
          path="/agent"
          element={<AgentDashboard groups={groups} />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    
  );
}

export default App;
