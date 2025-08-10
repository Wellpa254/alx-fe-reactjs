
import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <MainContent />
      <UserProfile />
      <Footer />
    </div>
  );
}
