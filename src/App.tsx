import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import RecordForm from './sections/Features';
import Learn from './sections/Learn';
import LearnOutcomes from './sections/LearnOutcomes';
import Reviews from './sections/Reviews';
import PriceSection from './sections/PriceSection';
import Footer from './sections/Footer';
import AORM from './components/AORM';

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
      <AORM />
      <Footer />
      {/* Add other sections as they are completed */}
    </div>
  );
}

export default App;
