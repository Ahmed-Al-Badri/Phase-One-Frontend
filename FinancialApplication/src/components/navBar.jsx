import { Link } from 'react-router-dom';
//import { useAuth , AuthContext } from '../auth/authHelpers.js';
import { useAuth } from '../auth/authContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const { currentUser } = useAuth();  
  const nav = useNavigate();
  return (
    <nav className="NavBar">
      <div className="NavRoutes">
        <h2>Finance</h2>
        <Link to="/home">Home</Link>
        <Link to="/transactions">Transactions</Link>
      </div>

      <div className="NavAuth">
        {currentUser ? (
          <div className="UserInfo">
            <p>Signed in as <strong>{currentUser.email}</strong></p>
            <button onClick={() => nav('/signout')}>Sign Out</button>
          </div>
        ) : (
           //<button onClick={onLoginClick}>Login / Signup</button>
          <button onClick={() => nav('/login')}>Login or Signup</button>
        )}
      </div>
    </nav>
    
  );
}

