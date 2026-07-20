import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import ServiceCard from '../../components/common/ServiceCard';
import { services } from '../../data/service';
import { CheckCircle, Users, Globe, Award } from 'lucide-react';

const ServicesOverview = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Comprehensive Study Abroad Support</title>
        <meta
          name="description"
          content="Explore our full range of services including university admissions, visa assistance, test preparation, scholarship guidance, and success stories."
        />
      </Helmet>

      <div className="bg-[#1a1a2e] text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Comprehensive Services</h1>
            <p className="text-xl text-gray-200">
              End-to-end support for your study abroad journey. From university selection to post-arrival
              assistance, we handle every step with expertise and care.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Our 5-Step Process</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#1a1a2e]/20"></div>

            <div className="space-y-12 md:space-y-8">
              {[
                { number: 1, title: 'Profile Assessment', desc: 'Detailed evaluation of academic background and goals' },
                { number: 2, title: 'University Shortlisting', desc: 'Personalized selection of best-fit universities' },
                { number: 3, title: 'Application Preparation', desc: 'Complete documentation and submission support' },
                { number: 4, title: 'Visa Assistance', desc: 'End-to-end visa guidance and interview preparation' },
                { number: 5, title: 'Pre-Departure Support', desc: 'Accommodation, travel, and orientation assistance' }
              ].map((step, index) => (
                <div key={step.number} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:items-start`}
                    >
                  <div
                    className={`w-12 h-12 bg-[#1a1a2e] text-white rounded-full flex items-center justify-center font-bold text-lg z-10 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    {step.number}
                  </div>
                  <div
                    className={`flex-grow bg-white rounded-xl shadow-lg p-6 max-w-3xl ${
                      index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Services?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="text-[#1a1a2e]" size={24} />
              </div>
              <h3 className="font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">15+ years average experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="text-secondary-600" size={24} />
              </div>
              <h3 className="font-bold mb-2">98% Success Rate</h3>
              <p className="text-gray-600 text-sm">High admission and visa success</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="text-[#1a1a2e]" size={24} />
              </div>
              <h3 className="font-bold mb-2">50+ Countries</h3>
              <p className="text-gray-600 text-sm">Extensive global network</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="text-secondary-600" size={24} />
              </div>
              <h3 className="font-bold mb-2">INR 10 Cr+ Scholarships</h3>
              <p className="text-gray-600 text-sm">Helped secure financial aid</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a free consultation with our experts and get a personalized roadmap for your study abroad journey.
          </p>
          <Link to="/contact" className="bg-secondary-600 hover:bg-secondary-700 text-white font-semibold px-8 py-4 rounded-lg transition inline-flex items-center justify-center">
            Book Free Consultation
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServicesOverview;
