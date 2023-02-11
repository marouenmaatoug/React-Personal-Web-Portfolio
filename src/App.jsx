import React from "react";
import Header from "../src/Components/Header/Header";
import Nav from "../src/Components/Nav/Nav";
import About from "../src/Components/About/About";
import Experience from "../src/Components/Experience/Experience";
import Services from "../src/Components/Services/Services";
import Portfolio from "../src/Components/Portfolio/Portfolio";
import Testimonials from "../src/Components/Testimonials/Testimonials";
import Contact from "../src/Components/Contact/Contact";
import Footer from "../src/Components/Footer/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
