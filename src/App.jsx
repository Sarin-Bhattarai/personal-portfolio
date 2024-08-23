import "./app.scss";
import Hero from "./pages/hero/Hero";
import Parallax from "./pages/parallax/Parallax";
import Navbar from "./components/header/Navbar";
import Services from "./pages/services/Services";

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
      <section className="center">
        Portfolio1
        <h1>Under Construction...👷‍♂️🚧</h1>
      </section>
      <section className="center">
        Portfolio2
        <h1>Under Construction...👷‍♂️🚧</h1>
      </section>
      <section className="center">
        Portfolio3
        <h1>Under Construction...👷‍♂️🚧</h1>
      </section>
      <section className="center" id="Contact">
        Contact
        <h1>Under Construction...👷‍♂️🚧</h1>
      </section>
    </div>
  );
};

export default App;
