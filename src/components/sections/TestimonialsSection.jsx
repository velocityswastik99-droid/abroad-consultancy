import { useRef } from 'react';
import TestimonialCard from '../common/TestimonialCard.jsx';
import { testimonials as defaultTestimonials } from '../../data/testimonials.js';

function TestimonialsSection({ testimonials = defaultTestimonials }) {
  const containerRef = useRef(null);

  const scroll = (direction = 'right') => {
    const el = containerRef.current;
    if (!el) return;
    const distance = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === 'right' ? distance : -distance, behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-4">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear from students who achieved their global education goals.</p>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scroll('left')}
            className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md absolute left-0 top-1/2 transform -translate-y-1/2 z-20"
          >
            ‹
          </button>

          <div ref={containerRef} className="flex gap-6 pb-4 overflow-x-auto scroll-smooth touch-pan-x px-4">
            {testimonials.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]">
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scroll('right')}
            className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md absolute right-0 top-1/2 transform -translate-y-1/2 z-20"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
