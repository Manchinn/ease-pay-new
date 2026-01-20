import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TabNavigation from './components/TabNavigation';
import EDCContent from './components/EDCContent';
import LinkContent from './components/LinkContent';
import SharedContent from './components/SharedContent';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import { InstallmentModal, DocumentsModal } from './components/InfoModals';

export default function App() {
  const [activeTab, setActiveTab] = useState('edc'); // 'edc' or 'link'
  const [showInstallmentModal, setShowInstallmentModal] = useState(false);
  const [showDocumentsModal, setShowDocumentsModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isTabSticky, setIsTabSticky] = useState(false);
  const tabRef = useRef(null);

  // ตรวจจับว่า tab ชน header หรือยัง
  useEffect(() => {
    const handleScroll = () => {
      if (tabRef.current) {
        const tabTop = tabRef.current.getBoundingClientRect().top;
        setIsTabSticky(tabTop <= 56); // 56px = header height
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="max-w-[480px] mx-auto bg-gray-50 min-h-screen relative font-['Noto_Sans_Thai']">
      <Header />

      <Hero activeTab={activeTab} onRegisterClick={() => setShowRegisterModal(true)} />

      <TabNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabRef={tabRef}
        isTabSticky={isTabSticky}
      />

      {activeTab === 'edc' && (
        <EDCContent
          setShowDocumentsModal={setShowDocumentsModal}
          setShowInstallmentModal={setShowInstallmentModal}
        />
      )}

      {activeTab === 'link' && <LinkContent setShowDocumentsModal={setShowDocumentsModal} />}

      <SharedContent />

      <Footer />

      {/* Modals */}
      {showInstallmentModal && (
        <InstallmentModal onClose={() => setShowInstallmentModal(false)} />
      )}

      {showDocumentsModal && (
        <DocumentsModal onClose={() => setShowDocumentsModal(false)} activeTab={activeTab} />
      )}

      {showRegisterModal && (
        <RegisterModal onClose={() => setShowRegisterModal(false)} />
      )}
    </div>
  );
}