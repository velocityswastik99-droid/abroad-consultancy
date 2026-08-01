import { Helmet } from 'react-helmet-async';
import { MapPin, DollarSign, GraduationCap, Clock, CheckCircle, Award, Users, Building } from 'lucide-react';

const StudyUSA = () => {
  const topUniversities = [
    { name: 'Harvard University', location: 'Cambridge, MA', ranking: '#1', popular: 'Business, Law' },
    { name: 'Stanford University', location: 'Stanford, CA', ranking: '#2', popular: 'Engineering, CS' },
    { name: 'MIT', location: 'Cambridge, MA', ranking: '#3', popular: 'Engineering, Tech' },
    { name: 'UC Berkeley', location: 'Berkeley, CA', ranking: '#4', popular: 'Engineering, Business' },
    { name: 'UCLA', location: 'Los Angeles, CA', ranking: '#5', popular: 'Film, Medicine' },
  ];

  const popularCourses = [
    { name: 'Computer Science', duration: '4 years', avgSalary: '$120,000' },
    { name: 'Business Administration', duration: '4 years', avgSalary: '$110,000' },
    { name: 'Mechanical Engineering', duration: '4 years', avgSalary: '$85,000' },
    { name: 'Data Science', duration: '2 years', avgSalary: '$130,000' },
    { name: 'Biotechnology', duration: '4 years', avgSalary: '$75,000' },
  ];

  return (
    <>
      <Helmet>
        <title>Study in USA | Top Universities, Admissions & Visa Guide</title>
        <meta name="description" content="Complete guide to studying in USA: Top universities, admission requirements, tuition fees, visa process, scholarships and post-study work opportunities." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Award size={16} />
              <span className="text-sm font-medium">#1 Study Destination</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Study in United States</h1>
            <p className="text-xl text-gray-200 mb-8">
              Home to world-renowned universities, cutting-edge research, and diverse cultural experiences. 
              Pursue your academic dreams in the land of innovation and opportunity.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Building size={20} />
                <span>4000+ Universities</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={20} />
                <span>1M+ International Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign size={20} />
                <span>Flexible Funding Options</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">4000+</div>
            <div className="text-gray-600">Universities</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">$25K-50K</div>
            <div className="text-gray-600">Annual Tuition</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">1-3 Years</div>
            <div className="text-gray-600">OPT Duration</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-gray-600">Visa Success Rate</div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Requirements */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <CheckCircle className="text-secondary-500 mr-3" size={24} />
                Admission Requirements
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-3 text-gray-700">Academic Requirements</h3>
                  <ul className="space-y-2">
                    {[
                      'Minimum GPA: 3.0/4.0 (varies by university)',
                      'Academic transcripts (12th + bachelor\'s for Masters)',
                      'Standardized test scores (SAT/GRE/GMAT)',
                      'English proficiency (TOEFL 80+ or IELTS 6.5+)'
                    ].map((req, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-3 text-gray-700">Document Checklist</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Statement of Purpose (SOP)',
                      'Letters of Recommendation (2-3)',
                      'Resume/CV',
                      'Portfolio (for design/arts)',
                      'Financial documents',
                      'Passport copy'
                    ].map((doc, index) => (
                      <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                        <CheckCircle size={16} className="text-secondary-500 mr-3" />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Top Universities */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Top Universities in USA</h2>
              <div className="space-y-4">
                {topUniversities.map((uni) => (
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
                      <button className="text-sm text-primary-600 hover:text-primary-700 font-semibold mt-1">
                        View Details →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Popular Courses */}
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

            {/* Visa Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4">Visa Information (F-1)</h3>
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-sm text-gray-600">Processing Time</div>
                  <div className="font-bold">3-5 weeks</div>
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-600">Visa Fees</div>
                  <div className="font-bold">$185</div>
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-600">Interview Required</div>
                  <div className="font-bold">Yes</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 text-white text-center">
              <h3 className="font-bold mb-3">Need Help with USA Admissions?</h3>
              <p className="text-sm mb-4">Our experts have 15+ years experience with US universities</p>
              <a href="/contact" className="block w-full bg-white text-primary-600 hover:bg-gray-100 font-bold py-3 rounded-lg transition">
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyUSA;