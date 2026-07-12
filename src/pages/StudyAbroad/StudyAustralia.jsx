import StudyCountryPage from '../../components/common/StudyCountryPage';

function StudyAustralia() {
  return (
    <StudyCountryPage
      countryName="Australia"
      heroBadge="Innovation and opportunity"
      heroTitle="Study in Australia"
      heroDescription="Australia is known for practical learning, strong industry links, and quality education with a welcoming student environment."
      stats={[
        { label: '43+ Universities', value: '43+', icon: 'Building' },
        { label: 'AUD 20K-45K Tuition', value: 'AUD 20K-45K', icon: 'DollarSign' },
        { label: 'Temporary graduate visa', value: 'Up to 4 years', icon: 'Clock' },
        { label: '95% Visa Success', value: '95%', icon: 'Award' },
      ]}
      overviewTitle="Why Australia stands out"
      overviewText="Australian universities blend academic excellence with practical learning, making them a strong choice for students who want to build career-ready skills."
      requirements={[
        { title: 'Academic requirements', items: ['School or degree transcripts', 'English language score', 'Course-specific prerequisites'] },
        { title: 'Documents you may need', items: ['Offer letter', 'Proof of funds', 'Passport', 'Health and visa documents'] },
      ]}
      universities={[
        { name: 'University of Melbourne', location: 'Melbourne, Victoria', ranking: '#1 Australia', popular: 'Medicine, Law' },
        { name: 'Australian National University', location: 'Canberra', ranking: '#2 Australia', popular: 'Policy, Sciences' },
      ]}
      popularCourses={[
        { name: 'Engineering', duration: '2-4 years', avgSalary: 'AUD 95,000' },
        { name: 'Hospitality & Tourism', duration: '1-2 years', avgSalary: 'AUD 70,000' },
      ]}
      visaInfo={[
        { label: 'Processing Time', value: '4-8 weeks' },
        { label: 'Visa Fees', value: 'AUD 650' },
        { label: 'Interview Required', value: 'Sometimes' },
      ]}
      ctaTitle="Planning to study in Australia?"
      ctaDescription="We help you shortlist universities and prepare your documents for a smoother application journey."
    />
  );
}

export default StudyAustralia;

