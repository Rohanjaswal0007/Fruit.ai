import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Chat from './Chat';
import Translator from './Translator';
import FAQ from './FAQ';
import About from './About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>Fruit.ai</h1>
        </header>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* History Section */}
        <section className="history-section">
          <h2>A Brief History of Fruits</h2>
          <p>
            Fruits have played a key role in the diets of humans and animals for millions of years. Historically, fruits
            were considered nature’s candy, sweet and nutritious, providing essential vitamins and minerals to early
            humans. Here are some key points:
          </p>
          <ul>
            <li>Fruits were originally foraged from wild plants.</li>
            <li>Apples have been cultivated for over 4,000 years.</li>
            <li>Bananas were domesticated in Southeast Asia and are now a global staple.</li>
            <li>Oranges were first cultivated in China and later spread to Europe and the Americas.</li>
          </ul>
        </section>
        <footer className="footer">
          <p>Rohan Jaswal Fruit.ai 2110991942</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
