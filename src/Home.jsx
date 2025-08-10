import React from 'react';

const Home = ({ user, handleLogout }) => {
  return (
    <div className="home-container">
      <h1>Hello, {user.name}</h1>
      <p>Welcome to the BMSCE Ride Share App!</p>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Home;
