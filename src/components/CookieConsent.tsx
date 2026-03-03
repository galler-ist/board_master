import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent-banner">
      <div className="container">
        <p>
          We use cookies to improve your experience and analyze site traffic. By continuing to use our site, you agree to our 
          <a href="/privacy" style={{ marginLeft: '5px', color: 'var(--primary-color)', textDecoration: 'underline' }}>Privacy Policy</a>.
        </p>
        <button onClick={handleAccept} className="cta-button" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
