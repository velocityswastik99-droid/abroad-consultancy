import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Globe, Mail, Phone } from 'lucide-react';
import ContactForm from '../../components/common/ContactForm.jsx';
import { COMPANY_INFO } from '../../utils/constants.js';

const SUPPORT_COUNTRIES = [
  {
    name: 'United Kingdom',
    slug: 'uk',
    description: 'Get UK-specific study abroad support for universities, visas, and application planning.',
  },
  {
    name: 'Australia',
    slug: 'australia',
    description: 'Access dedicated Australia guidance for admissions, post-study work visas, and course selection.',
  },
  {
    name: 'USA',
    slug: 'usa',
    description: 'Connect with our USA counselors for admissions strategy, scholarships, and visa support.',
  },
];

function FreeConsultation() {
  const [selectedCountry, setSelectedCountry] = useState('uk');
  const activeCountry = SUPPORT_COUNTRIES.find((item) => item.slug === selectedCountry);

  return (
    <>
      <Helmet>
        <title>Support & Contact | Future path career</title>
        <meta
          name="description"
          content="Select your destination country and contact our support team for study abroad guidance and help with your enquiry."
        />
      </Helmet>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-primary-600 mb-3">Support</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Support by Country</h1>
            <p className="text-gray-600">
              Choose the country you need help with and submit your enquiry through our dedicated contact form.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {SUPPORT_COUNTRIES.map((country) => (
              <button
                key={country.slug}
                type="button"
                onClick={() => setSelectedCountry(country.slug)}
                className={`rounded-3xl border p-6 text-left transition-shadow hover:shadow-xl ${
                  selectedCountry === country.slug ? 'border-secondary-600 bg-secondary-50 shadow-lg' : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold">{country.name}</h2>
                    <p className="text-sm text-gray-500 mt-1">Support country</p>
                  </div>
                  <CheckCircle size={24} className={selectedCountry === country.slug ? 'text-secondary-600' : 'text-gray-300'} />
                </div>
                <p className="text-gray-600">{country.description}</p>
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-slate-50 rounded-3xl p-8 shadow-sm border border-gray-200">
              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.3em] text-secondary-600 mb-2">Selected country</p>
                <h2 className="text-3xl font-bold">{activeCountry?.name || 'United Kingdom'}</h2>
                <p className="text-gray-600 mt-2">Submit your enquiry for the selected country and our support team will reach out to you shortly.</p>
              </div>
              <ContactForm initialDestination={selectedCountry} submitLabel="Send Enquiry" />
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4 text-secondary-600">
                <Mail size={24} />
                <span className="font-semibold">Support Email</span>
              </div>
              <p className="text-gray-600 mb-6">All country-specific enquiries are directed to our support email.</p>
              <a href={`mailto:${COMPANY_INFO.email}`} className="block text-primary-600 font-semibold hover:underline">{COMPANY_INFO.email}</a>

              <div className="mt-10">
                <div className="flex items-center gap-3 mb-3 text-secondary-600">
                  <Phone size={24} />
                  <span className="font-semibold">UK Phone</span>
                </div>
                <p className="text-gray-600">{COMPANY_INFO.phoneUK}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FreeConsultation;

