import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { COMPANY_INFO, SOCIAL_LINKS } from '../../utils/constants';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Study in USA', path: '/study-usa' },
    { name: 'Study in UK', path: '/study-uk' },
    { name: 'Study in Canada', path: '/study-canada' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const servicesLinks = [
    { name: 'University Admissions', path: '/services/universities' },
    { name: 'Courses & Programs', path: '/services/courses-programs' },
    { name: 'Visa Assistance', path: '/services/visa-assistance' },
    { name: 'Test Preparation', path: '/services/test-preparation' },
    { name: 'Success Stories', path: '/services/success-stories' },
  ];

  const supportLinks = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Scholarship Guide', path: '/scholarship-guide' },
    { name: 'Free Consultation', path: '/free-consultation' },
    { name: 'Document Checklist', path: '/document-checklist' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">GEC</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  GlobalEdu<span className="text-secondary-500">Consult</span>
                </h2>
                <p className="text-gray-400 text-sm">Study Abroad Experts</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for global education since 2010. We help students achieve their study abroad dreams with expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition flex items-center">
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={20} className="text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
            
            {/* Newsletter Subscription */}
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4 text-white">Subscribe</h4>
              <p className="text-gray-400 mb-4">Get latest updates on admissions and scholarships</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-grow px-4 py-3 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="bg-primary-600 hover:bg-primary-700 px-4 py-3 rounded-r-lg transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright {new Date().getFullYear()} GlobalEduConsult. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {supportLinks.map((link) => (
                <Link key={link.name} to={link.path} className="text-gray-400 hover:text-white text-sm transition">
                  {link.name}
                </Link>
              ))}
              {legalLinks.map((link) => (
                <Link key={link.name} to={link.path} className="text-gray-400 hover:text-white text-sm transition">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
