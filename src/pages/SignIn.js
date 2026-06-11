import React from "react";

export default function SignIn() {
  return (
    <div className="app-container">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <form>
        <label>Email Address</label>
        <input type="email" placeholder="Enter email address" />
        
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
