'use client'

import { useState, useEffect } from 'react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  
  
 
  const handleScrollToSection = () => {
    const section = document.getElementById('back');
    if (section) {      
      const position = section.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: position, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
    onClick={handleScrollToSection}
  className={`scroll-to-top ${isVisible ? 'show' : ''}`}
  aria-label="Scroll to Top"
>
  ↑
  <span className="tooltip">Voltar para os serviços</span>
</button>
  );
}

export default ScrollToTop;
