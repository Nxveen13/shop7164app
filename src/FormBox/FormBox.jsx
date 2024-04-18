import React, { useState } from "react";
import "./form.css";
import { BiLogoFacebookSquare } from "react-icons/bi";
const FormBox = () => {
  const [formValue, setForm] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Basic email validation
    if (!email || !email.trim()) {
      alert("Please enter your email.");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // Basic password validation
    else if (!password) {
      alert("Please enter your password.");
      return;
    }
    // Validation passed
    alert("Logging in...");
    setEmail("");
    setPassword("");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Basic name validation
    if (!name || !name.trim()) {
      alert("Please enter your name.");
      return;
    }
    // Basic email validation
    else if (!email || !email.trim()) {
      alert("Please enter your email.");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // Basic password validation
    else if (!password) {
      alert("Please enter your password.");
      return;
    }
    else if (!confirmPassword) {
      alert("Please enter your confirmpassword.");
      return;
    }
    // Basic confirm password validation
    else if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    // Validation passed
    alert("Registering...");
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="form_container flexBox">
      {formValue === "login" ? (
        <form action="" className="form" onSubmit={handleLoginSubmit}>
          <h1 className="form-h1">
            <span>Sneakers</span>.
          </h1>
          <div className="inputs" id="input1">
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputs" id="input2">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="forgot_box flexBox" id="input5">
            <p> Forgot password?</p>
          </div>
          <div className="inputs" id="input3">
            <button type="submit">Log in</button>
          </div>
          <div className="tex_box">
            <p>
              Don't have an account?
              <span
                onClick={() => {
                  setForm("register");
                }}
              >
                Register
              </span>
            </p>
          </div>
          <div className="other_option flexBox">
            <span></span>
            <span>OR</span>
            <span></span>
          </div>
          <div className="fb_box flexBox" id="input4">
            <BiLogoFacebookSquare className="fb_icon" />{" "}
            <p>Log in with Facebook</p>
          </div>
        </form>
      ) : (
        <form action="" className="form" onSubmit={handleRegisterSubmit}>
          <h1 className="form-h1">
            <span>All</span>Service.
          </h1>
          <div className="inputs" id="input1">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="inputs" id="input6">
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputs" id="input2">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="inputs" id="input1">
            <input
              type="password"
              placeholder="Enter your confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="forgot_box flexBox" id="input5">
            <p> Forgot password?</p>
          </div>
          <div className="inputs" id="input3">
            <button type="submit">Register</button>
          </div>
          <div className="tex_box">
            <p>
              Allready have an account?
              <span
                onClick={() => {
                  setForm("login");
                }}
              >
                Log In
              </span>
            </p>
          </div>
          <div className="other_option flexBox">
            <span></span>
            <span>OR</span>
            <span></span>
          </div>
          <div className="fb_box flexBox" id="input4">
            <BiLogoFacebookSquare className="fb_icon" />{" "}
            <p>Log in with Facebook</p>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormBox;
