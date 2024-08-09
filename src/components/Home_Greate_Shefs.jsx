import { Link } from "react-router-dom";
import { customers_data, greatest_shefs } from "../data";
import React from "react";

const Home_Greate_Shefs = () => {
  return (
    <section className="pt-[175px] 600px:pb-[271px] pb-[80px] bg-white">
      <div className="containerb">
        <div className="flex items-center max-lg:flex-wrap gap-8 lg:gap-0 justify-between max-lg:justify-center mb-20">
          {greatest_shefs.map((e) => {
            return (
              <div className="w-full max-w-[344px]" key={e.id}>
                <img className="mb-10 w-full" src={e.img} alt={e.name} />
                <h2 className="text-2xl text-#311F09 leading-10 text-center font-semibold mb-7">
                  {e.name}
                </h2>
                <p className="text-#A08D76 text-center">{e.type}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <Link
            to="/about_us"
            className="text-white py-4 px-[78px] rounded-126px  bg-#FF8A00 font-semibold text-xl leading-10 "
          >
            About us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home_Greate_Shefs;
