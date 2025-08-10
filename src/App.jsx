import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './Login';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import './App.css';

function App() {
  // Initialize state from localStorage on initial load, or default to null
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Read the Client ID from the .env file
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user from localStorage
    setUser(null); // Clear user from state
  };

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route 
              path="/login" 
              element={user ? <Navigate to="/" /> : <Login setUser={setUser} />} 
            />
            <Route 
              path="/" 
              element={
                <ProtectedRoute user={user}>
                  <Home user={user} handleLogout={handleLogout} />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
