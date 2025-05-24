import { useState } from "react";
import "./FormStyle.css";

export default function PreUserStatsForm({ onSubmit }) {
  const [form, setForm] = useState({
    Username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
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
        <label></label>
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
}
