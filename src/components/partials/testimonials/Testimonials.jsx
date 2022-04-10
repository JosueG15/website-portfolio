import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "../../../lib/utils";
import "./testimonials.css";

export const Testimonials = () => (
  <section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <Swiper
      className="container testimonials__container"
      pagination={{ clickable: true }}
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={2}
    >
      {testimonials.map(({ avatar, name, review }, index) => (
        <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt={name} />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">{review}</small>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);
