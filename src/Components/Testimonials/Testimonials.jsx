import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
    {
        avatar: AVTR1,
        name: "Tina Snow",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio neque temporibus eaque doloremque a veniam maxime perferendis ipsa voluptatem pariatur voluptates odio qui fuga, saepe debitis tempore nemo non.",
    },
    {
        avatar: AVTR2,
        name: "Shatta Wale",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio neque temporibus eaque doloremque a veniam maxime perferendis ipsa voluptatem pariatur voluptates odio qui fuga, saepe debitis tempore nemo non.",
    },
    {
        avatar: AVTR3,
        name: "Kwame Despite",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio neque temporibus eaque doloremque a veniam maxime perferendis ipsa voluptatem pariatur voluptates odio qui fuga, saepe debitis tempore nemo non.",
    },
    {
        avatar: AVTR4,
        name: "Nana Ama McBrown",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos optio neque temporibus eaque doloremque a veniam maxime perferendis ipsa voluptatem pariatur voluptates odio qui fuga, saepe debitis tempore nemo non.",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>
            <Swiper
                className="container testimonials-container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
            >
                {data.map((testimonials, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonial">
                            <div className="client-avatar">
                                <img src={testimonials.avatar} alt="Avatar 1" />
                            </div>
                            <h5 className="client-name">{testimonials.name}</h5>
                            <small className="client-review">{testimonials.review}</small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;
