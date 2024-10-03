import React, { useState } from "react";

// Componente de SignUp
const SignUp = ({ onSignUp, toggleForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((user) => user.username === username)) {
      alert("Username already exists!");
      return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    onSignUp(username);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
        required
      />
      <button type="submit" className="submit-button">
        Sign Up
      </button>
      <p className="toggle-text">
        Already have an account?{" "}
        <span onClick={toggleForm} className="toggle-link">
          Sign In here
        </span>
      </p>
    </form>
  );
};

// Componente de SignIn
const SignIn = ({ onSignIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      onSignIn(username);
    } else {
      alert("Invalid username or password!");
    }
  };

  const toggleForm = () => {
    setIsSigningUp((prev) => !prev); // Alterna entre Sign In e Sign Up
  };

  return (
    <>
      {isSigningUp ? (
        <SignUp onSignUp={onSignIn} toggleForm={toggleForm} />
      ) : (
        <form onSubmit={handleSubmit} className="form-container">
          <h2 className="form-title">Sign In</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
          <button type="submit" className="submit-button">
            Sign In
          </button>
          <p className="toggle-text">
            Don't have an account?{" "}
            <span onClick={toggleForm} className="toggle-link">
              Sign Up here
            </span>
          </p>
        </form>
      )}
    </>
  );
};

export default SignIn;
