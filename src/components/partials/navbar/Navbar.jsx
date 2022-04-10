import { useState } from "react";
import { Link } from "react-scroll";

import { navbarOptions } from "lib/utils";
import "./navbar.css";

export const Navbar = () => {
  const [activeNav, setActiveNav] = useState();

  const getCommonProperties = (section) => {
    console.log("Section: ", section);
    return {
      activeClass: activeNav === section ? "active" : "",
      to: section,
      spy: true,
      smooth: true,
      onClick: () => setActiveNav(section),
      offset: -50,
      duration: 100,
    };
  };

  return (
    <nav>
      {navbarOptions.map(({ icon, link }, index) => (
        <Link key={index} {...getCommonProperties(link)}>
          {icon}
        </Link>
      ))}
    </nav>
  );
};
