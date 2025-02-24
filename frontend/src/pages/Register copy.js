import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/userSlice";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (userInfo) {
      navigate("/home");
    }
  }, [userInfo, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center login-center">
      <form className="Login col-md-8 col-lg-4 col-11" onSubmit={handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
        {loading && <div className="alert alert-info">Loading...</div>}
        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          Register
        </button>
        <p>
          <Link to={"/login"}>
            I Have Account <strong>Login</strong>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
