import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// The translations
const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        reviews: 'Reviews',
        contact: 'Contact Us',
        about: 'About Us', // New nav link
      },
      hero: {
        title: 'Discover Your Next Favorite Board Game',
        subtitle: 'In-depth reviews, strategy guides, and more from passionate gamers.',
        button: 'Browse All Reviews',
      },
      featured: {
        title: 'Featured Reviews',
      },
      contact: {
        title: 'Partnership Inquiry',
        description: 'Have a partnership proposal or a business inquiry? Fill out the form below and we will get back to you shortly.',
        nameLabel: 'Your Name',
        emailLabel: 'Your Email',
        messageLabel: 'Your Message',
        submitButton: 'Send Message',
      },
      reviewDetail: {
        backToReviews: 'Back to Reviews',
        notFound: 'Review Not Found',
        notFoundDescription: 'The review you are looking for does not exist.',
      },
      disqus: {
        noscript: 'Please enable JavaScript to view the comments powered by Disqus.',
      },
      about: {
        title: 'About Board Master',
        description1: 'Welcome to Board Master, your ultimate resource for board game reviews, strategy guides, and community discussions.',
        description2: 'Our mission is to help you discover your next favorite board game, whether you are a seasoned veteran or new to the hobby.',
        missionTitle: 'Our Mission',
        missionDescription: 'To provide honest, in-depth, and engaging content that helps board game enthusiasts make informed decisions and get the most out of their gaming experience.',
        teamTitle: 'Our Team',
        teamDescription: 'We are a small team of passionate board gamers dedicated to sharing our love for the hobby with the world.',
      },
      privacy: {
        title: 'Privacy Policy',
        lastUpdated: 'Last Updated: February 22, 2026',
        infoCollectionTitle: 'Information We Collect',
        infoCollectionDescription: 'We collect information you provide directly to us when you use our services, such as when you fill out a contact form or subscribe to a newsletter. This may include your name, email address, and message content.',
        howWeUseInfoTitle: 'How We Use Your Information',
        howWeUseInfoDescription: 'We use the information we collect to provide, maintain, and improve our services, to respond to your inquiries, and to send you service-related communications.',
        dataSecurityTitle: 'Data Security',
        dataSecurityDescription: 'We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure.',
        yourRightsTitle: 'Your Rights',
        yourRightsDescription: 'You have the right to access, update, or delete your personal information. Please contact us to exercise these rights.',
        thirdPartyLinksTitle: 'Third-Party Links',
        thirdPartyLinksDescription: 'Our service may contain links to third-party websites not operated by us. We are not responsible for the content or privacy practices of these sites.',
        changesToPolicyTitle: 'Changes to this Policy',
        changesToPolicyDescription: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.',
        contactUsTitle: 'Contact Us',
        contactUsDescription: 'If you have any questions about this Privacy Policy, please contact us via our contact form.',
      },
      footer: {
        rights: 'All rights reserved.',
      },
    },
  },
  ko: {
    translation: {
      nav: {
        home: '홈',
        reviews: '리뷰',
        contact: '문의하기',
        about: '회사소개', // New nav link
      },
      hero: {
        title: '인생 보드게임을 찾아보세요',
        subtitle: '열정적인 게이머들의 심층 리뷰, 전략 가이드 등을 만나보세요.',
        button: '모든 리뷰 보기',
      },
      featured: {
        title: '추천 리뷰',
      },
      contact: {
        title: '제휴 문의',
        description: '제휴 제안이나 사업 문의가 있으시면 아래 양식을 작성해 주세요. 곧 연락드리겠습니다.',
        nameLabel: '이름',
        emailLabel: '이메일',
        messageLabel: '메시지',
        submitButton: '메시지 보내기',
      },
      reviewDetail: {
        backToReviews: '리뷰 목록으로 돌아가기',
        notFound: '리뷰를 찾을 수 없습니다',
        notFoundDescription: '찾으시는 리뷰가 존재하지 않습니다.',
      },
      disqus: {
        noscript: 'Disqus에서 제공하는 댓글을 보려면 JavaScript를 활성화하십시오.',
      },
      about: {
        title: '보드 마스터 소개',
        description1: '보드 마스터는 보드게임 리뷰, 전략 가이드, 커뮤니티 토론을 위한 최고의 리소스입니다.',
        description2: '저희의 미션은 노련한 베테랑이든 새로운 취미를 찾는 분이든, 여러분의 인생 보드게임을 찾는 데 도움을 드리는 것입니다.',
        missionTitle: '우리의 미션',
        missionDescription: '보드게임 애호가들이 정보에 입각한 결정을 내리고 게임 경험을 최대한 활용할 수 있도록 정직하고 심층적이며 매력적인 콘텐츠를 제공하는 것입니다.',
        teamTitle: '우리 팀',
        teamDescription: '저희는 보드게임에 대한 열정을 전 세계와 공유하는 데 헌신하는 열정적인 보드게이머들로 구성된 소규모 팀입니다.',
      },
      privacy: {
        title: '개인정보처리방침',
        lastUpdated: '최종 업데이트: 2026년 2월 22일',
        infoCollectionTitle: '수집하는 정보',
        infoCollectionDescription: '당사는 귀하가 서비스 이용 시 (예: 문의 양식 작성 또는 뉴스레터 구독 시) 직접 제공하는 정보를 수집합니다. 여기에는 귀하의 이름, 이메일 주소 및 메시지 내용이 포함될 수 있습니다.',
        howWeUseInfoTitle: '정보 사용 방법',
        howWeUseInfoDescription: '당사는 수집한 정보를 서비스 제공, 유지 및 개선, 문의 응답, 서비스 관련 통신 발송에 사용합니다.',
        dataSecurityTitle: '데이터 보안',
        dataSecurityDescription: '당사는 무단 액세스, 변경, 공개 또는 파괴로부터 귀하의 정보를 보호하기 위해 합리적인 보안 조치를 구현합니다. 그러나 인터넷 전송은 완전히 안전하지 않습니다.',
        yourRightsTitle: '귀하의 권리',
        yourRightsDescription: '귀하는 개인 정보에 액세스, 업데이트 또는 삭제할 권리가 있습니다. 이러한 권리 행사를 위해 당사에 문의하십시오.',
        thirdPartyLinksTitle: '제3자 링크',
        thirdPartyLinksDescription: '당사 서비스에는 당사가 운영하지 않는 제3자 웹사이트에 대한 링크가 포함될 수 있습니다. 당사는 이러한 사이트의 콘텐츠 또는 개인 정보 보호 관행에 대해 책임지지 않습니다.',
        changesToPolicyTitle: '정책 변경',
        changesToPolicyDescription: '당사는 개인정보처리방침을 수시로 업데이트할 수 있습니다. 변경 사항은 이 페이지에 새로운 개인정보처리방침을 게시하여 알려드립니다.',
        contactUsTitle: '문의하기',
        contactUsDescription: '본 개인정보처리방침에 대해 질문이 있으시면 문의 양식을 통해 당사에 문의하십시오.',
      },
      footer: {
        rights: '모든 권리 보유.',
      },
    },
  },
  de: {
    translation: {
      nav: {
        home: 'Startseite',
        reviews: 'Bewertungen',
        contact: 'Kontakt',
        about: 'Über uns', // New nav link
      },
      hero: {
        title: 'Entdecke dein nächstes Lieblingsbrettspiel',
        subtitle: 'Ausführliche Bewertungen, Strategieanleitungen und mehr von leidenschaftlichen Spielern.',
        button: 'Alle Bewertungen durchsuchen',
      },
      featured: {
        title: 'Vorgestellte Bewertungen',
      },
      contact: {
        title: 'Partnerschaftsanfrage',
        description: 'Haben Sie einen Partnerschaftsvorschlag oder eine Geschäftsanfrage? Füllen Sie das untenstehende Formular aus und wir werden uns in Kürze bei Ihnen melden.',
        nameLabel: 'Ihr Name',
        emailLabel: 'Ihre E-Mail',
        messageLabel: 'Ihre Nachricht',
        submitButton: 'Nachricht senden',
      },
      reviewDetail: {
        backToReviews: 'Zurück zu Bewertungen',
        notFound: 'Bewertung nicht gefunden',
        notFoundDescription: 'Die gesuchte Bewertung existiert nicht.',
      },
      disqus: {
        noscript: 'Bitte aktivieren Sie JavaScript, um die von Disqus bereitgestellten Kommentare anzuzeigen.',
      },
      about: {
        title: 'Über Board Master',
        description1: 'Willkommen bei Board Master, Ihrer ultimativen Quelle für Brettspielbewertungen, Strategieführer und Community-Diskussionen.',
        description2: 'Unsere Mission ist es, Ihnen dabei zu helfen, Ihr nächstes Lieblingsbrettspiel zu entdecken, egal ob Sie ein erfahrener Veteran oder neu in diesem Hobby sind.',
        missionTitle: 'Unsere Mission',
        missionDescription: 'Wir möchten ehrliche, ausführliche und ansprechende Inhalte bereitstellen, die Brettspiel-Enthusiasten helfen, fundierte Entscheidungen zu treffen und das Beste aus ihrem Spielerlebnis herauszuholen.',
        teamTitle: 'Unser Team',
        teamDescription: 'Wir sind ein kleines Team leidenschaftlicher Brettspieler, die sich zum Ziel gesetzt haben, unsere Liebe zu diesem Hobby mit der Welt zu teilen.',
      },
      privacy: {
        title: 'Datenschutzerklärung',
        lastUpdated: 'Zuletzt aktualisiert: 22. Februar 2026',
        infoCollectionTitle: 'Informationen, die wir sammeln',
        infoCollectionDescription: 'Wir sammeln Informationen, die Sie uns direkt zur Verfügung stellen, wenn Sie unsere Dienste nutzen, z. B. wenn Sie ein Kontaktformular ausfüllen oder einen Newsletter abonnieren. Dies kann Ihren Namen, Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht umfassen.',
        howWeUseInfoTitle: 'Wie wir Ihre Informationen verwenden',
        howWeUseInfoDescription: 'Wir verwenden die von uns gesammelten Informationen, um unsere Dienste bereitzustellen, zu pflegen und zu verbessern, um auf Ihre Anfragen zu antworten und um Ihnen servicebezogene Mitteilungen zu senden.',
        dataSecurityTitle: 'Datensicherheit',
        dataSecurityDescription: 'Wir implementieren angemessene Sicherheitsmaßnahmen, um Ihre Informationen vor unbefugtem Zugriff, Änderung, Offenlegung oder Zerstörung zu schützen. Keine Internetübertragung ist jedoch vollständig sicher.',
        yourRightsTitle: 'Ihre Rechte',
        yourRightsDescription: 'Sie haben das Recht, auf Ihre persönlichen Daten zuzugreifen, diese zu aktualisieren oder zu löschen. Bitte kontaktieren Sie uns, um diese Rechte auszuüben.',
        thirdPartyLinksTitle: 'Links von Drittanbietern',
        thirdPartyLinksDescription: 'Unser Dienst kann Links zu Websites Dritter enthalten, die nicht von uns betrieben werden. Wir sind nicht verantwortlich für den Inhalt oder die Datenschutzpraktiken dieser Websites.',
        changesToPolicyTitle: 'Änderungen an dieser Richtlinie',
        changesToPolicyDescription: 'Wir können unsere Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über Änderungen informieren, indem wir die neue Datenschutzerklärung auf dieser Seite veröffentlichen.',
        contactUsTitle: 'Kontaktieren Sie uns',
        contactUsDescription: 'Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte über unser Kontaktformular.',
      },
      footer: {
        rights: 'Alle Rechte vorbehalten.',
      },
    },
  },
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Use English if detected language is not available
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
