import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <>
      <div className="mb-12">
        <div className="bg-slate-700 relative w-full h-[800px]">
          <div className=" absolute z-20 top-28 lg:top-20 right-4 lg:right-32 w-11/12 lg:w-3/4 bg-gray-600 rounded-lg p-4 lg:p-10">
            <div className="text-center mb-10">
              <h1 className="text-white text-2xl font-sans font-bold">
                Testimonials
              </h1>
              <h1 className="text-2xl lg:text-4xl font-sans font-bold text-white">
                What our clients say
              </h1>
            </div>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className=" w-3/2 h-96 pt-6 pb-10">
                  <div>
                    <div className=" w-full mx-auto ms-28 lg:ms-96">
                      <div className="lg:flex gap-6 items-center">
                        <div className="avatar">
                          <motion.div
                            whileHover={{
                              scale: 1.5,
                              textShadow: "0px 0px 8px rgb(255,255,255)",
                              boxShadow: "0px 0px 8px rgb(0,0,153)",
                            }}
                            className="w-12 lg:w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                          >
                            <img
                              src="https://i.ibb.co.com/Z1t4TWR/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg"
                              alt="user1"
                            />
                          </motion.div>
                        </div>
                        <div>
                          <h1 className="text-2xl font-sans font-bold text-white">
                            Shubas Hridoy
                          </h1>
                          <p className="text-white">UI/UX</p>
                        </div>
                      </div>

                      <div className="my-7 lg:ms-12">
                        <FaQuoteLeft className="w-14 h-9"></FaQuoteLeft>
                      </div>
                    </div>
                    <div className="text-center px-3 text-xs lg:text-xl lg:px-10 text-slate-300">
                      <p>
                        I am very happy to get to know that you have taken such
                        initiative that fosters the curiosity for innovative
                        possibilities. Keep doing. All the best
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" w-3/2 h-96 py-12">
                  <div>
                    <div className=" w-full mx-auto ms-28 lg:ms-96">
                      <div className="lg:flex gap-6 items-center">
                        <div className="avatar">
                          <motion.div
                            whileHover={{
                              scale: 1.5,
                              textShadow: "0px 0px 8px rgb(255,255,255)",
                              boxShadow: "0px 0px 8px rgb(0,0,153)",
                            }}
                            className="w-12 lg:w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                          >
                            <img
                              src="https://i.ibb.co.com/XSpRSLP/alex-suprun-1-JGHAAdb-L-Y-unsplash.jpg"
                              alt="user1"
                            />
                          </motion.div>
                        </div>
                        <div>
                          <h1 className="text-2xl font-sans font-bold text-white">
                            Badhon Ck
                          </h1>
                          <p className="text-white">FullStack</p>
                        </div>
                      </div>

                      <div className="my-7 lg:ms-12">
                        <FaQuoteLeft className="w-14 h-9"></FaQuoteLeft>
                      </div>
                    </div>
                    <div className="text-center px-3 text-xs lg:text-xl lg:px-10 text-slate-300">
                      <p>
                        I am very happy to get to know that you have taken such
                        initiative that fosters the curiosity for innovative
                        possibilities. Keep doing. All the best
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className=" w-3/2 h-96 py-12">
                  <div>
                    <div className=" w-full mx-auto ms-28 lg:ms-96">
                      <div className="lg:flex gap-6 items-center">
                        <div className="avatar">
                          <motion.div
                            whileHover={{
                              scale: 1.5,
                              textShadow: "0px 0px 8px rgb(255,255,255)",
                              boxShadow: "0px 0px 8px rgb(0,0,153)",
                            }}
                            className="w-12 lg:w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                          >
                            <img
                              src="https://i.ibb.co.com/tz1zsTW/julian-wan-2-Ed-IX-O2lk-I-unsplash.jpg"
                              alt="user1"
                            />
                          </motion.div>
                        </div>
                        <div>
                          <h1 className="text-2xl font-sans font-bold text-white">
                            Shiti Roy
                          </h1>
                          <p className="text-white">Frontend Designer</p>
                        </div>
                      </div>

                      <div className="my-7 lg:ms-12">
                        <FaQuoteLeft className="w-14 h-9"></FaQuoteLeft>
                      </div>
                    </div>
                    <div className="text-center px-3 text-xs lg:text-xl lg:px-10 text-slate-300">
                      <p>
                        I am very happy to get to know that you have taken such
                        initiative that fosters the curiosity for innovative
                        possibilities. Keep doing. All the best
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
