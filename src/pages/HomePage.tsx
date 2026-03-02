import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('hero.title')} | Board Master</title>
        <meta name="description" content={t('hero.subtitle')} />
        <meta property="og:title" content={t('hero.title')} />
        <meta property="og:description" content={t('hero.subtitle')} />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="hero">
        <div className="container">
          <h2>{t('hero.title')}</h2>
          <p>{t('hero.subtitle')}</p>
          <Link to="/reviews" className="cta-button">
            {t('hero.button')}
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
