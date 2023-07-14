import React from "react";
import "../styles/App.sass";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// Auth form
import LoginForm from "./Auth/LoginForm";
import ForgotPassWordForm from "./Auth/ForgotPassWordForm";
import SignUpForm from "./Auth/SignUpForm";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/forgot">forgot password</Link>
            </li>
            <li>
              <Link to="/signup">signup</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgotpassword" element={<ForgotPassWordForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
  );
}

export default App;
