import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/navBar.jsx';
import Home from './pages/home.jsx';
import Transactions from './pages/transactions.jsx';
import Login from './auth/login.jsx';
import SignOut from './auth/signout.jsx';

export default function App() {
  const [showLogin, setLogin] = useState(false);

  return (
    <div className="App">
      {}
      <NavBar onLoginClick={() => setLogin(true)} />
      
      {}
      <div className="AppContent">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          {}
          <Route path="/login" element={<Login initialMode="login" />} />
          <Route path="/signup" element={<Login initialMode="signup" />} />
          <Route path="/signout" element={<SignOut />} />
        </Routes>
      </div>

      {}
      {showLogin && (
        <Login initialMode="login" onClose={() => setLogin(false)} />
      )}
    </div>
  );
}
