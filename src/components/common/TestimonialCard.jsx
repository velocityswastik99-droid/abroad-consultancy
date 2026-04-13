const getInitials = (name = '') => {
  const parts = name.split(' ').filter(Boolean);
  return parts.slice(0, 2).map((part) => part[0]).join('').toUpperCase();
};

function TestimonialCard({ testimonial }) {
  if (!testimonial) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
        Testimonial
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm h-full flex flex-col">
      <p className="text-gray-600 mb-6">"{testimonial.quote}"</p>
      <div className="mt-auto flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#1a1a2e]/10 text-[#1a1a2e] font-semibold flex items-center justify-center">
          {getInitials(testimonial.name)}
        </div>
        <div>
          <div className="font-semibold text-gray-800">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.university}</div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;

