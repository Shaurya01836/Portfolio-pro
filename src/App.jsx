import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";

function App() {
  return (
    <div className="">
      <Navbar />
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
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
