import React from "react";
import backVector from "../../assets/contact_vector.svg";
import "../Home/home.css"; // Import your CSS file with the provided styles

function Login() {
  return (
    <div className="contacts sections">
      {" "}
      {/* Use the same class names as in the Contact Us section */}
      <img className="back-img" src={backVector} alt="back vector" />
      <h2 className="heading">Login</h2>
      <form className="contact-form" action="" method="post">
        <div className="firstName">
          <label htmlFor="username">Username</label>{" "}
          {/* Change label text from First Name to Username */}
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
          />
        </div>

        <div className="lastName">
          <label htmlFor="password">Password</label>{" "}
          {/* Change label text from Last Name to Password */}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>

        {/* No need for Mobile Number and Email fields in a login form */}

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
