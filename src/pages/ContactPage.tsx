import React from 'react';
import ContactForm from '../components/ContactForm'; // Assuming ContactForm is in src/components

const ContactPage: React.FC = () => {
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xykdnrwv'; // User-provided endpoint

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <ContactForm formspreeEndpoint={FORMSPREE_ENDPOINT} />
      </div>
    </section>
  );
};

export default ContactPage;
