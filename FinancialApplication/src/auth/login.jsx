import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth, googleProvider } from './firebaseConfig.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

export default function Login({ onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const navigate = useNavigate();
    const location = useLocation();

    const mode = location.pathname === '/signup' ? 'signup' : 'login';

    const toggleMode = () => {
        setError('');
        const nextRoute = mode === 'login' ? '/signup' : '/login';
        navigate(nextRoute, { replace: true });
    };

    const closeModal = () => {
        if (onClose) {
            onClose();
        } else {
            navigate('/home', { replace: true });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (mode === 'login') {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
            }
            setError('');
            closeModal();
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            closeModal();
        } catch (err) {
        setError(err.message);
        }
    };

  return (
    <div className="Login" onClick={closeModal}>
      <div className="LoginContent" onClick={e => e.stopPropagation()}>
        <button className="LoginClose" onClick={closeModal}>×</button>

        <h2>{mode === 'login' ? 'Log In' : 'Sign Up'}</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">
            {mode === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <button className="GoogleBtn" onClick={handleGoogleSignIn}>
          Continue with Google
        </button>

        <p className="FooterText">
          {mode === 'login' ? (
            <>Don't have an account? <button onClick={toggleMode}>Sign Up</button></>
          ) : (
            <>Already have an account? <button onClick={toggleMode}>Log In</button></>
          )}
        </p>
      </div>
    </div>
  );
}
