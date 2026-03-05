import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import BGGGamePage from './pages/BGGGamePage';
import AICuratorPage from './pages/AICuratorPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import './App.css';

// Main Layout component
const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This is where the routed components will be rendered */}
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};

const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="games" element={<GamesPage />} />
            <Route path="games/:bggId" element={<BGGGamePage />} />
            <Route path="curator" element={<AICuratorPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="privacy" element={<PrivacyPolicyPage />} />
            <Route path="terms" element={<TermsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
