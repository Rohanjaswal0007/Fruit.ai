import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to Fruit.ai</h2>
      <nav className="nav-menu">
        <Link to="/chat">Chat</Link>
        <Link to="/translator">Translator</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default Home;