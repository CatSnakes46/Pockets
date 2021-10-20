import React from 'react';

const NavBar = () => {
  const handleLogin = () => {
    console.log('yayyy logging in');
  };

  const handleLogout = () => {
    console.log('yayyyy logging out');
  };

  return (
    <div>
      <button className="log" onClick={handleLogin}>
        Login
      </button>
      <button className="log" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default NavBar;
