import { useState } from "react";

import { navbarOptions } from "lib/utils";
import "./navbar.css";

export const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home");

  const getCommonProperties = (section) => ({
    className: activeNav === section ? "active" : "",
    onClick: () => setActiveNav(section),
    href: section,
  });

  return (
    <nav>
      {navbarOptions.map(({ icon, link }, index) => (
        <a key={index} {...getCommonProperties(link)}>
          {icon}
        </a>
      ))}
    </nav>
  );
};
