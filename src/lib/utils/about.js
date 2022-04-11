import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export const aboutList = [
  {
    title: "Experience",
    text: "4+ Years Working",
    icon: <FaAward className="about__icon" />,
  },
  {
    title: "Clients",
    text: "50+ Clients",
    icon: <FiUsers className="about__icon" />,
  },
  {
    title: "Projects",
    text: "80+ Completed Projects",
    icon: <VscFolderLibrary className="about__icon" />,
  },
];
