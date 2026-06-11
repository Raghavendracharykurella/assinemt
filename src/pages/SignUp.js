import React from "react";

export default function SignUp() {
  return (
    <div className="app-container">
      <h2>Create PopX Account</h2>
      <form>
        <label>Full Name*</label>
        <input type="text" placeholder="Enter full name" />
        
        <label>Phone Number*</label>
        <input type="tel" placeholder="Enter phone number" />
        
        <label>Email Address*</label>
        <input type="email" placeholder="Enter email address" />
        
        <label>Password*</label>
        <input type="password" placeholder="Enter password" />
        
        <label>Company Name</label>
        <input type="text" placeholder="Enter company name" />
        
        <div>
          <p>Are you an Agency?</p>
          <label><input type="radio" name="agency" /> Yes</label>
          <label><input type="radio" name="agency" /> No</label>
        </div>
        
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
