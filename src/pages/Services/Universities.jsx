import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, BookOpen, Users, CheckCircle } from 'lucide-react';

const Universities = () => {
  const universities = [
    { name: 'Harvard University', country: 'USA', ranking: '#1', popularCourses: ['Business', 'Law', 'Medicine'], acceptance: '4%' },
    { name: 'Stanford University', country: 'USA', ranking: '#2', popularCourses: ['Engineering', 'Computer Science'], acceptance: '4%' },
    { name: 'MIT', country: 'USA', ranking: '#3', popularCourses: ['Engineering', 'Technology'], acceptance: '7%' },
    { name: 'University of Oxford', country: 'UK', ranking: '#1 UK', popularCourses: ['Humanities', 'Sciences'], acceptance: '17%' },
    { name: 'University of Cambridge', country: 'UK', ranking: '#2 UK', popularCourses: ['Science', 'Engineering'], acceptance: '21%' },
    { name: 'University of Toronto', country: 'Canada', ranking: '#1 Canada', popularCourses: ['Medicine', 'Engineering'], acceptance: '43%' },
    { name: 'University of Melbourne', country: 'Australia', ranking: '#1 Australia', popularCourses: ['Medicine', 'Law'], acceptance: '70%' },
    { name: 'Technical University of Munich', country: 'Germany', ranking: '#1 Germany', popularCourses: ['Engineering', 'Natural Sciences'], acceptance: '8%' },
  ];

  return (
    <>
      <Helmet>
        <title>University Admissions | Top Global Universities Guidance</title>
        <meta name="description" content="Expert guidance for admissions in top universities worldwide. University selection, application support, and admission strategies." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">University Admissions Guidance</h1>
            <p className="text-xl text-gray-200">
              Get expert assistance for admissions in top universities worldwide. 
              From Ivy League to top European institutions, we've got you covered.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search universities by name, country, or course..." 
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button className="btn-outline flex items-center justify-center">
              <Filter size={20} className="mr-2" />
              Filter
            </button>
          </div>
        </div>

        {/* University List */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {universities.map((uni) => (
            <div key={uni.name} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{uni.name}</h3>
                  <div className="flex items-center text-gray-600">
                    <span className="text-sm">Location: {uni.country}</span>
                    <span className="mx-2">-</span>
                    <div className="flex items-center">
                      <Star size={14} className="text-secondary-500 mr-1" />
                      <span className="text-sm font-semibold">{uni.ranking}</span>
                    </div>
                  </div>
                </div>
                <span className="bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full">
                  {uni.acceptance} acceptance
                </span>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2 flex items-center">
                  <BookOpen size={16} className="mr-2" />
                  Popular Courses:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {uni.popularCourses.map((course) => (
                    <span key={course} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t">
                <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center">
                  View Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <Link
                  to={`/contact?destination=${uni.country === 'UK' ? 'uk' : uni.country.toLowerCase()}`}
                  className="btn-primary text-sm px-4 py-2 inline-flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Our Services for University Admissions */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our University Admission Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="text-primary-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">University Research & Selection</h3>
              <ul className="space-y-2">
                {['Best-fit university identification', 'Course matching analysis', 'Admission requirements review', 'Success probability assessment'].map((item) => (
                  <li key={item} className="flex items-center text-sm text-gray-600">
                    <CheckCircle size={16} className="text-secondary-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-secondary-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Application Documentation</h3>
              <ul className="space-y-2">
                {['SOP/LOR preparation', 'Resume building', 'Transcript evaluation', 'Portfolio development'].map((item) => (
                  <li key={item} className="flex items-center text-sm text-gray-600">
                    <CheckCircle size={16} className="text-secondary-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-accent-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Interview Preparation</h3>
              <ul className="space-y-2">
                {['Mock interview sessions', 'Common questions preparation', 'Communication skills training', 'Confidence building'].map((item) => (
                  <li key={item} className="flex items-center text-sm text-gray-600">
                    <CheckCircle size={16} className="text-secondary-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Universities;
