import { BiCheck } from "react-icons/bi";

import { services } from "../../../lib/utils";
import "./services.css";

export const Services = () => (
  <section id="services">
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      {services.map((service, index) => (
        <article key={index} className="service">
          <div className="service__head">
            <h3>{service.serviceLabel}</h3>
          </div>

          <ul className="service__list">
            {service.services.map((item, i) => (
              <li key={`service-${i}`}>
                <div>
                  <BiCheck className="service__list-icon" />
                </div>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);
