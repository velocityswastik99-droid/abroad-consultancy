import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Clock3, GraduationCap, PenTool, Sparkles } from 'lucide-react';

function TestPreparation() {
  const programs = [
    { title: 'IELTS & TOEFL', desc: 'Build speaking, writing, reading, and listening confidence with structured practice.' },
    { title: 'GRE & GMAT', desc: 'Prepare for quant, verbal, and analytical writing with targeted coaching.' },
    { title: 'SAT & ACT', desc: 'Strengthen test-taking strategy and improve accuracy under timed conditions.' },
  ];

  const benefits = [
    'Personalized study plans tailored to your target score',
    'Weekly mock tests and feedback from experienced mentors',
    'Doubt-solving sessions and score improvement strategies',
  ];

  return (
    <>
      <Helmet>
        <title>Test Preparation | IELTS, TOEFL, GRE & GMAT Coaching</title>
        <meta name="description" content="Professional test preparation coaching for IELTS, TOEFL, GRE, GMAT, SAT, and ACT with mock tests and expert guidance." />
      </Helmet>

      <div className="bg-gradient-to-r from-secondary-600 to-secondary-800 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm mb-6">
              <Sparkles size={16} />
              <span>Score-focused coaching</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Test Preparation</h1>
            <p className="text-xl text-gray-200">
              Improve your exam readiness with live coaching, mock tests, and targeted study plans built around your goals.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Popular preparation tracks</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {programs.map((program) => (
                <div key={program.title} className="rounded-xl border border-gray-100 p-5">
                  <div className="flex items-center gap-2 mb-3 text-primary-700">
                    <PenTool size={18} />
                    <h3 className="font-semibold">{program.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{program.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-slate-50 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-secondary-700">
                <GraduationCap size={18} />
                <h3 className="font-semibold">Why students choose us</h3>
              </div>
              <ul className="space-y-3">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="mt-0.5 text-secondary-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-r from-secondary-600 to-secondary-700 p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Clock3 size={18} />
                <span className="font-semibold">Flexible batches</span>
              </div>
              <p className="text-sm text-white/80 mb-4">Choose weekday or weekend classes and prepare at a pace that fits your schedule.</p>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 font-semibold text-secondary-700 hover:bg-gray-100">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestPreparation;

