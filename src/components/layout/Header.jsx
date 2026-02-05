import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { COMPANY_INFO } from '../../utils/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'All Services', path: '/services' },
        { name: 'University Admissions', path: '/services/universities' },
        { name: 'Courses & Programs', path: '/services/courses-programs' },
        { name: 'Visa Assistance', path: '/services/visa-assistance' },
        { name: 'Test Preparation', path: '/services/test-preparation' },
        { name: 'Success Stories', path: '/services/success-stories' },
      ]
    },
    { 
      name: 'Study Abroad', 
      path: '/study-usa',
      dropdown: [
        { name: 'Study in USA', path: '/study-usa' },
        { name: 'Study in UK', path: '/study-uk' },
        { name: 'Study in Canada', path: '/study-canada' },
        { name: 'Study in Australia', path: '/study-australia' },
        { name: 'Study in Germany', path: '/study-germany' },
      ]
    },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-700 text-white py-2">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center text-sm space-y-1 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>{COMPANY_INFO.phone}</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Mail size={14} />
              <span>{COMPANY_INFO.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/free-consultation" className="hover:text-secondary-300 transition text-xs md:text-sm">
              Free Consultation
            </Link>
            <span className="hidden md:inline">|</span>
            <Link to="/faq" className="hover:text-secondary-300 transition text-xs md:text-sm">
              FAQ
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container-custom">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 md:space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">GEC</span>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-primary-800">
                  GlobalEdu<span className="text-secondary-600">Consult</span>
                </h1>
                <p className="text-xs text-gray-500 hidden md:block">Study Abroad Experts</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 py-2 ${
                      location.pathname === item.path || 
                      (item.dropdown && item.dropdown.some(d => d.path === location.pathname))
                        ? 'text-primary-600 font-semibold'
                        : 'text-gray-700 hover:text-primary-600'
                    } transition`}
                  >
                    <span className="text-sm md:text-base">{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    )}
                  </Link>
                  
                  {/* Dropdown */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 border border-gray-100">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition text-sm"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/free-consultation"
                className="btn-secondary px-4 md:px-6 text-sm md:text-base"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t py-4 animate-slide-up">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <div className="flex flex-col">
                      <Link
                        to={item.path}
                        className="flex justify-between items-center py-3 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded transition"
                        onClick={() => {
                          if (!item.dropdown) setIsMenuOpen(false);
                        }}
                      >
                        <span>{item.name}</span>
                        {item.dropdown && (
                          <ChevronDown size={16} className={`transition-transform ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        )}
                      </Link>
                      {item.dropdown && activeDropdown === item.name && (
                        <div className="pl-6 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block py-2 px-4 text-gray-600 hover:text-primary-600 transition text-sm"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div className="pt-4 px-4">
                  <Link
                    to="/free-consultation"
                    className="block btn-secondary text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;