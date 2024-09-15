import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css'; // Add this line to import the CSS file

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFAQs();
  }, []);

  // Mock fetch logic
  const fetchFAQs = () => {
    // Simulate fetching FAQs from a database
    const mockFAQs = [
      { id: 1, question: 'What is Fruit.ai?', answer: 'Fruit.ai is a fruit management tool.' },
      { id: 2, question: 'How do I use the app?', answer: 'Navigate to the desired section from the home page.' },
    ];
    setFaqs(mockFAQs);
  };

  const handleAdd = () => {
    if (newQuestion.trim() === '' || newAnswer.trim() === '') {
      setError('Both question and answer are required.');
      return;
    }
    const newFAQ = { id: faqs.length + 1, question: newQuestion, answer: newAnswer };
    setFaqs([...faqs, newFAQ]);
    setNewQuestion('');
    setNewAnswer('');
    setError(null); // Clear error after successful addition
  };

  const handleEdit = (id) => {
    const faq = faqs.find((faq) => faq.id === id);
    setNewQuestion(faq.question);
    setNewAnswer(faq.answer);
    setEditingId(id);
  };

  const handleUpdate = () => {
    if (newQuestion.trim() === '' || newAnswer.trim() === '') {
      setError('Both question and answer are required.');
      return;
    }
    const updatedFaqs = faqs.map((faq) =>
      faq.id === editingId ? { ...faq, question: newQuestion, answer: newAnswer } : faq
    );
    setFaqs(updatedFaqs);
    setNewQuestion('');
    setNewAnswer('');
    setEditingId(null);
    setError(null); // Clear error after successful update
  };

  const handleDelete = (id) => {
    const updatedFaqs = faqs.filter((faq) => faq.id !== id);
    setFaqs(updatedFaqs);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQs</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="faq-form">
        <input
          type="text"
          placeholder="Question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          className="input"
        />
        <textarea
          placeholder="Answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          className="textarea"
        />
        <button onClick={editingId ? handleUpdate : handleAdd} className="button">
          {editingId ? 'Update FAQ' : 'Add FAQ'}
        </button>
      </div>
      {faqs.map((faq) => (
        <div key={faq.id} className="faq-card">
          <h3 className="faq-question">{faq.question}</h3>
          <p className="faq-answer">{faq.answer}</p>
          <div className="faq-actions">
            <button onClick={() => handleEdit(faq.id)} className="button edit-button">
              Edit
            </button>
            <button onClick={() => handleDelete(faq.id)} className="button delete-button">
              Delete
            </button>
          </div>
        </div>
      ))}
      <Link to="/home" className="button back-button">
        Back to Home
      </Link>
    </div>
  );
}
