import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          SARIN BHATTARAI
        </motion.span>
        <div className="social">
          <a
            href="https://www.facebook.com/Sarinb123/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.png" alt="facebook logo" />
          </a>
          <a
            href="https://www.instagram.com/sarin__bhattarai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="instagram logo" />
          </a>
          <a
            href="https://github.com/Sarin-Bhattarai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/git.png" alt="github logo" />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/sarin-bhattarai-a69270229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="linkedin logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
