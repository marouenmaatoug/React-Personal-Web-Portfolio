import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_c014cdm",
            "template_c3ij5yb",
            form.current,
            "__Mw-GwyLRwCxcal8"
        );
        e.target.reset();
    };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact-container">
                <div className="contact-options">
                    <article className="contact-option">
                        <BsWhatsapp className="contact-option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+216 53 605 761</h5>
                        <a
                            href="https://api.whatsapp.com/send?phone=21653605761"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="contact-option">
                        <MdOutlineEmail className="contact-option-icon" />
                        <h4>Email</h4>
                        <h5>marouen.gimii@gmail.com</h5>
                        <a href="mailto:marouen.gimii@gmail.com">Send a message</a>
                    </article>
                    <article className="contact-option">
                        <RiMessengerLine className="contact-option-icon" />
                        <h4>Messenger</h4>
                        <h5>marouenmaatoug</h5>
                        <a
                            href="https://m.me/profile.php?id=100005059277633"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
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
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary form-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
