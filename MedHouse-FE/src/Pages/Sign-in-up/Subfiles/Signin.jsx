import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "../signInUp.css";

function Signin({ setSignin, setLoginState }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function signInUser(e) {
    e.preventDefault();
    fetch("http://localhost:5000/api/user/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          navigate("/home");
          Swal.fire({
            icon: "success",
            title: "Login Successful!",
            text: "You have been logged in.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Entered credentials are already registered!",
          });
        }
        console.log(data.status);
      })
      .catch((err) => {
        console.log("rejected", err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Network error. Please try again later.",
        });
      });
  }

  return (
    <div className="sign-main-container">
      <h1>Sign in</h1>
      <form onSubmit={signInUser}>
        <div className="sign-in-email">
          <label htmlFor="sign-in-email">Email</label>
          <input
            type="email"
            name="sign-in-email"
            id="sign-in-email"
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="sign-in-password">
          <label htmlFor="sign-in-password">Password</label>
          <input
            type="password"
            name="sign-in-password"
            id="sign-in-password"
            placeholder="password..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <span onClick={() => setSignin(() => "signup")}>Sign up</span>
      </p>
      <p>
        Are you an admin?{" "}
        <span onClick={() => setSignin(() => "admin")}>Login</span>
      </p>
    </div>
  );
}

export default Signin;
