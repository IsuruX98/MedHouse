import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../signInUp.css";

function Admin({ setSignin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check email and password (you would usually do this against a backend API)
    if (email === "admin@gmail.com" && password === "1234") {
      // Successful login, navigate to the desired page
      navigate("/adminpage");

      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome, Admin!",
      });
    } else {
      // Invalid login, show error alert
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password. Please try again.",
      });
    }
  };

  return (
    <div className="sign-main-container">
      <h1>Admin</h1>
      <form onSubmit={handleSubmit}>
        <div className="admin-email">
          <label htmlFor="admin-email">Username</label>
          <input
            type="email"
            name="admin-email"
            id="admin-email"
            placeholder="email@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="admin-password">
          <label htmlFor="admin-password">Password</label>
          <input
            type="password"
            name="admin-password"
            id="admin-password"
            placeholder="password..."
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>
      <p>
        Are you a Student?{" "}
        <span
          onClick={() => {
            setSignin(() => "signin");
          }}
        >
          Login
        </span>
      </p>
    </div>
  );
}

export default Admin;
