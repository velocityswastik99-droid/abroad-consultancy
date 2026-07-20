import { Helmet } from 'react-helmet-async';
import { Users, Target, Eye, Award, CheckCircle, MapPin, GraduationCap } from 'lucide-react';

const TEAM_MEMBERS = [
  { name: 'Dr. Sarah Johnson', role: 'Director - USA Admissions', experience: '15+ years' },
  { name: 'Michael Chen', role: 'UK Education Expert', experience: '12+ years' },
  { name: 'Priya Sharma', role: 'Visa & Immigration Head', experience: '10+ years' },
  { name: 'David Wilson', role: 'Scholarship Consultant', experience: '8+ years' },
];

const VALUES = [
  {
    title: 'Student-Focused',
    description: 'Your success is our priority',
    icon: Users,
    color: 'bg-primary-100 text-primary-600',
  },
  {
    title: 'Integrity',
    description: 'Honest and transparent processes',
    icon: CheckCircle,
    color: 'bg-secondary-100 text-secondary-600',
  },
  {
    title: 'Excellence',
    description: 'Commitment to quality service',
    icon: Award,
    color: 'bg-accent-100 text-accent-600',
  },
  {
    title: 'Innovation',
    description: 'Adapting to changing education trends',
    icon: Target,
    color: 'bg-secondary-100 text-secondary-600',
  },
];

const MILESTONES = [
  { year: '2010', title: 'Founded', detail: 'Started with a mission to simplify study abroad admissions.' },
  { year: '2014', title: '500+ Students', detail: 'Expanded counseling services and partnerships.' },
  { year: '2018', title: 'Global Reach', detail: 'Built relationships across 50+ countries.' },
  { year: '2022', title: 'Digital Counseling', detail: 'Launched virtual counseling for faster support.' },
  { year: '2025', title: '98% Visa Success', detail: 'Achieved a consistent high visa approval rate.' },
];

const STATS = [
  { value: '5,000+', label: 'Students Placed', icon: GraduationCap },
  { value: '50+', label: 'Countries', icon: MapPin },
  { value: '98%', label: 'Visa Success Rate', icon: CheckCircle },
  { value: '15+', label: 'Years of Experience', icon: Award },
];

const About = () => {

  return (
    <>
      <Helmet>
        <title>About Us | Future path career - Your Study Abroad Partner</title>
        <meta name="description" content="Learn about Future path career's journey, mission, and dedicated team helping students achieve their study abroad dreams since 2010." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-700 via-primary-600 to-secondary-700 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-sm font-semibold tracking-wide">
              Since 2010
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">About Future path career</h1>
            <p className="text-xl text-white/90">
              For over a decade, we've been transforming dreams into global education realities. 
              Our expert team has guided 5000+ students to successful study abroad journeys.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50">
        <div className="container-custom py-16">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center transition hover:-translate-y-1 hover:shadow-lg">
              <stat.icon className="text-primary-600 mx-auto mb-3" size={28} />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
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
                  <CheckCircle size={16} className="text-secondary-500 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
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
                  <CheckCircle size={16} className="text-secondary-500 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Founded in 2010, Future path career began with a simple vision: to make quality global education
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

        {/* Milestones */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {MILESTONES.map((milestone) => (
              <div key={milestone.year} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-primary-600 mt-1"></div>
                    <div className="w-px flex-1 bg-slate-200 mt-2"></div>
                  </div>
                  <div>
                    <div className="text-primary-600 font-bold text-lg mb-1">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Expert Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-sm p-6 text-center border border-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.split(' ').map((n) => n[0]).join('')}
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
            {VALUES.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm transition hover:shadow-md">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${value.color}`}>
                  <value.icon size={24} />
                </div>
                <h3 className="font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
