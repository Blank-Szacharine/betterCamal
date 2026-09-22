import Hero from '../components/sections/Hero';
import ServicesSection from '../components/home/ServicesSection';
import GovernmentActivitySection from '../components/home/GovernmentActivitySection';
import CommunityPulse from '../components/home/CommunityPulse';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        description="The official website of the Municipality of Camalaniugan, Cagayan. Access local services, updates, tourism, and emergency information."
        keywords="Camalaniugan, Cagayan, local government, public services, tourism, emergency hotlines"
      />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <CommunityPulse />
        <GovernmentActivitySection />
      </main>
    </>
  );
};

export default Home;
