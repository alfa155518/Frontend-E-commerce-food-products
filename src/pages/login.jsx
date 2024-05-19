import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import useHandler from "../hooks/useHandlerLogin";
import img from "../images/blog-2.jpg";
import "../sass/pages/signup-login.css";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");

  // Costume Hook To Handle Login User
  let [handelLogin, alertMessage] = useHandler(email, password, setError);
  return (
    <section className="login-section">
      <div className="container-img">
        <img src={img} alt="login-imag" />
      </div>
      <div className="container-form">
        <form>
          <h2>Log In Account</h2>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              id="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setError(() => "");
                setEmail(e.target.value);
              }}
            />
            <MdOutlineMail className="mail-icon" />
            {error?.startsWith("Invalid email or password") && (
              <p className="error-message">{error}</p>
            )}
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              autoComplete="previous values"
              id="password"
              value={password}
              onChange={(e) => {
                setError(() => "");
                setPassword(e.target.value);
              }}
            />
            <RiLockPasswordLine className="pass-icon" />
            {error?.startsWith("Invalid email or password") && (
              <p className="error-message">{error}</p>
            )}
          </div>
          <button className="btn-login" type="submit" onClick={handelLogin}>
            Log in
          </button>
          <p className="login-text">
            Don't have an account?{" "}
            <a href="/frontEnd-E-commerce-food-products/signup">Sign-up</a>
          </p>
        </form>
      </div>
      {alertMessage}
    </section>
  );
}

export default Login;
