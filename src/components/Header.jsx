export default function Header() {
  return (
      <header>
        <div className="row">
          <div className="top-bar">
            <a className="menu-toggle" href="#"><span>Menu</span></a>
            <div className="logo">
              <a href="#top">Mukesh Kirholiya</a>
            </div>
            <nav id="main-nav-wrap">
              <ul className="main-navigation">
                <li className="current"><a className="smoothscroll" href="#intro">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Resume</a></li>
                <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
                <li><a className="smoothscroll" href="#services">Services</a></li>
                <li><a className="smoothscroll" href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  );
}