import "./auth.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useState } from "react";
import { Button } from "../../components";
import { useAuth } from "../../context";
import { handleLogin } from "../../context/Auth/util";
export const Login = () => {
  const initialData = {
    email: "",
    password: "",
  };
  const guestCredential = {
    email: "johndee@gmail.com",
    password: "jondee123",
  };
  const navigate = useNavigate();
  const location = useLocation();

  const [loginDetails, setLoginDetails] = useState(initialData);
  const [showPassword, setShowPassoword] = useState(false);
  const { authDispatch } = useAuth();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const submitLoginHandler = (e) => {
    e.preventDefault();
    setLoginDetails(initialData);
    handleLogin(loginDetails, authDispatch, navigate, location);
  };
  return (
    <>
      <div className="welcome-div text-center">
        <h2 className="headline-2 ">Welcome to FunYard</h2>
        <p className="small-text-1 ">Please Login to continue</p>
      </div>
      <main className="login-card ">
        <div className="login">
          <h2 className="headline-2 text-center">Login</h2>
          <form onSubmit={submitLoginHandler}>
            <div className="input">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                name="email"
                id="email"
                className="input-text"
                required
                value={loginDetails.email}
                onChange={(e) => handleChange(e)}
                placeholder="Enter your Email"
              />
            </div>
            <div className="input">
              <label htmlFor="password">Password*</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="input-text"
                required
                value={loginDetails.password}
                onChange={(e) => handleChange(e)}
                placeholder="Enter your Password"
              />
              <span
                onClick={() => {
                  setShowPassoword((prev) => !prev);
                }}
              >
                {showPassword ? (
                  <FaEye className="eye-icon" />
                ) : (
                  <FaEyeSlash className="eye-icon" />
                )}
              </span>
            </div>
            <div className="input form-btn-div">
              <Button btnvariant={"btn-primary"} name={"LOGIN"} />
            </div>
            <div className="input text-center">
              <p className="small-text-3">OR</p>
              <Button
                btnvariant={"btn-outline-secondary"}
                name={"Test Credential "}
                onClick={() => setLoginDetails(guestCredential)}
              />
            </div>

            <div className="input text-center">
              <Link to="/signup">
                <p className="small-text-3">Don't have an account | Signup </p>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
