import React, { useState } from 'react';

function UserGreeting() {
  return <h1>Yo, welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>Đăng ký đi bro, nhanh lên!</h1>;
}

function GreetingF({ isLoggedIn }) {
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

function LoginButton({ onClick }) {
  return <button onClick={onClick}>Login</button>;
}

function LogoutButton({ onClick }) {
  return <button onClick={onClick}>Logout</button>;
}

function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  const button = isLoggedIn ? (
    <LogoutButton onClick={handleLogoutClick} />
  ) : (
    <LoginButton onClick={handleLoginClick} />
  );

  return (
    <div>
      <GreetingF isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default Greeting;
