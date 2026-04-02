import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 bg-[#1a1a2e]/10 rounded-lg flex items-center justify-center text-2xl">
          {service.icon}
        </div>
        <span className="text-xs font-semibold bg-[#1a1a2e]/10 text-[#1a1a2e] px-3 py-1 rounded-full">
          Service
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>
      
      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-3">Key Features:</h4>
        <ul className="space-y-2">
          {service.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex justify-between items-center">
        <Link 
          to={`/services/${service.slug}`}
          className="text-[#1a1a2e] hover:text-[#111122] font-semibold text-sm flex items-center"
        >
          Learn More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link 
          to="/free-consultation"
          className="text-sm font-semibold bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-lg transition"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
