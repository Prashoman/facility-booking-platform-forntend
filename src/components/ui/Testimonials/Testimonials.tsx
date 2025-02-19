"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    avatar:
      "https://img.freepik.com/free-photo/woman-with-long-hair-yellow-hoodie-with-word-music-it_1340-39068.jpg",
    name: "Simonette Lindermann",
    review:
      "Mind-blowing discovery! Changed my routine. Essential for everyone. Can't imagine life without it!",
  },
  {
    avatar:
      "https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg",
    name: "Merilee Beal",
    review:
      "Unbelievable gem! Altered my life. A must-have now. Wholeheartedly advise it to everyone.",
  },
  {
    avatar:
      "https://img.freepik.com/free-photo/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera_171337-1345.jpg",
    name: "Suzi Lankester",
    review:
      "Phenomenal addition! Completely transformed my days. Strongly endorse it for all!",
  },
  {
    avatar:
      "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
    name: "Gaston Cunnow",
    review: "Amazing product! It changed my life. Can't live without it now.",
  },
  {
    avatar:
      "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    name: "Marys Lobb",
    review:
      "Life-altering find! Indispensable now. Enthusiastically suggest to all.",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1e3a8a] to-[#0f172a] py-16 px-4">
      <div className="w-full max-w-7xl ps-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          What Our Clients Say
        </h2>

        {/* Swiper Slider */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          spaceBetween={20}
          // autoplay={{ delay: 2500, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          modules={[Pagination, Autoplay, EffectCoverflow]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          className="w-full"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="max-w-xs w-full mx-auto">
              <div className="bg-gradient-to-b from-[#2d4b8e] to-[#1e3a8a] shadow-lg rounded-xl overflow-hidden p-6 text-center text-white transition duration-300 hover:shadow-xl">
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-full border-4 border-yellow-400"
                  />
                </div>

                {/* Name & Review */}
                <h3 className="text-lg font-semibold mb-3">{item.name}</h3>
                <p className="text-sm opacity-80">{item.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="swiper-pagination mt-8 text-center"></div>
      </div>
    </div>
  );
}
