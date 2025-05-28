import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/LoginStyle.css"

export default function Login({ onSubmit }) {
    const [form, setForm] = useState({
        UsernameEmail: "", 
        Password: "",
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
            //NEED TO SET UP REAL SIGNUP HANDLER to properly work
            //await onSubmit(form);
            navigate("/");
        } catch (err) {
            setError(err.message || "Login failed");
        }
    };
  
    return (
      <div className="form-container">
        <form className="form-grid" onSubmit={handleSubmit}>
          {error && <div className="form-error">{error}</div>}
  
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
            <label />
            <button type="submit">Log In</button>
          </div>
        </form>
  
        <p className="form-footer">
          Don’t have an account?{" "}
          <Link to="/signup" className="form-link">
            Sign up here
          </Link>
        </p>
      </div>
    );
  }
