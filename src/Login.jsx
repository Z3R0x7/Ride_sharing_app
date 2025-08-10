import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const userInfo = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          }
        );

        if (userInfo.data.email.endsWith('@bmsce.ac.in')) {
          console.log('Login Success:', userInfo.data);
          // Save user info to localStorage
          localStorage.setItem('user', JSON.stringify(userInfo.data));
          setUser(userInfo.data); // Set user data in App.jsx state
          navigate('/'); // Redirect to the home page
        } else {
          alert('Please log in with your college email (@bmsce.ac.in).');
        }
      } catch (error) {
        console.log('Login Failed:', error);
        alert('Could not fetch user information.');
      }
    },
    onError: (error) => {
      console.log('Login Failed:', error);
    },
  });

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>BMSCE Ride Share</h1>
        <p>Your friendly ride-sharing app for BMSCE students.</p>
        <button onClick={() => login()} className="login-button">
          <img 
            src="https://img.icons8.com/color/16/000000/google-logo.png" 
            alt="Google icon"
          />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
