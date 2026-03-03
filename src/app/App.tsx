import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Resume />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}