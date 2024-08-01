import React from "react";
import Home_Delizioso_Img from "../assets/img/Home_Delizioso.png";
const Home_Delizioso = () => {
  return (
    <section className="py-[140px] bg-#3FC66E/[10%]">
      <div className="containerb flex max-1180px:flex-col items-center justify-center 1180px:justify-between">
        <img
          className="w-full max-w-[680px] h-full max-h-[650px] hidden 1180px:block"
          src={Home_Delizioso_Img}
          alt="Home_Delizioso"
        />
        <div>
          <h1 className="font-bold 800px:text-80px 600px:text-6xl text-4xl 600px:leading-88px leading-10 w-full max-w-[440px] mb-12 max-1180px:text-center">
            Welcome to <span className="text-#FF8A00">delizioso</span>
          </h1>
          <p className="w-full max-w-[433px] 600px:text-xl text-sm 600px:leading-10 leading-7 text-#5C4529 max-1180px:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam{" "}
          </p>
        </div>
        <img
          className="w-full max-w-[680px] h-full max-h-[650px] block 1180px:hidden"
          src={Home_Delizioso_Img}
          alt="Home_Delizioso"
        />
      </div>
    </section>
  );
};

export default Home_Delizioso;
