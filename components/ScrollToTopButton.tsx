
import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-sakura-deep-pink hover:bg-opacity-90 text-white p-3.5 rounded-full shadow-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sakura-deep-pink focus:ring-opacity-50 hover:scale-110"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-6 h-6"
            aria-hidden="true" 
          >
            <path fillRule="evenodd" d="M12 4.03a.75.75 0 0 1 .75.75v14.44l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V4.78a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" transform="rotate(180 12 12)" />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
