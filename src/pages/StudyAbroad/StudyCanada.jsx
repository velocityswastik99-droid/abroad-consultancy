import StudyCountryPage from '../../components/common/StudyCountryPage';
import { Award, Building, Clock, DollarSign } from 'lucide-react';

function StudyCanada() {
  return (
    <StudyCountryPage
      countryName="Canada"
      countrySlug="canada"
      featuredUniversities={['University of Toronto', 'McGill University', 'University of British Columbia', 'McMaster University', 'University of Waterloo']}
      heroBadge="High quality, welcoming education"
      countrySlug="canada"
      featuredUniversities={['University of Toronto', 'McGill University', 'University of British Columbia', 'McMaster University', 'University of Waterloo']}
      heroTitle="Study in Canada"
      heroDescription="Canada is a top choice for students seeking affordable education, excellent research opportunities, and a safe multicultural environment."
      stats={[
        { label: '96+ Universities', value: '96+', icon: 'Building' },
        { label: 'CAD 15K-35K Tuition', value: 'CAD 15K-35K', icon: 'DollarSign' },
        { label: 'Post-study work rights', value: 'Up to 3 years', icon: 'Clock' },
        { label: '97% Visa Success', value: '97%', icon: 'Award' },
      ]}
      overviewTitle="Why students prefer Canada"
      overviewText="Canada combines strong academic standards with a high quality of life, making it ideal for students who want both excellent education and practical career options after graduation."
      requirements={[
        { title: 'Academic requirements', items: ['High school or bachelor transcripts', 'English proficiency score', 'Statement of intent'] },
        { title: 'Documents you may need', items: ['Offer letter', 'Financial documents', 'Passport', 'Visa supporting documents'] },
      ]}
      universities={[
        { name: 'University of Toronto', location: 'Toronto, Ontario', ranking: '#1 Canada', popular: 'Medicine, Engineering' },
        { name: 'McGill University', location: 'Montreal, Quebec', ranking: '#2 Canada', popular: 'Law, Business' },
      ]}
      popularCourses={[
        { name: 'Computer Science', duration: '2-4 years', avgSalary: 'CAD 85,000' },
        { name: 'Business Administration', duration: '2 years', avgSalary: 'CAD 75,000' },
      ]}
      visaInfo={[
        { label: 'Processing Time', value: '4-8 weeks' },
        { label: 'Visa Fees', value: 'CAD 150' },
        { label: 'Interview Required', value: 'Sometimes' },
      ]}
      ctaTitle="Need guidance for Canada?"
      ctaDescription="Our team helps you choose the right university and prepare your student visa documents."
    />
  );
}

export default StudyCanada;

