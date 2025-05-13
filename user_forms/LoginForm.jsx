import { useState } from "react";
import "./FormStyle.css";

export default function LoginForm({ onSubmit }) {
  const [form, setForm] = useState({ UsernameEmail: "", Password: "" });

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
        <label htmlFor="UsernameEmail">Username or Email:</label>
        <input
          id="UsernameEmail"
          name="UsernameEmail"
          type="text"
          value={form.UsernameEmail}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <label htmlFor="Password">Password:</label>
        <input
          id="Password"
          name="Password"
          type="password"
          value={form.Password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <label></label>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}
