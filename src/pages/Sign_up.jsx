import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Sign_up_Img from "../assets/img/Sign_up.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Sign_up = ({ setUsers_data }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmailValue = (email_value) => {
    setEmail(email_value.target.value);
  };
  const handlePasswordValue = (password_value) => {
    setPassword(password_value.target.value);
  };
  const handleNameValue = (name_value) => {
    setName(name_value.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const randomId = uuidv4();

    const newUser = {
      id: randomId,
      name,
      email,
      password,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/signup", newUser);
      setUsers_data((prevData) => [response.data, ...prevData]);
      setEmail("");
      setName("");
      setPassword("");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <section className="bg-white lg:pt-0 pt-5">
      <div className="container_to_registration flex items-center justify-between">
        <div className="flex items-center justify-center w-full">
          <div>
            <h1 className="font-bold text-4xl leading-10 mb-4 text-[#311F09]">
              Sign up
            </h1>
            <p className="text-sm leading-7 mb-12 text-[#311F09]">
              Have an account?
              <Link to="/login" className="text-[#2a4e7a] font-medium ml-1.5">
                Log in
              </Link>
            </p>
            <form onSubmit={handleSubmit} className="space-y-8 mb-10 block">
              <div className="space-y-4">
                <label className="font-medium text-sm leading-5 block">
                  Full name
                </label>
                <input
                  className="block py-5 pl-[30px] sm:w-[450px] w-[250px] bg-[#D0CCC7]/[10%] rounded-[10px] text-[#311F09]"
                  onChange={handleNameValue}
                  value={name}
                  type="text"
                  required
                  placeholder="Robert Martine"
                />
              </div>
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
                Sign up
              </button>
            </form>
          </div>
        </div>
        <img
          className="w-full max-w-[703px] h-full max-h-[100vh] lg:block hidden"
          src={Sign_up_Img}
          alt="Sign_up_Img"
        />
      </div>
    </section>
  );
};

export default Sign_up;
