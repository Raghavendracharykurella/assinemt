import React from "react";

export default function AccountSettings() {
  return (
    <div className="app-container">
      <h2>Account Settings</h2>
      <div>
        <img 
          src="https://via.placeholder.com/100" 
          alt="Profile" 
          style={{ borderRadius: "50%" }} 
        />
        <h3>Marry Doe</h3>
        <p>Marry@gmail.com</p>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy 
          Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam.
        </p>
      </div>
    </div>
  );
}
