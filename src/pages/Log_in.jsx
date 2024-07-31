import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import img from '../assets/img/Sign_up.png'
const Log_in = ({ setCurrentUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailValue = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordValue = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });

      const user = response.data;
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      alert("Email or password is incorrect");
    }
  };

  return (
    <section className="bg-white">
      <div className="container_to_registration flex items-center justify-between">
        <div className="flex items-center justify-center w-full h-screen">
          <div>
            <h1 className="font-bold text-4xl leading-10 mb-4 text-[#311F09]">
              Login
            </h1>
            <p className="text-sm leading-7 mb-12 text-[#311F09]">
              Don't have an account?
              <Link to="/signup" className="text-[#2a4e7a] font-medium ml-1.5">
                Sign up
              </Link>
            </p>
            <form onSubmit={handleSubmit} className="space-y-8 mb-10 block">
              <div className="space-y-4">
                <label className="font-medium text-sm leading-5 block">
                  Email address
                </label>
                <input
                  className="block py-5 pl-[30px] sm:w-[450px] w-[250px] bg-[#D0CCC7]/[10%] rounded-[10px] text-[#311F09]"
                  onChange={handleEmailValue}
                  value={email}
                  type="email"
                  required
                  placeholder="Robertmartine@gmail.com"
                />
              </div>
              <div className="space-y-4">
                <label className="font-medium text-sm leading-5 block">
                  Password
                </label>
                <input
                  className="py-5 pl-[30px] sm:w-[450px] w-[250px] bg-[#D0CCC7]/[10%] rounded-[10px] text-[#311F09]"
                  onChange={handlePasswordValue}
                  value={password}
                  type="password"
                  required
                  placeholder="*************"
                />
              </div>
              <button className="py-5 block w-full max-w-[450px] text-center bg-[#FF8A00] rounded-[10px] text-white text-sm leading-5 font-medium">
                Log in
              </button>
            </form>
          </div>
        </div>
        <img
          className="w-full max-w-[703px] h-full max-h-[100vh] lg:block hidden"
          src={img}
          alt="Sign_up_Img"
        />
      </div>
    </section>
  );
};

export default Log_in;
