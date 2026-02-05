import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import CountriesSection from '../components/sections/CountriesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';
import { services } from '../data/service';
import { countries } from '../data/countries';
import { testimonials } from '../data/testimonials';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>GlobalEduConsult | Study Abroad Experts for USA, UK, Canada, Australia, Germany</title>
        <meta
          name="description"
          content="Expert study abroad consultancy for USA, UK, Canada, Australia and Germany. University admissions, visa assistance, scholarship guidance and test preparation."
        />
        <meta
          name="keywords"
          content="study abroad, education consultants, USA universities, UK education, Canada student visa, Australia study, Germany education"
        />
      </Helmet>

      <HeroSection />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose GlobalEduConsult?</h2>
            <p className="section-subtitle">
              We provide end-to-end solutions for your study abroad journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-primary-700">15+</span>
              </div>
              <h3 className="text-xl font-bold mb-3">15+ Years Experience</h3>
              <p className="text-gray-600">Expert guidance from seasoned professionals with proven track record</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-secondary-700">1:1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Approach</h3>
              <p className="text-gray-600">Tailored solutions based on your academic background and career goals</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-green-700">INR</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Scholarship Success</h3>
              <p className="text-gray-600">Helped students secure over INR 10 Cr in scholarships and financial aid</p>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection services={services} />
      <CountriesSection countries={countries} />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
    </>
  );
};

export default Home;
