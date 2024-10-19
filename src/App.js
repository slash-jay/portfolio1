import React from 'react';
import PortfolioDisplay from './components/PortfolioDisplay';

import './App.css'; // Include your CSS file for styles

const App = () => {
  return (
    <div className="App">
      <PortfolioDisplay/>
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Any queries ,ping me on above contact details</p>
      <p>
        <a href="/path-to-your-cv.pdf" target="_blank" rel="noopener noreferrer">
          View CV
        </a>
      </p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  textAlign: 'center',
  padding: '1em 0',
  position: 'relative',
  bottom: 0,
  width: '100%',
};

export default App; // Ensure this line is present
