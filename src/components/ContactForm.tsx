import React from 'react';
import { useTranslation } from 'react-i18next';

interface ContactFormProps {
  formspreeEndpoint: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ formspreeEndpoint }) => {
  const { t } = useTranslation();

  return (
    <div className="contact-form-container">
      <h3>{t('contact.title')}</h3>
      <p>{t('contact.description')}</p>
      <form action={formspreeEndpoint} method="POST" className="contact-form">
        <div className="form-group">
          <label htmlFor="name">{t('contact.nameLabel')}</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t('contact.emailLabel')}</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">{t('contact.messageLabel')}</label>
          <textarea id="message" name="message" rows={5} required></textarea>
        </div>
        <button type="submit" className="cta-button">{t('contact.submitButton')}</button>
      </form>
    </div>
  );
};

export default ContactForm;
