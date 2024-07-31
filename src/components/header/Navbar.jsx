import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>Sarin Bhattarai</span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="facebook logo" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="instagram logo" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="youtube logo" />
          </a>{" "}
          <a href="#">
            <img src="/dribbble.png" alt="dribbble logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
