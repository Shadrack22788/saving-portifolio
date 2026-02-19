import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./index.css"; // 👈 ADD THIS LINE
import { MemberProvider } from "./context/MemberContext";


ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
    <AuthProvider>
      <MemberProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MemberProvider>
    </AuthProvider>
  </React.StrictMode>
);
