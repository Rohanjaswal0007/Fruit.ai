import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Chat.css'; // Import the updated CSS file

const responses = {
  hi: "Hello! How can I assist you?",
  hello: "Hi there! Ask me anything about fruits.",
  "how are you": "I'm just a chatbot, but I'm here to help you!",
  apple: "Apples are great for your health! They are rich in fiber and vitamin C.",
  banana: "Bananas are rich in potassium and help in maintaining healthy blood pressure.",
  orange: "Oranges are packed with vitamin C, which boosts immunity!",
  default: "I'm not sure about that, but feel free to ask about fruits or say hello!",
};

const suggestions = ['Hi', 'Hello', 'How are you?', 'Tell me about apples', 'Tell me about bananas', 'Tell me about oranges'];

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = (text) => {
    const userMessage = { text, sender: 'user' };
    const systemReply = { text: responses[text.toLowerCase()] || responses.default, sender: 'system' };

    setMessages([...messages, userMessage, systemReply]);
    setInput(''); // Clear input after sending
  };

  const handleSuggestionClick = (suggestion) => {
    handleSend(suggestion);
  };

  return (
    <div className="chat-container">
      <h2 className="chat-title">Fruit's Chat</h2>
      
      {/* Suggested questions */}
      <div className="suggestions">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            className="suggestion-button"
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </button>
        ))}
      </div>

      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Type your question here..."
        />
        <button onClick={() => handleSend(input)}>Send</button>
      </div>
      
      <Link className="back-link" to="/home">Back to Home</Link>
    </div>
  );
}

export default Chat;
