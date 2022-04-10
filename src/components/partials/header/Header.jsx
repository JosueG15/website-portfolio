import "./header.css";
import { CTA, Socials } from "components/widgets";
import ME from "assets/me.png";

export const Header = () => (
  <header id="home">
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Josue Palacios</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <Socials />

      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </div>
  </header>
);
