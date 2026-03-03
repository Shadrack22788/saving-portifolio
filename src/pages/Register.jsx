import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "agent",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = register(formData);

    if (result.success) {
      alert("Registered successfully!");
      navigate("/login");
    } else {
      alert(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter email"
        required
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Enter password"
        required
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
      />

      <select
        onChange={(e) =>
          setFormData({ ...formData, role: e.target.value })
        }
      >
        <option value="agent">Agent</option>
        <option value="manager">Manager</option>
      </select>

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
