import { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, MapPin, Target, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../../utils/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  const topBarOrbs = useMemo(
    () =>
      Array.from({ length: 3 }, () => ({
        size: 96 + Math.floor(Math.random() * 64),
        top: Math.random() * 100,
        duration: 18 + Math.random() * 12,
        delay: -Math.random() * 10,
      })),
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    const handleMouseMove = (e) => {
      const headerEl = headerRef.current;
      if (!headerEl) return;
      const rect = headerEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      headerEl.style.setProperty('--mouse-x', `${x}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigation = [
    { 
      name: 'Home', 
      path: '/',
      icon: '🏠'
    },
    { 
      name: 'About Us', 
      path: '/about',
      icon: '📋'
    },
    { 
      name: 'Services', 
      path: '/services',
      icon: '⚙️',
      roadmap: ['Explore', 'Choose', 'Start'],
      dropdown: [
        { name: 'All Services', path: '/services', icon: '🔍' },
        { name: 'University Admissions', path: '/services/universities', icon: '🎓' },
        { name: 'Courses & Programs', path: '/services/courses-programs', icon: '📚' },
        { name: 'Visa Assistance', path: '/services/visa-assistance', icon: '✈️' },
        { name: 'Test Preparation', path: '/services/test-preparation', icon: '📝' },
        { name: 'Success Stories', path: '/services/success-stories', icon: '⭐' },
      ]
    },
    { 
      name: 'Study Abroad', 
      path: '/study-usa',
      icon: '🌍',
      roadmap: ['Select', 'Apply', 'Go'],
      dropdown: [
        { name: 'Study in USA', path: '/study-usa', icon: '🇺🇸' },
        { name: 'Study in UK', path: '/study-uk', icon: '🇬🇧' },
        { name: 'Study in Canada', path: '/study-canada', icon: '🇨🇦' },
        { name: 'Study in Australia', path: '/study-australia', icon: '🇦🇺' },
        { name: 'Study in Germany', path: '/study-germany', icon: '🇩🇪' },
      ]
    },
    { 
      name: 'Blog', 
      path: '/blog',
      icon: '📰'
    },
    { 
      name: 'Contact', 
      path: '/contact',
      icon: '📞'
    },
  ];

  // Roadmap progress indicator component
  const RoadmapIndicator = ({ steps, currentStep = 0 }) => (
    <div className="flex items-center space-x-1 mt-1">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className={`w-1.5 h-1.5 rounded-full ${
            index <= currentStep ? 'bg-primary-600' : 'bg-gray-300'
          }`} />
          {index < steps.length - 1 && (
            <div className={`w-3 h-0.5 ${
              index < currentStep ? 'bg-primary-300' : 'bg-gray-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Top Bar - Red Theme */}
      <motion.div 
        className="bg-[#1a1a2e] text-white py-2 relative overflow-hidden"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            {topBarOrbs.map((orb, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-topbar-orb"
                style={{
                  width: `${orb.size}px`,
                  height: `${orb.size}px`,
                  top: `${orb.top}%`,
                  left: '-12rem',
                  '--orb-duration': `${orb.duration}s`,
                  '--orb-delay': `${orb.delay}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container-custom flex flex-col md:flex-row justify-between items-center text-sm space-y-1 md:space-y-0 relative z-10">
          <div className="flex items-center space-x-4">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Phone size={14} />
              <span>{COMPANY_INFO.phone}</span>
            </motion.div>
            <motion.div 
              className="hidden md:flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Mail size={14} />
              <span>{COMPANY_INFO.email}</span>
            </motion.div>
          </div>
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/free-consultation" className="hover:text-white/70 transition text-xs md:text-sm flex items-center space-x-1">
                <Target size={12} />
                <span>Free Consultation</span>
              </Link>
            </motion.div>
            <span className="hidden md:inline text-white/30">|</span>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/faq" className="hover:text-white/70 transition text-xs md:text-sm flex items-center space-x-1">
                <Award size={12} />
                <span>FAQ</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header 
        className={`bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'shadow-lg' : 'shadow-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        ref={headerRef}
      >
        {/* Red gradient line at top */}
        <div className="h-1 bg-gradient-to-r from-red-500 via-red-600 to-red-500" />
        
        <nav className="container-custom">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo with red theme */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Link to="/" className="flex items-center space-x-2 md:space-x-3">
                <motion.div 
                  className="h-16 md:h-20 w-auto flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/images/logo.svg" 
                    alt="FuturePath Careers Logo" 
                    className="h-full w-auto max-h-full object-contain drop-shadow-sm hover:drop-shadow-md transition-all"
                    loading="eager"
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Flex with auto margins */}
            <div className="hidden lg:flex items-center justify-end flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-1 px-2">
                {navigation.map((item) => (
                  <motion.div 
                    key={item.name} 
                    className="relative flex-shrink-0"
                    onHoverStart={() => item.dropdown && setActiveDropdown(item.name)}
                    onHoverEnd={() => item.dropdown && setActiveDropdown(null)}
                    onFocus={() => item.dropdown && setActiveDropdown(item.name)}
                    onBlur={(e) => {
                      if (item.dropdown && !e.currentTarget.contains(e.relatedTarget)) {
                        setActiveDropdown(null);
                      }
                    }}
                    whileHover={{ y: -2 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center space-x-1 px-2 py-2 rounded-lg transition-all duration-300 ${
                        location.pathname === item.path || 
                        (item.dropdown && item.dropdown.some(d => d.path === location.pathname))
                          ? 'text-[#1a1a2e] bg-[#1a1a2e]/10 font-semibold'
                          : 'text-gray-700 hover:text-[#1a1a2e] hover:bg-[#1a1a2e]/10'
                      }`}
                      aria-haspopup={item.dropdown ? 'menu' : undefined}
                      aria-expanded={item.dropdown ? activeDropdown === item.name : undefined}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>
                      {item.dropdown && (
                        <motion.div
                          animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-0.5"
                        >
                          <ChevronDown size={14} />
                        </motion.div>
                      )}
                    </Link>
                    
                    {/* Roadmap mini indicator */}
                    {item.roadmap && (
                      <div className="absolute -bottom-2 left-0 right-0 flex justify-center">
                        <RoadmapIndicator steps={item.roadmap} currentStep={0} />
                      </div>
                    )}
                    
                    {/* Dropdown with roadmap style */}
                    <AnimatePresence>
                      {item.dropdown && activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white shadow-xl rounded-xl py-2 border border-slate-200 overflow-hidden"
                          style={{ minWidth: '240px', zIndex: 60 }}
                        >
                          {/* Red gradient header */}
                          <div className="h-1 bg-gradient-to-r from-[#1a1a2e]/30 via-[#1a1a2e]/60 to-[#1a1a2e]/30" />
                          
                          {/* Dropdown items with roadmap connectors */}
                          {item.dropdown.map((subItem, index) => (
                            <motion.div
                              key={subItem.name}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                to={subItem.path}
                                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-[#1a1a2e]/5 hover:text-[#1a1a2e] transition group relative"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {/* Roadmap connector line */}
                                {index < item.dropdown.length - 1 && (
                                  <div className="absolute left-6 top-10 w-0.5 h-6 bg-gradient-to-b from-slate-200 to-transparent" />
                                )}
                                
                                <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-lg group-hover:bg-slate-100 transition flex-shrink-0">
                                  {subItem.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <span className="text-sm font-medium block truncate">{subItem.name}</span>
                                  {/* Step indicator */}
                                  <div className="flex items-center space-x-1 mt-1">
                                    <div className="w-1 h-1 rounded-full bg-[#1a1a2e]/60" />
                                    <div className="w-2 h-0.5 bg-[#1a1a2e]/30" />
                                    <div className="w-1 h-1 rounded-full bg-[#1a1a2e]/50" />
                                  </div>
                                </div>
                                
                                {/* Hover effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/0 via-[#1a1a2e]/5 to-[#1a1a2e]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                              </Link>
                            </motion.div>
                          ))}
                          
                          {/* Footer with call to action */}
                          <div className="px-4 py-3 bg-gradient-to-r from-slate-50 to-slate-100/50 mt-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-[#1a1a2e] font-medium">Need help?</span>
                              <Link to="/contact" className="text-[#1a1a2e] hover:text-[#111122] font-semibold flex items-center space-x-1">
                                <span>Contact us</span>
                                <ChevronDown size={12} className="-rotate-90" />
                              </Link>
                            </div>
                      </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Apply Now Button - Right aligned with left margin */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 ml-2"
            >
              <Link
                to="/free-consultation"
                className="btn-secondary px-4 py-2 text-sm font-semibold bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group rounded-lg whitespace-nowrap inline-flex items-center"
              >
                <span className="relative z-10 flex items-center space-x-1">
                  <Target size={14} />
                  <span>Apply Now</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-[#1a1a2e]/10 hover:text-[#1a1a2e] transition flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Navigation with roadmap style */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden bg-white border-t border-slate-200 overflow-hidden"
                id="mobile-menu"
              >
                <div className="py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between px-4">
                          <Link
                            to={item.path}
                            className="flex items-center space-x-3 py-3 text-gray-700 hover:text-[#1a1a2e] transition flex-1"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            <span className="text-xl">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                            {item.roadmap && (
                              <div className="ml-2">
                                <RoadmapIndicator steps={item.roadmap} currentStep={0} />
                              </div>
                            )}
                          </Link>
                          {item.dropdown && (
                            <motion.button
                              onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                              animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="p-2 hover:bg-[#1a1a2e]/10 rounded-lg"
                              aria-label={`Toggle ${item.name} submenu`}
                              aria-expanded={activeDropdown === item.name}
                            >
                              <ChevronDown size={16} className="text-[#1a1a2e]" />
                            </motion.button>
                          )}
                        </div>
                        
                        {/* Mobile dropdown with roadmap */}
                        <AnimatePresence>
                          {item.dropdown && activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-12 pr-4 space-y-2 pb-2">
                                {item.dropdown.map((subItem, subIndex) => (
                                  <motion.div
                                    key={subItem.name}
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: subIndex * 0.05 }}
                                  >
                                    <Link
                                      to={subItem.path}
                                      className="flex items-center space-x-3 py-2 px-3 text-gray-600 hover:text-[#1a1a2e] hover:bg-[#1a1a2e]/5 rounded-lg transition group relative"
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setActiveDropdown(null);
                                      }}
                                    >
                                      {/* Roadmap line */}
                                      {subIndex < item.dropdown.length - 1 && (
                                        <div className="absolute left-4 top-6 w-0.5 h-6 bg-gradient-to-b from-slate-200 to-transparent" />
                                      )}
                                      
                                      <div className="w-6 h-6 bg-slate-50 rounded flex items-center justify-center text-sm group-hover:bg-slate-100 flex-shrink-0">
                                        {subItem.icon}
                                      </div>
                                      <span className="text-sm flex-1">{subItem.name}</span>
                                      
                                      {/* Step indicator */}
                                      <div className="flex items-center space-x-1 flex-shrink-0">
                                        <div className="w-1 h-1 rounded-full bg-[#1a1a2e]/40" />
                                        <div className="w-2 h-0.5 bg-[#1a1a2e]/30" />
                                        <div className="w-1 h-1 rounded-full bg-[#1a1a2e]/60" />
                                      </div>
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="pt-4 px-4"
                  >
                    <Link
                      to="/free-consultation"
                      className="block w-full btn-secondary text-center bg-gradient-to-r from-secondary-600 to-secondary-700 text-white hover:from-secondary-700 hover:to-secondary-800 shadow-lg py-3 rounded-lg font-semibold"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Apply Now
                    </Link>
                    
                    {/* Mobile roadmap footer */}
                    <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                        <span>Explore</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary-500" />
                        <span>Apply</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                        <span>Succeed</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
        
        {/* Bottom red line with mouse follow effect */}
        <motion.div 
          className="h-0.5 bg-gradient-to-r from-red-400 via-red-600 to-red-400"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x, 50%) 0px, rgba(239, 68, 68, 0.5), transparent 50%)'
          }}
        />
      </motion.header>
    </>
  );
};

export default Header;
