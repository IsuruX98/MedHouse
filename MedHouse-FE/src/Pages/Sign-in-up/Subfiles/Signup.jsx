import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../signInUp.css";
import { useNavigate } from "react-router-dom";

function Signup({ setSignin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const navigate = useNavigate();

  async function signUpUser(e) {
    e.preventDefault();

    if (password === conPassword) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/user/signup",
          {
            name,
            email,
            gender,
            password,
          }
        );

        if (response.data.status === "success") {
          // Show a success alert and then navigate to the home page
          Swal.fire("Signup Successful!", "", "success").then(() => {
            // Navigate to the home page
            navigate("/home");
          });
        } else {
          // Show an error alert
          Swal.fire("Oops...", "Sign up failed. Please try again.", "error");
        }
      } catch (error) {
        // Show a network error alert
        Swal.fire(
          "Oops...",
          "Network error occurred. Please try again later.",
          "error"
        );
      }
    } else {
      // Show a mismatched password alert
      Swal.fire(
        "Oops...",
        "Confirm password and Password does not match!",
        "error"
      );
    }
  }

  return (
    <div className="sign-main-container">
      <h1>Sign up</h1>
      <form onSubmit={signUpUser}>
        <div className="sign-up-name">
          <label htmlFor="sign-up-name">Name</label>
          <input
            type="text"
            name="sign-up-name"
            id="sign-up-name"
            placeholder="Full name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="sign-up-email">
          <label htmlFor="sign-up-email">Email</label>
          <input
            type="email"
            name="sign-up-email"
            id="sign-up-email"
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="sign-up-gender">
          <label htmlFor="sign-up-gender">Gender</label>
          <select
            name="sign-up-gender"
            id="sign-up-gender"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            required
          >
            <option value="Male">Boy</option>
            <option value="Female">Girl</option>
          </select>
        </div>
        <div className="sign-up-password">
          <label htmlFor="sign-up-password">Password</label>
          <input
            type="password"
            name="sign-up-password"
            id="sign-up-password"
            placeholder="password..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <div className="sign-up-con-password">
          <label htmlFor="sign-up-con-password">Confirm Password</label>
          <input
            type="password"
            name="sign-up-con-password"
            id="sign-up-con-password"
            placeholder="confirm password..."
            onChange={(e) => setConPassword(e.target.value)}
            value={conPassword}
            required
          />
        </div>

        <button type="submit">Sign up</button>
      </form>
      <p>
        Have an account?{" "}
        <span onClick={() => setSignin(() => "signin")}>Sign in</span>
      </p>
    </div>
  );
}

export default Signup;
