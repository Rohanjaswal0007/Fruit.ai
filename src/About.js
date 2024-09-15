import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Importing the CSS file for styling

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About Fruit.ai</h2>
      <p className="about-description">
        Fruit.ai is a health management product designed to help you make informed decisions about your fruit consumption and overall health. Eating fruits regularly can boost your immune system, improve digestion, and provide essential vitamins and minerals for your body.
      </p>
      <h3 className="section-title">Health Benefits of Common Fruits</h3>
      <div className="fruit-benefits">
        <div className="fruit">
          <h4>Apple</h4>
          <p>Apples are rich in fiber and antioxidants. They are good for heart health, improve digestion, and can lower the risk of diabetes.</p>
        </div>
        <div className="fruit">
          <h4>Banana</h4>
          <p>Bananas are a great source of potassium, which helps maintain blood pressure. They are also beneficial for muscle recovery and provide a quick energy boost.</p>
        </div>
        <div className="fruit">
          <h4>Orange</h4>
          <p>Oranges are packed with vitamin C, which boosts your immune system. They also help improve skin health and reduce the risk of heart disease.</p>
        </div>
      </div>

      <h3 className="section-title">Basic Fruit Diet Chart</h3>
      <div className="diet-chart">
        <table className="diet-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Fruits</th>
              <th>Benefits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Morning</td>
              <td>Apple, Banana</td>
              <td>Boosts energy, improves digestion</td>
            </tr>
            <tr>
              <td>Afternoon</td>
              <td>Orange, Grapes</td>
              <td>Enhances immune system, hydration</td>
            </tr>
            <tr>
              <td>Evening</td>
              <td>Mixed Berries</td>
              <td>Rich in antioxidants, promotes skin health</td>
            </tr>
            <tr>
              <td>Night</td>
              <td>Papaya</td>
              <td>Aids digestion, promotes sleep</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Link to="/home" className="back-link">Back to Home</Link>
    </div>
  );
}

export default About;
