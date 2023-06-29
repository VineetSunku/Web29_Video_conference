import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Testimonials.css'
const Testimonial = () => {
  return (
    <div className="testimonials">
      {/* heading */}
      <span>Clients always get</span>
      <span>Exceptional Work</span>
      <span>from me</span>
      <Swiper>
        <SwiperSlide>
            <img src="" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial
