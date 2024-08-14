import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="py-[150px] max-620px:py-[80px]">
      <div className="containerb">
        <div className="cta_bg_img max-670px:bg-black/[70%] p-10 pt-7 pb-20 rounded-[70px] w-full max-w-[1440px] mx-auto max-620px:py-[40px] max-620px:px-4">
          <div className="text-center max-w-[90%] mx-auto max-620px:px-4">
            <h2 className="lg:font-bold 800px:font-semibold font-medium lg:text-80px 800px:text-5xl text-3xl max-620px:text-2xl lg:leading-88px leading-10 text-white">
              We are open from
            </h2>
            <h3 className="font-semibold lg:text-4xl 800px:text-3xl text-xl max-620px:text-lg lg:leading-88px 800px:leading-[70px] leading-10 text-white max-620px:leading-8 max-620px:mb-4">
              Monday-Sunday
            </h3>
            <ul className="text-white lg:space-y-1.5 max-w-[340px] mx-auto lg:mb-12 mb-6 max-620px:mb-4">
              <li className="800px:text-xl 800px:leading-10 leading-8 max-620px:text-base max-620px:leading-6">
                Launch : Mon-Sun : 11:00am-02:00pm
              </li>
              <li className="800px:text-xl 800px:leading-10 leading-8 max-620px:text-base max-620px:leading-6">
                Dinner : Sunday : 04:00pm-08:00pm
              </li>
              <li className="800px:text-xl 800px:leading-10 leading-8 max-620px:text-base max-620px:leading-6">
                04:00pm-09:00pm
              </li>
            </ul>
            <div className="flex max-670px:flex-col items-center justify-center gap-6 max-620px:gap-3">
              <Link className="lg:py-5 800px:py-3 py-2 lg:px-[62px] 800px:px-10 px-8 max-620px:py-2 max-620px:px-6 bg-#FF8A00 rounded-126px text-white font-semibold lg:text-xl 800px:text-lg text-base max-620px:text-sm leading-10 max-620px:leading-7">
                Order now
              </Link>
              <Link className="lg:py-5 800px:py-3 py-2 lg:px-[62px] 800px:px-10 px-8 max-620px:py-2 max-620px:px-6 bg-white rounded-126px text-#311F09 font-semibold lg:text-xl 800px:text-lg text-base max-620px:text-sm leading-10 max-620px:leading-7">
                Reservation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
