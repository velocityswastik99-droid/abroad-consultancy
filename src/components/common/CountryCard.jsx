import { Link } from 'react-router-dom';
import { MapPin, GraduationCap, DollarSign } from 'lucide-react';

const CountryCard = ({ country }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="h-48 sm:h-56 bg-gradient-to-br from-[#1a1a2e] to-[#141427] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-2xl font-bold text-white text-center px-4">{country.title}</h3>
        </div>
        <div className="absolute bottom-4 right-4 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-white text-sm font-medium">{country.universities}+ Universities</span>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4">{country.description}</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-700">
            <GraduationCap size={18} className="text-[#1a1a2e] mr-3" />
            <span className="text-sm"><strong>Popular:</strong> {country.popularCourses.slice(0, 3).join(', ')}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <DollarSign size={18} className="text-[#1a1a2e] mr-3" />
            <span className="text-sm"><strong>Tuition:</strong> {country.averageTuition}/year</span>
          </div>
          <div className="flex items-center text-gray-700">
            <MapPin size={18} className="text-[#1a1a2e] mr-3" />
            <span className="text-sm"><strong>Country:</strong> {country.name}</span>
          </div>
        </div>
        
        <Link 
          to={`/study-${country.slug}`}
          className="block w-full bg-secondary-600 hover:bg-secondary-700 text-white font-semibold px-6 py-3 rounded-lg text-center transition"
        >
          Explore {country.name}
        </Link>
      </div>
    </div>
  );
};

export default CountryCard;
