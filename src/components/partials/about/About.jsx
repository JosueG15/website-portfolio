import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import ME from "assets/me-about.jpg";
import "./about.css";

export const About = () => (
  <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About me" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>4+ Years Working</small>
          </article>
          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>200+ Clients Worlwide</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>80+ Completed Projects</small>
          </article>
        </div>

        <p>
          Lorem ipsum dolor sit amet . The graphic and typographic operators
          know this well, in reality all the professions dealing with the
          universe of communication have a stable relationship with these words,
          but what is it? Lorem ipsum is a dummy text without any sense.
        </p>

        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </div>
  </section>
);
