import { portfolioElements } from "../../../lib/utils/portfolio";

import "./portfolio.css";

export const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      {portfolioElements.map(({ title, image, buttons }, index) => (
        <article key={index} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            {buttons.map(([label, route], i) => (
              <a
                key={`button-${i}`}
                href={route}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                {label}
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);
