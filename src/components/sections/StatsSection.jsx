const stats = [
  { label: 'Students Placed', value: '5,000+' },
  { label: 'Countries', value: '50+' },
  { label: 'Visa Success Rate', value: '98%' },
  { label: 'Scholarships Secured', value: 'INR 10 Cr+' },
];

function StatsSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="p-4 rounded-xl bg-gray-50">
            <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;

