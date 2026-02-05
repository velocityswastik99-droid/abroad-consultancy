import { Link } from 'react-router-dom';
import ServiceCard from '../common/ServiceCard.jsx';
import { services as defaultServices } from '../../data/service.js';

function ServicesSection({ services = defaultServices }) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Comprehensive Study Abroad Support</h2>
            <p className="text-gray-600 max-w-2xl">
              From university shortlisting to visa assistance, we provide end-to-end guidance tailored to your goals.
            </p>
          </div>
          <Link to="/services" className="btn-outline text-center md:w-auto w-full">
            View All Services
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

