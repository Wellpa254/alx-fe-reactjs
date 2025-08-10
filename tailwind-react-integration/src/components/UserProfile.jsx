import React from 'react';

export default function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="w-36 h-36 rounded-full object-cover border-4 border-gray-200 mx-auto"
      />
      <h2 className="mt-3 text-xl font-semibold text-gray-900">
        Muthama Wat
      </h2>
      <p className="text-gray-500 text-sm mt-1">
        Web Developer
      </p>
    </div>
  );
}
