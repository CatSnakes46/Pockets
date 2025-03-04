import React from 'react';

const NavBar = () => {
  //handling button click for login
  const handleLogin = () => {
    console.log('yayyy logging in');
    fetch('', {
      method: 'POST',
      //within body, am I pushing this in the format of how our database is set up?
      body: JSON.stringify({}),
    });
  };

  //handling button click for logout
  const handleLogout = () => {
    console.log('yayyyy logging out');
  };

  //handling button click for signup
  const handleSignup = () => {
    console.log('going into signup');
  };

  return (
    <div>
      <button className="log" onClick={handleLogin}>
        Login
      </button>
      <button className="log" onClick={handleLogout}>
        Log Out
      </button>
      <button className="log" onClick={handleSignup}>
        Signup
      </button>
    </div>
  );
};

export default NavBar;
