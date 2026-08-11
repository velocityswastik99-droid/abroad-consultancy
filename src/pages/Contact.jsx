import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight, ExternalLink } from 'lucide-react';
import ContactForm from '../components/common/ContactForm.jsx';
import { COMPANY_INFO } from '../utils/constants.js';

const CONTACT_CARDS = [
  {
    title: 'Call Us',
    description: 'Talk to a counselor today',
    value: `${COMPANY_INFO.phoneIndia} | UK: ${COMPANY_INFO.phoneUK}`,
    icon: Phone,
  },
  {
    title: 'Email',
    description: 'We reply within 24 hours',
    value: COMPANY_INFO.email,
    icon: Mail,
  },
  {
    title: 'Visit Us',
    description: 'Mon-Fri in office hours',
    value: COMPANY_INFO.address,
    icon: MapPin,
  },
  {
    title: 'Working Hours',
    description: 'We are available to help',
    value: COMPANY_INFO.workingHours,
    icon: Clock,
  },
];

function Contact() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialDestination = searchParams.get('destination') || '';

  return (
    <>
      <Helmet>
        <title>Contact Us | Future path career</title>
        <meta
          name="description"
          content="Contact Future path career for study abroad guidance, visa support, and admissions counseling."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-sm mb-6">
              <MessageSquare size={14} />
              <span>Let’s plan your study abroad roadmap</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-white/80 text-lg">
              Share your goals and we’ll help you build a clear, confident plan to study abroad.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_CARDS.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a2e]/10 flex items-center justify-center mb-4">
                  <card.icon className="text-[#1a1a2e]" size={22} />
                </div>
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{card.description}</p>
                <p className="text-gray-700 font-medium">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Request a Free Consultation</h2>
              <p className="text-gray-600 mb-6">
                Share your preferences and we’ll connect you with the right counselor.
              </p>
              <ContactForm initialDestination={initialDestination} submitLabel="Send Enquiry" />
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Find Us</h3>
              <div className="rounded-xl overflow-hidden border border-gray-200 mb-6">
                <div className="h-64 bg-gradient-to-br from-[#1a1a2e] to-[#141427] p-4 text-white/90">
                  <div className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-black/20 p-5">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-white/60">Office location</p>
                      <p className="mt-2 text-xl font-semibold">Vaishnavi Signature Apartments</p>
                      <p className="mt-1 text-sm text-white/80">Vijayawada, Andhra Pradesh</p>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Lat / Long: 16.5062, 80.6480</span>
                      <a href="https://maps.google.com/?q=16.5062,80.6480" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 hover:bg-white/20">
                        Open Maps <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <MapPin size={16} className="text-[#1a1a2e]" />
                  {COMPANY_INFO.address}
                </p>
                <p className="flex items-center gap-2">
                  <Clock size={16} className="text-[#1a1a2e]" />
                  {COMPANY_INFO.workingHours}
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-[#1a1a2e]" />
                  India: {COMPANY_INFO.phoneIndia}
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} className="text-[#1a1a2e]" />
                  UK: {COMPANY_INFO.phoneUK}
                </p>
              </div>

              <a href="https://maps.google.com/?q=Vaishnavi Signature Apartments, Vijayawada 520007" className="mt-6 inline-flex items-center gap-2 text-[#1a1a2e] font-semibold">
                Get Directions <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

