import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="py-[150px] ">
      <div className="containerb ">
        <div className="cta_bg_img pt-7 pb-20 rounded-[70px] w-full max-w-[1440px] mx-auto">
            <h2 className="lg:font-bold font-semibold lg:text-80px text-5xl lg:leading-88px leading-10 text-white text-center ">We are open from</h2>
            <h3 className="font-semibold lg:text-4xl text-3xl lg:leading-88px leading-[70px] text-white text-center mb-1">Monday-Sunday</h3>
            <ul className="text-white lg:space-y-1.5 w-full max-w-[340px] mx-auto lg:mb-12 mb-6">
                <li className="text-xl leading-10 text-center">Launch : Mon-Sun : 11:00am-02:00pm</li>
                <li className="text-xl leading-10 text-center">Dinner : sunday : 04:00pm-08:00pm</li>
                <li className="text-xl leading-10 text-end mr-3">04:00pm-09:00pm</li>
            </ul>
            <div className="flex items-center justify-center gap-6"> 
                <Link className="lg:py-5 py-3 lg:px-[62px] px-10 bg-#FF8A00 rounded-126px text-white font-semibold lg:text-xl text-lg leading-10">Order now</Link>
                <Link className="lg:py-5 py-3 lg:px-[62px] px-10 bg-white rounded-126px text-#311F09 font-semibold lg:text-xl text-lg leading-10">Reservation</Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
