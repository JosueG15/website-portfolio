import { aboutList } from "lib/utils";
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
          {aboutList.map(({ title, text, icon }, i) => (
            <article key={i} className="about__card">
              {icon}
              <h5>{title}</h5>
              <small>{text}</small>
            </article>
          ))}
        </div>

        <p>
          Hi there 👋! Welcome to my website. I'm a software developer based in
          El Salvador 🇸🇻 with +4 years of experience on the field. I enjoy
          building things that live on the internet, and I'm always on the
          lookout for new technologies to learn. In my free time I enjoy flying
          drones and read about the latest tech news. If you want to get in
          touch feel free to contact me.
        </p>

        <a href="#contact" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
    </div>
  </section>
);
