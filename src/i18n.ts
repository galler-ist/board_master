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
        about: 'About',
      },
      hero: {
        title: 'Discover Your Next Favorite Board Game',
        subtitle: 'In-depth reviews, strategy guides, and more from passionate gamers.',
        button: 'Browse All Reviews',
      },
      featured: {
        title: 'Featured Reviews',
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
        about: '소개',
      },
      hero: {
        title: '인생 보드게임을 찾아보세요',
        subtitle: '열정적인 게이머들의 심층 리뷰, 전략 가이드 등을 만나보세요.',
        button: '모든 리뷰 보기',
      },
      featured: {
        title: '추천 리뷰',
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
        about: 'Über uns',
      },
      hero: {
        title: 'Entdecke dein nächstes Lieblingsbrettspiel',
        subtitle: 'Ausführliche Bewertungen, Strategieanleitungen und mehr von leidenschaftlichen Spielern.',
        button: 'Alle Bewertungen durchsuchen',
      },
      featured: {
        title: 'Vorgestellte Bewertungen',
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
