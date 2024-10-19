import React, { useRef, useEffect } from 'react';
import './PortfolioDisplay2.css';

const InteractiveCard = ({ children, className }) => {
  const cardRef = useRef(null);
  const cardLightRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const cardLight = cardLightRef.current;

    const handleMouseMove = (e) => {
      const cardRect = card.getBoundingClientRect();
      const xAxis = (e.clientX - cardRect.left - cardRect.width / 2) / 20;
      const yAxis = (e.clientY - cardRect.top - cardRect.height / 2) / 20;

      // Smooth card rotation
      card.style.transform = `rotateY(${xAxis * -2}deg) rotateX(${yAxis * 4}deg)`;

      // Light effect on mouse move
      const x = e.clientX - cardRect.left;
      const y = e.clientY - cardRect.top;
      cardLight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.4), rgba(255,255,255,0.1), transparent)`;
    };

    const handleMouseLeave = () => {
      // Reset rotation and light effect
      card.style.transform = `rotateY(0deg) rotateX(0deg)`;
      cardLight.style.background = `none`;
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="interactive-card-container">
      <div className={`interactive-card ${className}`} ref={cardRef}>
        {children}
        <div className="card-light" ref={cardLightRef}></div>
      </div>
    </div>
  );
};

export default InteractiveCard;
