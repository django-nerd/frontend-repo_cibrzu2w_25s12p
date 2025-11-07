import HeaderHero from './components/HeaderHero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-xl">/backend.engineer</a>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#projects" className="hover:text-indigo-700">Projects</a>
            <a href="#experience" className="hover:text-indigo-700">Experience</a>
            <a href="#contact" className="hover:text-indigo-700">Contact</a>
          </div>
        </div>
      </nav>

      <HeaderHero />
      <Projects />
      <Experience />

      <footer className="mt-10 border-t border-gray-100">
        <Contact />
        <div className="max-w-6xl mx-auto px-6 pb-10 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Your Name — Built with care for performance and reliability.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
