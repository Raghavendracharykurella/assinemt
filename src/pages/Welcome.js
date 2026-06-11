import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="app-container">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Link to="/signup"><button>Create Account</button></Link>
      <p>Already Registered?</p>
      <Link to="/signin"><button>Login</button></Link>
    </div>
  );
}
