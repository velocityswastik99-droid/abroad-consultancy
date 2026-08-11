import { Link } from 'react-router-dom';
import {
  Award,
  BookOpen,
  Building,
  CheckCircle,
  Clock,
  DollarSign,
  GraduationCap,
  MapPin,
  Sparkles,
  Users,
} from 'lucide-react';

function StudyCountryPage({
  countryName,
  countrySlug,
  featuredUniversities = [],
  heroBadge,
  heroTitle,
  heroDescription,
  stats,
  overviewTitle,
  overviewText,
  requirements,
  universities,
  popularCourses,
  visaInfo,
  ctaTitle,
  ctaDescription,
}) {
  const destinationSlug = countrySlug || countryName.toLowerCase().replace(/\s+/g, '-');

  return (
    <>
      <div className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award size={16} />
              <span className="text-sm font-medium">{heroBadge}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{heroTitle}</h1>
            <p className="text-xl text-gray-200 mb-8">{heroDescription}</p>

            <div className="flex flex-wrap gap-4 text-sm md:text-base">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center space-x-2">
                    <Icon size={18} />
                    <span>{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { value: stats[0]?.value || '4000+', label: 'Universities' },
            { value: stats[1]?.value || '$25K+', label: 'Annual Tuition' },
            { value: stats[2]?.value || '1-3 Years', label: 'Work Option' },
            { value: stats[3]?.value || '98%', label: 'Visa Success' },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{item.value}</div>
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>

        {featuredUniversities.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Featured Universities in {countryName}</h2>
            <ul className="space-y-3">
              {featuredUniversities.map((uni) => (
                <li key={uni} className="flex items-center justify-between rounded-2xl border border-gray-200 p-4">
                  <span>{uni}</span>
                  <Link
                    to={`/contact?destination=${destinationSlug}`}
                    className="text-secondary-600 font-semibold hover:text-secondary-700"
                  >
                    Contact Us
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <CheckCircle className="text-secondary-500 mr-3" size={24} />
                {overviewTitle}
              </h2>
              <p className="text-gray-600 leading-relaxed">{overviewText}</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <BookOpen className="text-primary-600 mr-3" size={24} />
                Admission Requirements
              </h2>
              <div className="space-y-6">
                {requirements.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-bold mb-3 text-gray-700">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-center">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Top Universities in {countryName}</h2>
              <div className="space-y-4">
                {universities.map((uni) => (
                  <div key={uni.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                    <div>
                      <h3 className="font-bold">{uni.name}</h3>
                      <div className="flex items-center text-gray-600 text-sm mt-1">
                        <MapPin size={14} className="mr-1" />
                        {uni.location}
                        <span className="mx-2">•</span>
                        <span>{uni.popular}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary-600">{uni.ranking}</div>
                      <Link
                        to={`/contact?destination=${destinationSlug}`}
                        className="text-sm text-primary-600 hover:text-primary-700 font-semibold mt-1 inline-flex items-center"
                      >
                        Contact Us →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold mb-4 flex items-center">
                <GraduationCap className="mr-2" size={20} />
                Popular Courses
              </h3>
              <div className="space-y-3">
                {popularCourses.map((course) => (
                  <div key={course.name} className="border-b pb-3 last:border-0">
                    <div className="font-semibold">{course.name}</div>
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {course.duration}
                      </span>
                      <span className="flex items-center">
                          <DollarSign size={14} className="mr-1 text-primary-600" />
                        {course.avgSalary}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold mb-4 flex items-center">
                <Sparkles className="mr-2" size={20} />
                Visa Information
              </h3>
              <div className="space-y-3">
                {visaInfo.map((item) => (
                  <div key={item.label}>
                    <div className="font-semibold text-sm text-gray-600">{item.label}</div>
                    <div className="font-bold">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 text-white text-center">
              <h3 className="font-bold mb-3">{ctaTitle}</h3>
              <p className="text-sm mb-4">{ctaDescription}</p>
              <Link to="/contact" className="w-full inline-flex items-center justify-center bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 rounded-lg transition">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudyCountryPage;
