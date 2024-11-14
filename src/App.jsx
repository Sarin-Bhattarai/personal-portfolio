import "./app.scss";
import Hero from "./pages/hero/Hero";
import { Toaster } from "react-hot-toast";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/header/Navbar";
import Services from "./pages/services/Services";
import Cursor from "./components/cursor/Cursor";
import Parallax from "./pages/parallax/Parallax";
import Portfolio from "./pages/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <Cursor />
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

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#374151",
          },
        }}
      />
    </div>
  );
};

export default App;
