// src/components/UserProfile.jsx
import React from "react";

const UserProfile = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6 text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User profile"
        className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
      />
      <h2 className="text-2xl font-bold text-blue-800 my-4">Muthama</h2>
      <p className="text-gray-600">Frontend Developer</p>
    </div>
  );
};

export default UserProfile;
