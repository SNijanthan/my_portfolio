import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black text-white">
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <About />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
};

export default App;
