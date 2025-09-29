import Profile from "./components/Profile";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";

function App() {
  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left Fixed Column */}
        <aside className="lg:w-2/5 lg:h-screen lg:sticky lg:top-0">
          <Profile />
        </aside>

        {/* Right Scrollable Column */}
        <main className="lg:w-3/5">
          <section id="home">
            <Header />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="about">
            <Skills />
          </section>
          <section id="achievements">
            <Achievements />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;