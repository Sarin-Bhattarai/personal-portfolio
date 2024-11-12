import "./app.scss";
import Hero from "./pages/hero/Hero";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/header/Navbar";
import Services from "./pages/services/Services";
import Parallax from "./pages/parallax/Parallax";
import Portfolio from "./pages/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
