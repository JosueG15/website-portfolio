import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

export const navbarOptions = [
  {
    link: "#home",
    icon: <AiOutlineHome />,
  },
  {
    link: "#about",
    icon: <AiOutlineUser />,
  },
  {
    link: "#experience",
    icon: <BiBook />,
  },
  {
    link: "#services",
    icon: <RiServiceLine />,
  },
  {
    link: "#contact",
    icon: <BiMessageSquareDetail />,
  },
];
