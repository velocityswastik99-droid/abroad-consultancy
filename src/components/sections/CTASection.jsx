import { Link } from 'react-router-dom';

function CTASection() {
  return (
    <section className="bg-[#1a1a2e] text-white">
      <div className="container-custom px-4 section-padding text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Begin Your Global Journey?</h2>
        <p className="text-lg md:text-xl mb-8 text-white/80">
          Book a free consultation with our experts and get a personalized roadmap for your study abroad journey.
        </p>
        <Link to="/contact" className="inline-flex items-center justify-center bg-secondary-600 hover:bg-secondary-700 text-white font-semibold px-6 py-3 rounded-lg transition">
          Book Free Consultation
        </Link>
      </div>
    </section>
  );
}

export default CTASection;
