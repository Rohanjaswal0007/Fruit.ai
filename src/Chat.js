import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Chat.css'; // Add this line to import the CSS file

const fruits = [
  { name: 'Apple', description: 'A sweet and crunchy fruit.' },
  { name: 'Banana', description: 'A long yellow fruit with a soft inside.' },
  { name: 'Orange', description: 'A citrus fruit with a tough outer layer.' },
];

function Chat() {
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div className="chat-container">
      <h2 className="chat-title">Fruit's and You</h2>
      <div className="fruit-buttons">
        {fruits.map((fruit) => (
          <button
            className="fruit-button"
            key={fruit.name}
            onClick={() => setSelectedFruit(fruit)}
          >
            {fruit.name}
          </button>
        ))}
      </div>
      {selectedFruit && (
        <div className="fruit-info">
          <h3 className="fruit-name">{selectedFruit.name}</h3>
          <p className="fruit-description">{selectedFruit.description}</p>
        </div>
      )}
      <Link className="back-link" to="/home">Back to Home</Link>
    </div>
  );
}

export default Chat;
