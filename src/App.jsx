import { useRef } from "react";
import Profile, { ConnectSection } from "./components/Profile"; // Import ConnectSection
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import BottomNav from "./components/BottomNav";
import useOnScreen from "./hooks/useOnScreen"; 

function App() {
  // 2. Create a ref for each section
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null); // New ref for the contact section

  // 3. Check if each section is on screen
  const activeSections = {
    home: useOnScreen(homeRef),
    projects: useOnScreen(projectsRef),
    about: useOnScreen(aboutRef),
    experience: useOnScreen(experienceRef),
    achievements: useOnScreen(achievementsRef),
    contact: useOnScreen(contactRef), // Track new contact section
  };

  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left Fixed Column */}
        <aside className="lg:w-2/5 lg:h-screen lg:sticky lg:top-0">
          <Profile />
        </aside>

        {/* Right Scrollable Column */}
        <main className="lg:w-3/5 pb-20 lg:pb-0">
          {/* 4. Assign the ref to each section */}
          <section id="home" ref={homeRef}>
            <Header />
          </section>
          <section id="projects" ref={projectsRef}>
            <Projects />
          </section>
          <section id="skills" ref={aboutRef}>
            <Skills />
          </section>
          <section id="experience" ref={experienceRef}>
            <Experience />
          </section>
          <section id="achievements" ref={achievementsRef}>
            <Achievements />
          </section>
        </main>
      </div>
      
      {/* NEW SECTION: Connect section only for small devices */}
      {/* This section will appear AFTER all main content on mobile screens */}
      <section id="contact" ref={contactRef} className="lg:hidden px-8 pb-20"> 
          <ConnectSection />
      </section>
      
      {/* 5. Pass the active state to the BottomNav */}
      <BottomNav activeSections={activeSections} />
    </div>
  );
}

export default App;