import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import RecordForm from './sections/Features';
import Learn from './sections/Learn';
import LearnOutcomes from './sections/LearnOutcomes';
import Reviews from './sections/Reviews';
import PriceSection from './sections/PriceSection';
import Footer from './sections/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <RecordForm />
      <LearnOutcomes />
      <Learn />
      <Reviews />
      <PriceSection />
      <Footer />
    </div>
  );
}

export default App;
