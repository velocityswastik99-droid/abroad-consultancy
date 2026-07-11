import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { COMPANY_INFO, SOCIAL_LINKS } from '../../utils/constants';

const Footer = () => {
  const supportLinks = ['FAQ', 'Free Consultation', 'Document Checklist'];

  const legalLinks = ['Privacy Policy', 'Terms & Conditions'];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-transparent p-2">
                <img 
                  src="/images/logo.svg" 
                  alt="Future path career Logo" 
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  Future path career
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
          <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              Copyright {new Date().getFullYear()} Future path career. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
              {supportLinks.map((link) => (
                <span key={link}>{link}</span>
              ))}
              {legalLinks.map((link) => (
                <span key={link}>{link}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
