import React from "react";
import logo from "../assets/svg/Logo.svg";
import buy_cart from "../assets/svg/buy_cart.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
const Header = ({ currentUser }) => {
  // const user = users_data.map(
  //   (user) => {user.email === email && user.password === password}
  // );
  return (
    <section className="py-[51px]">
      <div className="containerb flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <nav>
          <ul className="flex items-center space-x-11">
            <li>
              <NavLink to="/" className={`text-sm leading-5 text-#311F09 `}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" className={`text-sm leading-5 text-#311F09 `}>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about_us"
                className={`text-sm leading-5 text-#311F09 `}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order_online"
                className={`text-sm leading-5 text-#311F09 `}
              >
                Order online
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reservation"
                className={`text-sm leading-5 text-#311F09 `}
              >
                Reservation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact_us"
                className={`text-sm leading-5 text-#311F09 `}
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex  items-center space-x-6">
          <Link
            className="block p-[13px] rounded-full bg-#D0CCC7 relative"
            to="/menu"
          >
            <p className="absolute top-[-5px] right-[-7px] py-0.5 px-2.5 bg-#FF3838 rounded-full">
              3
            </p>
            <img src={buy_cart} alt="buy_cart" />
          </Link>
          <button className="block py-3.5 px-8  bg-#3FA72F rounded-[133px] text-sm leading-5 text-white">
            {currentUser ? currentUser.name : "Guest"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
