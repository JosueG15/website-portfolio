import { footerMenu, footerSocials } from "lib/utils/footer";

import "./footer.css";

export const Footer = () => (
  <footer>
    <a href="#home" className="footer__logo">
      Josue Palacios
    </a>

    <ul className="permalinks">
      {footerMenu.map(({ label, link }, index) => (
        <li key={index}>
          <a href={link}>{label}</a>
        </li>
      ))}
    </ul>

    <div className="footer__socials">
      {footerSocials.map(({ icon, link }, index) => (
        <a key={index} href={link}>
          {icon}
        </a>
      ))}
    </div>

    <div className="footer__copyright">
      <small>&copy; Josue Palacios. All Rights Reserved</small>
    </div>
  </footer>
);
