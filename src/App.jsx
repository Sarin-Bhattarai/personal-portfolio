import "./app.scss";
import Navbar from "./components/header/Navbar";
import Hero from "./pages/hero/Hero";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section className="center" id="Services">
        Parallax
        <h1>Under Construction...👷‍♂️🚧</h1>
      </section>
      <section className="center">
        Services <h1>Under Construction...👷‍♂️🚧</h1>
      </section>
      <section className="center" id="Portfolio">
        Parallax
        <h1>Under Construction...👷‍♂️🚧</h1>
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
