import StudyCountryPage from '../../components/common/StudyCountryPage';
import { Award, Building, Clock, DollarSign } from 'lucide-react';

function StudyUK() {
  return (
    <StudyCountryPage
      countryName="UK"
      countrySlug="uk"
      featuredUniversities={['Aston University', 'University of East London', 'University of Hertfordshire', 'University of Northumbria', 'Anglia Ruskin University']}
      heroBadge="#1 Choice for Short Degrees"
      heroTitle="Study in United Kingdom"
      heroDescription="The UK offers highly respected universities, shorter degree durations, and strong career opportunities for international students."
      stats={[
        { label: '160+ Universities', value: '160+', icon: 'Building' },
        { label: '£12K-£35K Tuition', value: '£12K-£35K', icon: 'DollarSign' },
        { label: '2-Year Graduate Route', value: '2 Years', icon: 'Clock' },
        { label: '98% Visa Success', value: '98%', icon: 'Award' },
      ]}
      overviewTitle="Why students choose the UK"
      overviewText="The UK is known for its globally recognized degrees, strong research culture, and shorter course lengths that help students save time and money while entering the workforce faster."
      requirements={[
        { title: 'Academic requirements', items: ['12th/graduate transcripts', 'English proficiency test', 'Academic references'] },
        { title: 'Documents you may need', items: ['Statement of Purpose', 'Passport copy', 'Financial proof', 'CAS and visa documents'] },
      ]}
      universities={[
        { name: 'University of Oxford', location: 'Oxford, England', ranking: '#1 UK', popular: 'Humanities, Sciences' },
        { name: 'University of Cambridge', location: 'Cambridge, England', ranking: '#2 UK', popular: 'Science, Engineering' },
      ]}
      popularCourses={[
        { name: 'Business & Management', duration: '1 year', avgSalary: '£45,000' },
        { name: 'Computer Science', duration: '1 year', avgSalary: '£60,000' },
      ]}
      visaInfo={[
        { label: 'Processing Time', value: '3-6 weeks' },
        { label: 'Visa Fees', value: '£490' },
        { label: 'Interview Required', value: 'Usually yes' },
      ]}
      countrySlug="uk"
      featuredUniversities={['Aston University', 'University of East London', 'University of Hertfordshire', 'University of Northumbria', 'Anglia Ruskin University']}
      ctaTitle="Need help with UK admissions?"
      ctaDescription="We guide you from shortlist to visa filing with a tailored plan."
    />
  );
}

export default StudyUK;

