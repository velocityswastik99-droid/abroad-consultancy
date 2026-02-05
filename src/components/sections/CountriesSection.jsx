import CountryCard from '../common/CountryCard.jsx';
import { countries as defaultCountries } from '../../data/countries.js';

function CountriesSection({ countries = defaultCountries }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-4">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Destinations</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Popular Study Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore top countries for higher education, career opportunities, and global exposure.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {countries.map((country) => (
            <CountryCard key={country.id} country={country} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CountriesSection;
