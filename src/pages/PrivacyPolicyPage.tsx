import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicyPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="privacy-policy" className="container page-section">
      <h2>{t('privacy.title')}</h2>
      <p>{t('privacy.lastUpdated')}</p>

      <h3>{t('privacy.infoCollectionTitle')}</h3>
      <p>{t('privacy.infoCollectionDescription')}</p>

      <h3>{t('privacy.howWeUseInfoTitle')}</h3>
      <p>{t('privacy.howWeUseInfoDescription')}</p>

      <h3>{t('privacy.cookiesTitle')}</h3>
      <p>{t('privacy.cookiesDescription')}</p>

      <h3>{t('privacy.googleAdSenseTitle')}</h3>
      <p>{t('privacy.googleAdSenseDescription')}</p>

      <h3>{t('privacy.dataSecurityTitle')}</h3>
      <p>{t('privacy.dataSecurityDescription')}</p>

      <h3>{t('privacy.yourRightsTitle')}</h3>
      <p>{t('privacy.yourRightsDescription')}</p>

      <h3>{t('privacy.thirdPartyLinksTitle')}</h3>
      <p>{t('privacy.thirdPartyLinksDescription')}</p>

      <h3>{t('privacy.changesToPolicyTitle')}</h3>
      <p>{t('privacy.changesToPolicyDescription')}</p>

      <h3>{t('privacy.contactUsTitle')}</h3>
      <p>{t('privacy.contactUsDescription')}</p>
    </section>
  );
};

export default PrivacyPolicyPage;
