import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineWallet } from "react-icons/ai";
import { MdOutlineAutoAwesome } from "react-icons/md";
import { useState, useEffect } from "react";

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#header");

    const handleScroll = () => {
        const position = window.scrollY + 100;
        const navElements = document.querySelectorAll("nav a");

        navElements.forEach((element) => {
            const target = document.querySelector(element.hash);
            const targetTop = target.getBoundingClientRect().top + window.scrollY;
            const targetBottom = targetTop + target.offsetHeight;

            if (position >= targetTop && position < targetBottom) {
                setActiveNav(element.hash);
            } else if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight
            ) {
                setActiveNav("#contact");
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // This return statement is used to remove event listener when the component is unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <nav>
            <a
                href="#header"
                onClick={() => setActiveNav("#header")}
                className={activeNav === "#header" ? "active" : ""}
                title="Home"
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={activeNav === "#about" ? "active" : ""}
                title="About"
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                onClick={() => setActiveNav("#experience")}
                className={activeNav === "#experience" ? "active" : ""}
                title="Experience"
            >
                <BiBook />
            </a>
            <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={activeNav === "#services" ? "active" : ""}
                title="Services"
            >
                <RiServiceLine />
            </a>
            <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={activeNav === "#portfolio" ? "active" : ""}
                title="Portfolio"
            >
                <AiOutlineWallet />
            </a>
            <a
                href="#testimonials"
                onClick={() => setActiveNav("#testimonials")}
                className={activeNav === "#testimonials" ? "active" : ""}
                title="Testimonials"
            >
                <MdOutlineAutoAwesome />
            </a>
            <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={activeNav === "#contact" ? "active" : ""}
                title="Contact"
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
};

export default Nav;
