import React from "react";
import Home_Hero from "../components/Home_Hero";
import Home_Delizioso from "../components/Home_Delizioso";
import Home_Reserve_Table from "../components/Home_Reserve_Table";
import Home_Greate_Shefs from "../components/Home_Greate_Shefs";
import Home_Custommers from "../components/Home_Custommers";
import Cta from "../components/Cta";
const Home = () => {
  return (
    <>
      <Home_Hero />
      <Home_Delizioso />
      <Home_Reserve_Table />
      <Home_Greate_Shefs />
      <Home_Custommers />
      <Cta/>
    </>
  );
};

export default Home;
