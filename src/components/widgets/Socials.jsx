import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

export const Socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/josue-garc%C3%ADa-b62269183/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/JosueG15" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://dribbble.com" target="_blank" rel="noreferrer">
        <FiDribbble />
      </a>
    </div>
  );
};
