import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = ({currentUser}) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="">
        <Header currentUser={currentUser}/>
      </div>
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
