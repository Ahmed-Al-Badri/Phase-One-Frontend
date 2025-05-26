import React from 'react';
import { Route, Routes} from 'react-router-dom';

import Login from './pages/auth/LoginForm.jsx';
import SignUp from './pages/auth/SignupForm.jsx';
import Home from './pages/HomePage.jsx';



function App() {
    return (
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      );
}

export default App
