import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Translator.css'; // Add this line to import the CSS file

function Translator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleTranslate = () => {
    // In a real app, this would call an API
    setResult(`Translated: ${input}`);
  };

  return (
    <div className="translator-container">
      <h2 className="translator-title">Translator</h2>
      <textarea
        className="translator-textarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text to translate"
      />
      <button className="translate-button" onClick={handleTranslate}>
        Translate
      </button>
      {result && <div className="translation-result">{result}</div>}
      <Link className="back-link" to="/home">Back to Home</Link>
    </div>
  );
}

export default Translator;
