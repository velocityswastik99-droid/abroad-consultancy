import TestimonialCard from '../common/TestimonialCard.jsx';
import { testimonials as defaultTestimonials } from '../../data/testimonials.js';

function TestimonialsSection({ testimonials = defaultTestimonials }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-4">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from students who achieved their global education goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
