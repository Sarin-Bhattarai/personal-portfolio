import "./services.scss";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const isMobile = window.innerWidth <= 768;

const variants = {
  initial: {
    x: isMobile ? -50 : -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const Services = () => {
  //defining ref
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref} //connecting ref
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I aim to elevate your brand&apos;s reach
          <br /> and drive meaningful progress
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="people" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Innovative</motion.b>{" "}
            Solutions
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Empowering</motion.b>{" "}
            Growth.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Custom Web Development</h2>
          <p>
            Crafting tailored web solutions that align with your brand,
            enhancing user engagement and delivering measurable results. Focused
            on seamless navigation and unique functionalities, we build websites
            that resonate.
          </p>
          <a
            href="https://roudstudio.com/blog/custom-web-development"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Responsive Design</h2>
          <p>
            Ensuring flawless functionality across devices, from desktops to
            smartphones. Our responsive designs adapt effortlessly, providing a
            smooth experience for every user, enhancing reach, and boosting
            usability.
          </p>
          <a
            href="https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Fast & Secure Backend</h2>
          <p>
            Building backends that prioritize speed, reliability, and security.
            Our optimized server-side solutions protect your data and ensure
            performance under heavy loads, supporting business growth
            confidently.
          </p>
          <a
            href="https://teskalabs.com/blog/backend-security-importance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Maintenance & Support</h2>
          <p>
            Providing continuous support to ensure your applications perform
            flawlessly. From updates to troubleshooting, we handle it all so you
            can focus on growth, knowing your systems are secure and reliable.
          </p>
          <a
            href="https://www.edgeoftheweb.co.uk/blog/everything-you-need-to-know-about-website-maintenance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Go</button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
