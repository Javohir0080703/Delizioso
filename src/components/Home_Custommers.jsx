import { customers_data } from "../data";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

// import required modules
import { Autoplay } from "swiper/modules";

const Greate_Shefs = () => {
  const [customers, setCustomers] = useState(1);
  return (
    <section className="pt-[75px] 600px:pb-[200px] pb-[80px] bg-white">
      <div className="container mx-auto">
        <h1 className="font-bold lg:text-80px 600px:text-5xl text-3xl 600px:leading-88px leading-10 lg:mb-14 mb-8 text-center">
          Our customers say
        </h1>
        <div className="mb-10">
          {customers_data.map((e) => {
            if (e.id === customers) {
              return (
                <div>
                  <img
                    className="w-full lg:max-w-[261px] max-w-[200px] mx-auto mb-10 object-cover"
                    src={e.img}
                    alt=""
                  />
                  <h2 className="font-semibold text-3xl leading-10 text-center text-#311F09">
                    {e.name}
                  </h2>
                  <p className="600px:text-xl text-lg 600px:leading-10 leading-7 text-center text-#5C4529 mb-20">
                    {e.work}
                  </p>
                  <p className="600px:text-xl text-lg 600px:leading-10 leading-7 text-center w-full max-w-[524px] mx-auto">
                    {e.text}
                  </p>
                </div>
              );
            }
          })}
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            breakpoints={{
              440: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 4,
              },
              1000: {
                slidesPerView: 6,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {customers_data.map((e, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center h-[240px]"
              >
                <div
                  onClick={() => {
                    setCustomers(e.id);
                  }}
                  className={`rounded-full overflow-hidden shadow-lg ${
                    e.id === customers
                      ? "border-[15px] border-#FF8A00/[10%]"
                      : ""
                  }`}
                >
                  <img
                    src={e.img}
                    alt={e.name}
                    className={`w-[124px] object-cover ${
                      e.id === customers
                        ? "border-[15px] border-#FF8A00/[40%] rounded-full w-[154px]"
                        : ""
                    }`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Greate_Shefs;
