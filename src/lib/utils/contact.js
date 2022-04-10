import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

export const contactOptions = [
  {
    title: "Email",
    contact: "garciajosue402@gmail.com",
    icon: <MdOutlineEmail className="contact__option-icon" />,
    link: "mailto:garciajosue402@gmail.com",
  },
  {
    title: "Messenger",
    contact: "Josue Garcia",
    icon: <RiMessengerLine className="contact__option-icon" />,
    link: "https://m.me/josue.palacios.524",
  },
  {
    title: "Messenger",
    contact: "+1 (206)739-2405",
    icon: <BsWhatsapp className="contact__option-icon" />,
    link: "https://api.whatsapp.com/send?phone=+12067392405",
  },
];
