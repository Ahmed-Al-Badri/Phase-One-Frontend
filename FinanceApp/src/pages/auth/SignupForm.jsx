import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/LoginStyle.css"

export default function Signup({ onSubmit }) {
  const [form, setForm] = useState({
    Username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      //await onSubmit(form);
      navigate("/");
    } catch (err) {
      setError(err.message || "Sign‑up failed");
    }
  };

  return (
    <div className="form-container">
      <form className="form-grid" onSubmit={handleSubmit}>
        {error && <div className="form-error">{error}</div>}

        <div className="form-row">
          <label htmlFor="Username">Username:</label>
          <input
            id="Username"
            name="Username"
            type="text"
            value={form.Username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label />
          <button type="submit">Sign Up</button>
        </div>
      </form>

      <p className="form-footer">
        Already have an account?{" "}
        <Link to="/login" className="form-link">
          Log in here
        </Link>
      </p>
    </div>
  );
}

