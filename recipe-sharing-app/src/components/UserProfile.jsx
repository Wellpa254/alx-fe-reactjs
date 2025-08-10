// src/components/UserProfile.jsx
import React from "react";

function UserProfile() {
  return (
    <div className="container mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full mx-auto"
      />
      <h1 className="text-blue-800 my-4 text-center text-2xl font-bold">
        Muthama W
      </h1>
      <p className="text-gray-700 text-center">
        Frontend Developer | Tech Enthusiast
      </p>
    </div>
  );
}

export default UserProfile;
