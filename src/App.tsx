import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { UnderwritingModal } from './components/UnderwritingModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { UnlockingFinancingPage } from './pages/UnlockingFinancingPage';
import { ClaimsPage } from './pages/ClaimsPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';

type TabId = 'home' | 'about' | 'services' | 'unlocking-financing' | 'claims' | 'insights' | 'contact';

function App() {
  const [currentTab, setCurrentTab] = useState<TabId>('home');
  const [modalOpen, setModalOpen] = useState(false);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab as TabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  

  return (
    <div className="min-h-screen bg-[#0B0D11] font-sans">
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenUnderwritingModal={() => setModalOpen(true)}
      />

      {currentTab === 'home' && (
        <HomePage
          onOpenUnderwritingModal={() => setModalOpen(true)}
          onNavigate={handleNavigate}
        />
      )}
      {currentTab === 'about' && (
        <AboutPage
          onOpenUnderwritingModal={() => setModalOpen(true)}
          onNavigate={handleNavigate}
        />
      )}
      {currentTab === 'services' && (
        <ServicesPage onOpenUnderwritingModal={() => setModalOpen(true)} />
      )}
      {currentTab === 'unlocking-financing' && (
        <UnlockingFinancingPage onOpenUnderwritingModal={() => setModalOpen(true)} />
      )}
      {currentTab === 'claims' && (
        <ClaimsPage onOpenUnderwritingModal={() => setModalOpen(true)} />
      )}
      {currentTab === 'insights' && <InsightsPage />}
      {currentTab === 'contact' && (
        <ContactPage onOpenUnderwritingModal={() => setModalOpen(true)} />
      )}

      <Footer
        onNavigate={handleNavigate}
        onOpenUnderwritingModal={() => setModalOpen(true)}
      />

      <UnderwritingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

export default App;
