import React from 'react';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container">
        <h2>{t('hero.title')}</h2>
        <p>{t('hero.subtitle')}</p>
        <button className="cta-button">{t('hero.button')}</button>
      </div>
    </section>
  );
};

export default HomePage;
