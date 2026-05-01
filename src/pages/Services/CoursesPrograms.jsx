import { Helmet } from 'react-helmet-async';
import { BookOpen, Users, Award, Clock, CheckCircle, DollarSign, Briefcase, Target } from 'lucide-react';

const CoursesPrograms = () => {
  const courseCategories = [
    {
      category: 'Engineering & Technology',
      courses: ['B.Tech Computer Science', 'B.Tech Mechanical Engineering', 'B.Tech Civil Engineering', 'Master\'s in Data Science'],
      duration: '4-2 years',
      avgSalary: '$80,000-$130,000',
      features: ['Lab-based learning', 'Industry partnerships', 'Internship opportunities']
    },
    {
      category: 'Business & Management',
      courses: ['MBA Programs', 'BBA', 'Master\'s in Finance', 'Business Analytics'],
      duration: '2-4 years',
      avgSalary: '$70,000-$120,000',
      features: ['Case studies', 'Corporate projects', 'Networking events']
    },
    {
      category: 'Health Sciences',
      courses: ['MBBS', 'Master\'s in Public Health', 'Nursing', 'Pharmacy'],
      duration: '5-2 years',
      avgSalary: '$60,000-$150,000',
      features: ['Clinical experience', 'Research opportunities', 'International rotations']
    },
    {
      category: 'Arts & Humanities',
      courses: ['Mass Communication', 'Psychology', 'Literature', 'History'],
      duration: '3-4 years',
      avgSalary: '$45,000-$80,000',
      features: ['Research projects', 'Internships', 'Creative opportunities']
    }
  ];

  const topPrograms = [
    { name: 'Computer Science (BS)', university: 'Top US Universities', duration: '4 years', acceptance: '15-25%', salary: '$120,000' },
    { name: 'MBA', university: 'INSEAD, Harvard, Stanford', duration: '2 years', acceptance: '8-12%', salary: '$150,000' },
    { name: 'Engineering (BE)', university: 'Multiple Countries', duration: '4 years', acceptance: '20-30%', salary: '$85,000' },
    { name: 'Medicine', university: 'Top Global Universities', duration: '5-6 years', acceptance: '5-10%', salary: '$200,000+' }
  ];

  const specializations = [
    { name: 'AI & Machine Learning', relevantFor: 'CS, Engineering', marketDemand: 'Very High' },
    { name: 'Cloud Computing', relevantFor: 'IT, CS', marketDemand: 'Very High' },
    { name: 'Finance & Banking', relevantFor: 'Business, Economics', marketDemand: 'High' },
    { name: 'Healthcare Management', relevantFor: 'Healthcare, Management', marketDemand: 'Growing' },
    { name: 'Environmental Science', relevantFor: 'Science, Engineering', marketDemand: 'Growing' },
    { name: 'Digital Marketing', relevantFor: 'Business, Communication', marketDemand: 'High' }
  ];

  return (
    <>
      <Helmet>
        <title>Courses & Programs | Study Abroad Programs Guide</title>
        <meta name="description" content="Explore top undergraduate and postgraduate programs worldwide. Find the right course for your career goals with our comprehensive program database and guidance." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Courses & Academic Programs</h1>
            <p className="text-xl text-gray-200">
              Discover the world's best academic programs tailored to your career aspirations. 
              From undergraduate degrees to specialized master's programs.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">10000+</div>
            <div className="text-gray-600">Programs Globally</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">5-6</div>
            <div className="text-gray-600">Year Average Duration</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">$50K-$200K</div>
            <div className="text-gray-600">Average Career Salary</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
            <div className="text-gray-600">Job Placement Rate</div>
          </div>
        </div>

        {/* Course Categories Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Popular Course Categories</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {courseCategories.map((category) => (
              <div key={category.category} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold mb-4 text-primary-600">{category.category}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center text-gray-700">
                    <BookOpen size={18} className="mr-2" />
                    Available Courses:
                  </h4>
                  <ul className="space-y-2">
                    {category.courses.map((course) => (
                      <li key={course} className="flex items-center">
                        <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Duration</div>
                    <div className="font-bold">{category.duration}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Avg Salary</div>
                    <div className="font-bold">{category.avgSalary}</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-gray-700 flex items-center">
                    <CheckCircle size={18} className="mr-2 text-secondary-500" />
                    Key Features:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature) => (
                      <span key={feature} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Content Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Top Programs */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Top Programs Worldwide</h2>
              <div className="space-y-4">
                {topPrograms.map((program) => (
                  <div key={program.name} className="border border-gray-200 rounded-lg p-6 hover:border-primary-500 hover:bg-gray-50 transition">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold">{program.name}</h3>
                        <p className="text-gray-600 text-sm">{program.university}</p>
                      </div>
                      <span className="bg-secondary-100 text-secondary-700 text-sm font-semibold px-3 py-1 rounded-full">
                        {program.acceptance} admission
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                      <div>
                        <div className="text-gray-600 text-xs mb-1">Duration</div>
                        <div className="font-semibold">{program.duration}</div>
                      </div>
                      <div>
                        <div className="text-gray-600 text-xs mb-1">Starting Salary</div>
                        <div className="font-semibold">{program.salary}</div>
                      </div>
                      <button className="text-primary-600 hover:text-primary-700 font-semibold flex items-center justify-end">
                        Learn More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Outcomes */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Briefcase className="text-primary-600 mr-3" size={24} />
                Career Outcomes by Program
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-3 text-gray-700">Engineering Graduates</h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex justify-between"><span>Average Starting Salary</span><span className="font-bold">$85,000</span></p>
                    <p className="flex justify-between"><span>Jobs Available Globally</span><span className="font-bold">500,000+ annually</span></p>
                    <p className="flex justify-between"><span>5-Year Salary Growth</span><span className="font-bold">40-60%</span></p>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <h3 className="font-bold mb-3 text-gray-700">Business/MBA Graduates</h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex justify-between"><span>Average Starting Salary</span><span className="font-bold">$120,000+</span></p>
                    <p className="flex justify-between"><span>Top 10% earn</span><span className="font-bold">$200,000+</span></p>
                    <p className="flex justify-between"><span>10-Year ROI</span><span className="font-bold">300-500%</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Specializations */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold mb-4 flex items-center">
                <Target className="mr-2 text-primary-600" size={20} />
                In-Demand Specializations
              </h3>
              <div className="space-y-4">
                {specializations.map((spec) => (
                  <div key={spec.name} className="pb-4 border-b last:border-0">
                    <div className="font-semibold text-sm">{spec.name}</div>
                    <div className="flex justify-between text-xs text-gray-600 mt-2">
                      <span>{spec.relevantFor}</span>
                      <span className={`font-semibold ${spec.marketDemand === 'Very High' ? 'text-secondary-600' : 'text-primary-600'}`}>
                        {spec.marketDemand} Demand
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Selection Guide */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6">
              <h3 className="font-bold mb-4">How to Choose the Right Program</h3>
              <ul className="space-y-3">
                {[
                  'Assess your interests & strengths',
                  'Research career prospects',
                  'Compare program rankings',
                  'Check admission requirements',
                  'Evaluate cost & scholarships',
                  'Consider location & culture'
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle size={16} className="text-secondary-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <button className="w-full btn-primary py-3 rounded-lg font-semibold text-white">
              Book Free Program Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesPrograms;

