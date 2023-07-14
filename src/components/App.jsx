import React from 'react';
import '../styles/App.sass';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';

// Auth form
import LoginForm from './Auth/LoginForm';
import ForgotPassWordForm from './Auth/ForgotPassWordForm';
import SignUpForm from './Auth/SignUpForm';
import Navigation from './Navbar/Navigation';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgotpassword" element={<ForgotPassWordForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
