import Hero from '../components/sections/Hero';
import NewsSection from '../components/home/NewsSection';
import WeatherForecast from '../components/home/WeatherForecast';
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
        <WeatherForecast />
        <NewsSection />
      </main>
    </>
  );
};

export default Home;
