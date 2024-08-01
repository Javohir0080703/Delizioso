import React from "react";
import { Link } from "react-router-dom";
import home_hero_img from "../assets/img/home_hero_img.png";
const Home_Hero = () => {
  return (
    <section className="pt-[100px] 1180px:pb-[150px] pb-[100px] bg-white">
      <div className="containerb 1180px:flex items-center justify-between block space-y-16">
        <div className="flex justify-center items-center">
          <div>
            <h1 className="w-full max-w-[153px] max-1180px:mx-auto  1180px:text-left text-center  py-2.5 px-9  bg-#FF8A00/[20%] rounded-126px  
             text-#FF8A00 leading-5 text-lg mb-6">
              Restauran
            </h1>
            <h2 className="1180px:text-left text-center text-#311F09 800px:text-80px 600px:text-6xl text-4xl font-bold 600px:leading-88px left-10 1180px:w-full 1180px:max-w-[288px] mb-7">
              Italian Cuisine
            </h2>
            <p className="1180px:text-left text-center w-full max-w-[623px] 800px:text-xl text-base 800px:leading-10 leading-7 text-#5C4529 mb-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
              senectus dictum arcu sit tristique donec eget.
            </p>
            <div className="flex max-600px:flex-col items-center 600px:space-x-6 space-y-6 max-1180px:justify-center">
              <Link
                to="/order_online"
                className="600px:py-4 py-2 600px:px-16 px-8 rounded-126px text-center bg-#FF8A00 text-white text-base  600px:text-xl
                leading-10 font-semibold whitespace-nowrap"
              >
                Order now
              </Link>
              <Link
                to="/reservation"
                className="600px:py-4 py-2 600px:px-16 px-8 rounded-126px text-center bg-#3FA72F text-white text-base  600px:text-xl
                leading-10 font-semibold"
              >
                Reservation
              </Link>
            </div>
          </div>
        </div>
        <img
          className="w-full max-w-[659px] h-full max-h-[600px] mx-auto 1180px:mx-0"
          src={home_hero_img}
          alt="home_hero_img"
        />
      </div>
    </section>
  );
};

export default Home_Hero;
