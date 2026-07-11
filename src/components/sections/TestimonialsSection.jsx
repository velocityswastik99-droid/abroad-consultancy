import TestimonialCard from '../common/TestimonialCard.jsx';
import { testimonials as defaultTestimonials } from '../../data/testimonials.js';

function TestimonialsSection({ testimonials = defaultTestimonials }) {
  const marqueeItems = [...testimonials, ...testimonials];

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

        <div className="overflow-hidden">
          <div className="flex gap-6 pb-4 overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x">
            {marqueeItems.map((item, index) => {
              const isDuplicate = index >= testimonials.length;
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] snap-start"
                  aria-hidden={isDuplicate}
                >
                  <TestimonialCard testimonial={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
