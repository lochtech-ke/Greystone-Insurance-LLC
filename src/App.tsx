import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { UnlockingFinancingPage } from './pages/UnlockingFinancingPage';
import { ContactPage } from './pages/ContactPage';
import { TalkToUnderwriterPage } from './pages/TalkToUnderwriterPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--paper)] text-[var(--charcoal)] font-sans">
      <ScrollToTop />
      <Header />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/unlocking-financing" element={<UnlockingFinancingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/talk-to-an-underwriter" element={<TalkToUnderwriterPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
