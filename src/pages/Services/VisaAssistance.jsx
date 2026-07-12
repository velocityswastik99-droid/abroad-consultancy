import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock3, FileCheck2, GraduationCap, MessageCircle, ShieldCheck } from 'lucide-react';

function VisaAssistance() {
  const steps = [
    'Document review and checklist preparation',
    'Financial proof and sponsorship guidance',
    'Mock interview sessions and visa filing support',
    'Post-submission follow-up and query handling',
  ];

  const highlights = [
    { title: 'End-to-end support', text: 'From document collection to interview prep, we stay with you until your visa is approved.' },
    { title: 'Expert interview coaching', text: 'Get personalized practice so you can answer confidently and avoid preventable mistakes.' },
    { title: 'Application tracking', text: 'We help you track deadlines and ensure every form is accurate before submission.' },
  ];

  return (
    <>
      <Helmet>
        <title>Visa Assistance | Study Abroad Guidance</title>
        <meta name="description" content="Expert visa assistance for students planning to study abroad, including document guidance, interview preparation, and filing support." />
      </Helmet>

      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm mb-6">
              <ShieldCheck size={16} />
              <span>Visa support that reduces stress</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Visa Assistance</h1>
            <p className="text-xl text-gray-200">
              We help students prepare strong visa applications with accurate documents, clear timelines, and confidence-building interview support.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">What we cover</h2>
            <p className="text-gray-600 mb-6">
              Our visa team supports you throughout the process so your application remains complete, credible, and on time.
            </p>
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step} className="flex items-start gap-3 rounded-lg border border-gray-100 p-4">
                  <CheckCircle size={18} className="mt-0.5 text-secondary-500" />
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl bg-slate-50 p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}

            <div className="rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle size={18} />
                <span className="font-semibold">Need a visa plan?</span>
              </div>
              <p className="text-sm text-white/80 mb-4">Let our experts review your profile and prepare a tailored visa strategy.</p>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 font-semibold text-primary-700 hover:bg-gray-100">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisaAssistance;

