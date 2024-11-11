import "./app.scss";
import Hero from "./pages/hero/Hero";
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
      <section className="center" id="Contact">
        Contact
        <h1>Under Construction...👷‍♂️🚧</h1>
      </section>
    </div>
  );
};

export default App;
