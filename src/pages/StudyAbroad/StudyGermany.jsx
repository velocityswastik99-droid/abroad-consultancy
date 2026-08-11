import StudyCountryPage from '../../components/common/StudyCountryPage';
import { Award, Building, Clock, DollarSign } from 'lucide-react';

function StudyGermany() {
  return (
    <StudyCountryPage
      countryName="Germany"
      countrySlug="germany"
      featuredUniversities={['Technical University of Munich', 'Ludwig Maximilian University of Munich', 'Heidelberg University', 'RWTH Aachen University', 'Humboldt University of Berlin']}
      heroBadge="Affordable education with global value"
      countrySlug="germany"
      featuredUniversities={['Technical University of Munich', 'Ludwig Maximilian University of Munich', 'Heidelberg University', 'RWTH Aachen University', 'Humboldt University of Berlin']}
      heroTitle="Study in Germany"
      heroDescription="Germany offers world-class engineering programs, low tuition at public universities, and strong postgraduate opportunities."
      stats={[
        { label: '400+ Universities', value: '400+', icon: 'Building' },
        { label: '€0-€20K Tuition', value: '€0-€20K', icon: 'DollarSign' },
        { label: '18-Month Job Seeker Visa', value: '18 months', icon: 'Clock' },
        { label: '95% Visa Success', value: '95%', icon: 'Award' },
      ]}
      overviewTitle="Why Germany is a smart choice"
      overviewText="Public universities in Germany are highly respected, and many programs are tuition-free or low-cost, making quality higher education more accessible."
      requirements={[
        { title: 'Academic requirements', items: ['School or degree transcripts', 'Proof of German or English proficiency', 'Course-specific prerequisites'] },
        { title: 'Documents you may need', items: ['Admission letter', 'Financial documents', 'Passport', 'Health and visa documents'] },
      ]}
      universities={[
        { name: 'Technical University of Munich', location: 'Munich, Bavaria', ranking: '#1 Germany', popular: 'Engineering, Natural Sciences' },
        { name: 'Ludwig Maximilian University', location: 'Munich, Bavaria', ranking: '#2 Germany', popular: 'Business, Humanities' },
      ]}
      popularCourses={[
        { name: 'Engineering', duration: '3-4 years', avgSalary: '€65,000' },
        { name: 'Computer Science', duration: '3 years', avgSalary: '€72,000' },
      ]}
      visaInfo={[
        { label: 'Processing Time', value: '6-10 weeks' },
        { label: 'Visa Fees', value: '€75' },
        { label: 'Interview Required', value: 'Usually yes' },
      ]}
      ctaTitle="Interested in Germany?"
      ctaDescription="We can help you compare universities, prepare required documents, and plan your student journey."
    />
  );
}

export default StudyGermany;

