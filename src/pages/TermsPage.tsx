import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Terms of Service | Board Master</title>
        <meta name="description" content="Terms of Service for Board Master" />
      </Helmet>
      <section className="container page-section">
        <h1>Terms of Service</h1>
        <p>Last Updated: March 3, 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using Board Master, you accept and agree to be bound by the terms and provision of this agreement.</p>

        <h2>2. Use of the Site</h2>
        <p>You agree to use the site only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the site.</p>

        <h2>3. Content and Copyright</h2>
        <p>All content provided on this website is for informational purposes only. The owners of this blog make no representations as to the accuracy or completeness of any information on this site or found by following any link on this site.</p>
        <p>Board game data and images are provided via the BoardGameGeek API and are subject to their terms of use.</p>

        <h2>4. User Generated Content</h2>
        <p>Users may post reviews and comments. We reserve the right to remove any content that we determine to be unlawful, offensive, threatening, libelous, defamatory, obscene, or otherwise objectionable.</p>

        <h2>5. Disclaimer</h2>
        <p>The materials on Board Master's website are provided on an 'as is' basis. Board Master makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

        <h2>6. Changes to Terms</h2>
        <p>We reserve the right to update or modify these Terms of Service at any time without prior notice.</p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us.</p>
      </section>
    </>
  );
};

export default TermsPage;
