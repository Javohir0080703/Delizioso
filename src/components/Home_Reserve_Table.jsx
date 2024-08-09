import React from "react";
import Home_reserve_table_img from "../assets/img/Home_reserve_table_img.png";
import { Link } from "react-router-dom";
const Home_Reserve_Table = () => {
  return (
    <section className="bg-#FFF4E7/[40%] pt-20">
      <div className="containerb flex max-1180px:flex-col   items-center 1180px:justify-between justify-center ">
        <img
          className="ml-[-158px] 1180px:block hidden"
          src={Home_reserve_table_img}
          alt="Home_Reserve_Table"
        />
        <div>
          <h2 className="800px:text-80px text-6xl font-bold 800px:leading-88px leading-[60px] w-full max-w-[470px] mb-50px max-1180px:text-center">
            Let's reserve <span className="text-#FF8A00">a table</span>
          </h2>
          <p className="w-full max-w-[433px] 800px:text-xl text-lg 800px:leading-10 leading-8  text-#5C4529 800px:mb-[132px] mb-14 max-1180px:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam{" "}
          </p>
          <div className="1180px:block flex justify-center">
            <Link
              to="/reservation"
              className="py-4 px-14 bg-#FF8A00 rounded-126px font-semibold text-xl leading-10 text-white"
            >
              Reservation
            </Link>
          </div>
        </div>
        <div className="1180px:flex justify-center max-1180px:mt-5">
          <img
            className=" 1180px:hidden   w-full max-w-[882px] mx-auto"
            src={Home_reserve_table_img}
            alt="Home_Reserve_Table"
          />
        </div>
      </div>
    </section>
  );
};

export default Home_Reserve_Table;
