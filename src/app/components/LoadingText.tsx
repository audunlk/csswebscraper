import React, { useState, useEffect } from 'react';

const LoadingText = () => {
  const [loadingPhrases, setLoadingPhrases] = useState([
    "Brushing up on our pixel-perfect precision...",
    "Polishing every pixel to perfection...",
    "Weaving a tapestry of design magic...",
    "Applying gradients with surgical precision...",
    "Whispering sweet nothings to the CSS...",
    "Unleashing the awesome power of design...",
    "Creating an art gallery of pixels...",
    "Dancing with pixels in perfect harmony...",
    "Defying gravity with our typography skills...",
    "Crafting a symphony of delightful animations...",
  ]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(
    Math.floor(Math.random() * loadingPhrases.length)
  );
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPhraseIndex(Math.floor(Math.random() * loadingPhrases.length));
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p className={`text-sm font-medium text-center mb-6 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {loadingPhrases[currentPhraseIndex]}
      </p>
    </div>
  );
};

export default LoadingText;
