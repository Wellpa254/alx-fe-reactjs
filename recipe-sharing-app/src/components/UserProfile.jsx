function UserProfile() {
  return (
    <div className="container mx-auto p-4">
      <img
        src="profile.jpg"
        alt="User"
        className="w-32 h-32 rounded-full mx-auto"
      />
      <h1 className="text-blue-800 my-4 text-center text-2xl font-bold">
        John Doe
      </h1>
      <p className="text-gray-600 text-center">Web Developer</p>
    </div>
  );
}

export default UserProfile;
