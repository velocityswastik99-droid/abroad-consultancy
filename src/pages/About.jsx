import { Helmet } from 'react-helmet-async';
import { Users, Target, Eye, Award, CheckCircle } from 'lucide-react';

const About = () => {
  const teamMembers = [
    { name: 'Dr. Sarah Johnson', role: 'Director - USA Admissions', experience: '15+ years', image: '' },
    { name: 'Michael Chen', role: 'UK Education Expert', experience: '12+ years', image: '' },
    { name: 'Priya Sharma', role: 'Visa & Immigration Head', experience: '10+ years', image: '' },
    { name: 'David Wilson', role: 'Scholarship Consultant', experience: '8+ years', image: '' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | GlobalEduConsult - Your Study Abroad Partner</title>
        <meta name="description" content="Learn about GlobalEduConsult's journey, mission, and dedicated team helping students achieve their study abroad dreams since 2010." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About GlobalEduConsult</h1>
            <p className="text-xl text-gray-200">
              For over a decade, we've been transforming dreams into global education realities. 
              Our expert team has guided 5000+ students to successful study abroad journeys.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                <Target className="text-primary-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-gray-600 mb-4">
              To empower students with access to quality global education by providing comprehensive, 
              personalized guidance and support throughout their study abroad journey.
            </p>
            <ul className="space-y-2">
              {['Quality Education Access', 'Personalized Guidance', 'Transparent Processes', 'Student Success Focus'].map((item) => (
                <li key={item} className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4">
                <Eye className="text-secondary-600" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-gray-600 mb-4">
              To be the most trusted and reliable study abroad consultancy, recognized globally 
              for our excellence in student placement and career development.
            </p>
            <ul className="space-y-2">
              {['Global Recognition', 'Trusted Partnership', 'Excellence in Service', 'Career Development Focus'].map((item) => (
                <li key={item} className="flex items-center">
                  <CheckCircle size={16} className="text-green-500 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Founded in 2010, GlobalEduConsult began with a simple vision: to make quality global education 
                accessible to every deserving student. What started as a small consultancy has grown into a 
                trusted name in the study abroad industry.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been shaped by thousands of success stories - from students securing admissions 
                in Ivy League universities to professionals building international careers. Each student's success 
                has strengthened our commitment to excellence.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have a team of experienced consultants, strong university partnerships 
                across 50+ countries, and a proven track record of 98% visa success rate.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Expert Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                <div className="inline-flex items-center bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                  <Award size={14} className="mr-1" />
                  {member.experience}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="font-bold mb-2">Student-Centric</h3>
              <p className="text-gray-600 text-sm">Your success is our priority</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-600" size={24} />
              </div>
              <h3 className="font-bold mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">Honest and transparent processes</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-600" size={24} />
              </div>
              <h3 className="font-bold mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">Commitment to quality service</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-orange-600" size={24} />
              </div>
              <h3 className="font-bold mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">Adapting to changing education trends</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;