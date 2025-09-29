import { useRef } from "react";
import Profile from "./components/Profile";
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

  // 3. Check if each section is on screen
  const activeSections = {
    home: useOnScreen(homeRef),
    projects: useOnScreen(projectsRef),
    about: useOnScreen(aboutRef),
    experience: useOnScreen(experienceRef),
    achievements: useOnScreen(achievementsRef),
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
      {/* 5. Pass the active state to the BottomNav */}
      <BottomNav activeSections={activeSections} />
    </div>
  );
}

export default App;