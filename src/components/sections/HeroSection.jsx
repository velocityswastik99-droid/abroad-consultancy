import { Link } from 'react-router-dom';
import { PlayCircle, Award, Globe, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container-custom relative py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award size={16} />
              <span className="text-sm font-medium">Trusted by 5,000+ Students</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Gateway to <span className="text-secondary-400">Global Education</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Expert guidance for studying abroad in top universities across 50+ countries.
              From admission to visa, we handle everything with a 98% success rate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/free-consultation" className="btn-secondary text-lg px-8 py-4 text-center">
                Start Your Journey
              </Link>
              <Link
                to="/services"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition flex items-center justify-center space-x-2"
              >
                <PlayCircle size={20} />
                <span>Watch Success Stories</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">5,000+</div>
                <div className="text-gray-300 text-sm">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">50+</div>
                <div className="text-gray-300 text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">98%</div>
                <div className="text-gray-300 text-sm">Visa Success</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">INR 10 Cr+</div>
                <div className="text-gray-300 text-sm">Scholarships</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-800">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Globe size={32} className="text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Free Study Abroad Consultation</h3>
              <p className="text-gray-600">Get personalized guidance from our experts</p>
            </div>

            <form className="space-y-4">
              <div>
                <input type="text" placeholder="Full Name" className="input-field" required />
              </div>
              <div>
                <input type="email" placeholder="Email Address" className="input-field" required />
              </div>
              <div>
                <input type="tel" placeholder="Phone Number" className="input-field" required />
              </div>
              <div>
                <select className="input-field">
                  <option value="">Preferred Study Destination</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="germany">Germany</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <select className="input-field">
                  <option value="">Level of Study</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD/Doctorate</option>
                  <option value="diploma">Diploma/Certificate</option>
                </select>
              </div>
              <button type="submit" className="w-full btn-primary py-4">
                Book Free Consultation
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-4">
                <Users size={20} className="text-primary-600" />
                <span className="text-sm text-gray-600">Consultation with verified experts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
