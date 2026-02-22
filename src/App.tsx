import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import ReviewDetailPage from './pages/ReviewDetailPage';
import AboutPage from './pages/AboutPage'; // Import AboutPage
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'; // Import PrivacyPolicyPage
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
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="reviews/:id" element={<ReviewDetailPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="about" element={<AboutPage />} /> {/* New route for AboutPage */}
            <Route path="privacy" element={<PrivacyPolicyPage />} /> {/* New route for PrivacyPolicyPage */}
            {/* Add more routes here as needed */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
