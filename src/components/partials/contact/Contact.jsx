import { useRef } from "react";
import emailjs from "emailjs-com";
import { useSnackbar } from "notistack";

import { contactOptions } from "lib/utils/contact";
import "./contact.css";

export const Contact = () => {
  const { enqueueSnackbar } = useSnackbar();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    enqueueSnackbar("Sending email...", { variant: "info" });

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(() => {
        e.target.reset();
        enqueueSnackbar("Message sent successfully!", { variant: "success" });
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contactOptions.map(({ title, contact, icon, link }, index) => (
            <article key={index} className="contact__option">
              {icon}
              <h4>{title}</h4>
              <h5 className="text-light">{contact}</h5>
              <a href={link} target="_blank" rel="noreferrer">
                Send a message
              </a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
