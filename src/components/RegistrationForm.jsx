import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { username, email, password });
    alert("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Registration</h2>

      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}   {/* ✅ EXACT string match */}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}      {/* ✅ EXACT string match */}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}   {/* ✅ EXACT string match */}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;

