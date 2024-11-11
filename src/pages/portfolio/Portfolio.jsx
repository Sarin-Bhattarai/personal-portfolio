import "./portfolio.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Fast Pizza Co.",
    img: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "https://fast-pizza-sepia.vercel.app/",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, consequatur, commodi dolorum nam, quis aliquam atque quibusdam est non officiis ea ad reiciendis iusto corporis? Voluptate omnis incidunt pariatur saepe?",
  },
  {
    id: 2,
    title: "The Tranquil Haven",
    img: "https://images.pexels.com/photos/9211816/pexels-photo-9211816.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "https://the-tranquil-haven.vercel.app/",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, consequatur, commodi dolorum nam, quis aliquam atque quibusdam est non officiis ea ad reiciendis iusto corporis? Voluptate omnis incidunt pariatur saepe?",
  },
  {
    id: 3,
    title: "Sarangkot Treks",
    img: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "https://www.sarangkottreks.com.np/",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, consequatur, commodi dolorum nam, quis aliquam atque quibusdam est non officiis ea ad reiciendis iusto corporis? Voluptate omnis incidunt pariatur saepe?",
  },
  {
    id: 4,
    title: "Reflection Cleaners",
    img: "https://images.pexels.com/photos/4239145/pexels-photo-4239145.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "https://www.reflectioncleaners.co.nz/",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, consequatur, commodi dolorum nam, quis aliquam atque quibusdam est non officiis ea ad reiciendis iusto corporis? Voluptate omnis incidunt pariatur saepe?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={`img of ${item.title}`} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <button>Visit Site</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {data.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
