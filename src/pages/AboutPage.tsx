import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about-us" className="container page-section">
      <h2>{t('about.title')}</h2>
      <p>{t('about.description1')}</p>
      <p>{t('about.description2')}</p>
      <h3>{t('about.missionTitle')}</h3>
      <p>{t('about.missionDescription')}</p>
      <h3>{t('about.teamTitle')}</h3>
      <p>{t('about.teamDescription')}</p>
    </section>
  );
};

export default AboutPage;
