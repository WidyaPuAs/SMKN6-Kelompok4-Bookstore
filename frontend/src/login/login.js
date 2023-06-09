import logoBook from "../assets/icons/icons8-book-65.png";
import logoutama from "../assets/icons/logoutama.png";
import logogg from "../assets/icons/logogg.png";
import logotwt from "../assets/icons/logotwt.png";
import logofb from "../assets/icons/logofb.png";

import React from 'react';
import { useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import axios from "axios";
  
function Halaman_Login() {
    const navigate = useNavigate()
    const usenavigate = useNavigate()

    const[email, setEmail] = useState ('');
    const[password,setPassword] = useState ('');

    const Auth = async(e) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:8000/login',{
          email: email,
          password: password
        });
        navigate("/log");
        toast.success("Login berhasil");
      } catch (error) {
        if (error.response) {
          // console.log(error.response.data.msg);
          toast.error(error.response.data.msg);
        }
      }
    }

    return (
      <div
        className="bg-white-buram w-full h-screen flex items-center justify-center"
        id="kotak-tengah">
        <div className="bg-white-apik pb-5 w-3/4 rounded-xl grid grid-cols-2">
          <div className="col-span-1">
            <div className="text-center font-bold text-3xl mt-20">
              <h1>Welcome To </h1>
              <div className="flex items-center justify-center ml-3 mt-2" onClick={() => navigate('/')}>
                <img src={logoBook} alt="Logo" className="w-10 h-10 mr-2" />
                <span className="font-bold text-xl">Bookstore</span>
              </div>
            </div>
            <div className=" w-3/4 -mt-[23px] rounded-2xl mx-auto">
                <div className="flex items-center justify-center mt-10">
                <h2 class="font-bold mt-2 text-2xl text-[#002D74] ">Login</h2>
              </div>
              <div className="flex items-center justify-center mb-5">
                <p class="text-[10px] -mb-3 mt-4 text-[#002D74]">
                  If you are already a member, easily log in
                </p>
              </div>
              <div className="">
                <form
                  action=""
                  onSubmit={Auth}
                  class="gap-4 grid grid-rows-3 items-center justify-center"
                >
                  <div className="row-span-1 hover:scale-105 duration-300">
                    <input
                      class="w-64 p-2 rounded-xl border"
                      name="email"
                      placeholder="Email"
                      value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="row-span-1 hover:scale-105 duration-300">
                    <input
                      class="w-64 p-2 rounded-xl border"
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="row-span-1 hover:scale-105 duration-400">
                    <button class="w-64 bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                      Login
                    </button>
                  </div>
                </form>
                <div class=" items-center text-gray-400 my-7">
                  <p class="text-center text-sm ">OR, Login With</p>
                </div>
                <div className="px-10">
                  <div className="grid grid-cols-3 items-center justify-center gap-50">
                    <div className="col-span-1 flex justify-end hover:scale-105 duration-300">
                      <img className="w-8" src={logogg} />
                    </div>
                    <div className="col-span-1 flex justify-center hover:scale-105 duration-300">
                      <img className="w-8" src={logofb} />
                    </div>
                    <div className="col-span-1 flex justify-start hover:scale-105 duration-300">
                      <img className="w-8" src={logotwt} />
                    </div>
                  </div>
                  <div class="text-gray-500 text-center mt-8" onClick={() => navigate('/signup')}>
                    <p class=" text-black hover:text-gray-400">
                      <u>Don't have an account yet?</u>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="col-span-1 items-center justify-center">
            <img className="h-full w-full object-cover " src={logoutama} />
          </div>
        </div>
      </div>
    );
}

export default Halaman_Login;
