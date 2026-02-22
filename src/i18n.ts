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
        contact: 'Contact Us', // Changed from 'about'
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
        contact: '문의하기', // Changed from '소개'
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
        contact: 'Kontakt', // Changed from 'Über uns'
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
