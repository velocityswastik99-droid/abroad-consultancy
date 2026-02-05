import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Import Core Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Import Services Pages
import ServicesOverview from './pages/Services/ServicesOverview';
import Universities from './pages/Services/Universities';
import CoursesPrograms from './pages/Services/CoursesPrograms';
import VisaAssistance from './pages/Services/VisaAssistance';
import TestPreparation from './pages/Services/TestPreparation';
import SuccessStories from './pages/Services/SuccessStories';

// Import Study Abroad Pages
import StudyUSA from './pages/StudyAbroad/StudyUSA';
import StudyUK from './pages/StudyAbroad/StudyUK';
import StudyCanada from './pages/StudyAbroad/StudyCanada';
import StudyAustralia from './pages/StudyAbroad/StudyAustralia';
import StudyGermany from './pages/StudyAbroad/StudyGermany';

// Import Support Pages
import FAQ from './pages/Support/FAQ';
import ScholarshipGuide from './pages/Support/ScholarshipGuide';
import FreeConsultation from './pages/Support/FreeConsultation';
import DocumentChecklist from './pages/Support/DocumentChecklist';

// Import Blog Pages
import BlogHome from './pages/Blog/BlogHome';
import BlogPost from './pages/Blog/BlogPost';

// Import Legal Pages
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsConditions from './pages/Legal/TermsConditions';

// Import Section Components
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import CountriesSection from './components/sections/CountriesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import CTASection from './components/sections/CTASection';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        
        {/* Services Routes */}
        <Route path="/services" element={<Layout><ServicesOverview /></Layout>} />
        <Route path="/services/universities" element={<Layout><Universities /></Layout>} />
        <Route path="/services/courses-programs" element={<Layout><CoursesPrograms /></Layout>} />
        <Route path="/services/visa-assistance" element={<Layout><VisaAssistance /></Layout>} />
        <Route path="/services/test-preparation" element={<Layout><TestPreparation /></Layout>} />
        <Route path="/services/success-stories" element={<Layout><SuccessStories /></Layout>} />
        
        {/* Study Abroad Routes */}
        <Route path="/study-usa" element={<Layout><StudyUSA /></Layout>} />
        <Route path="/study-uk" element={<Layout><StudyUK /></Layout>} />
        <Route path="/study-canada" element={<Layout><StudyCanada /></Layout>} />
        <Route path="/study-australia" element={<Layout><StudyAustralia /></Layout>} />
        <Route path="/study-germany" element={<Layout><StudyGermany /></Layout>} />
        
        {/* Support Routes */}
        <Route path="/faq" element={<Layout><FAQ /></Layout>} />
        <Route path="/scholarship-guide" element={<Layout><ScholarshipGuide /></Layout>} />
        <Route path="/free-consultation" element={<Layout><FreeConsultation /></Layout>} />
        <Route path="/document-checklist" element={<Layout><DocumentChecklist /></Layout>} />
        
        {/* Blog Routes */}
        <Route path="/blog" element={<Layout><BlogHome /></Layout>} />
        <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
        
        {/* Legal Routes */}
        <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms-conditions" element={<Layout><TermsConditions /></Layout>} />
        
        {/* 404 Page */}
        <Route path="*" element={<Layout><div className="container-custom py-16 text-center"><h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1><p className="text-gray-600">The page you are looking for doesn't exist.</p></div></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
