import { BsPatchCheckFill } from "react-icons/bs";

import { experiences } from "lib/utils";
import "./experience.css";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {experiences.map((experience, index) => (
          <div key={index} className={`experience__${experience.className}`}>
            <h3>{experience.areaLabel}</h3>
            <div className="experience__content">
              {experience.technologies.map(([techName, level], i) => (
                <article key={`tech-${i}`} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{techName}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
