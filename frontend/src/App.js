import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./pages/Login";
import Register from "./pages/Signup";
import Home from "./pages/Home";
import { REACT_APP_API_URL } from "./utils/consonants";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import CheckEmail from "./pages/CheckEmail";
import SetNewPassword from "./pages/SetNewPassword";
import PasswordReset from "./pages/PasswordReset";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/forgot-password/email" element={<CheckEmail />} />
          <Route path="/forgot-password/new-password" element={<SetNewPassword/>} />
          <Route path="/forgot-password/reset-password" element={<PasswordReset/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export const baseApi = REACT_APP_API_URL || "http://localhost:3001";
export default App;
