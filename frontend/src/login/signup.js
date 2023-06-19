import logoBook from "../assets/icons/icons8-book-65.png";
import logoutama from "../assets/icons/logoutama.png";
import logogg from "../assets/icons/logogg.png";
import logotwt from "../assets/icons/logotwt.png";
import logofb from "../assets/icons/logofb.png";

import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';


function Halaman_SignUp() {
    const navigate = useNavigate()
    const usenavigate = useNavigate()

    const[username,setUsername] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[confPassword,setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    

    const Register = async(e) => {
      e.preventDefault();
      try {
        await axios.post('http://localhost:8000/users',{
          username: username,
          email: email,
          password: password,
          confPassword: confPassword
        });
        navigate("/login");
        toast.success("Register berhasil");
      } catch (error) {
        if (error.response) {
          // console.log(error.response.data.msg);
          toast.error(error.response.data.msg);
        }
      }
    }

    return (
      <div
        className="bg-white-buram h-screen flex items-center justify-center"
        id="kotak-tengah">
        <div className="bg-white-apik my-7 w-3/4 rounded-xl grid grid-cols-2">
          <div className="col-span-1">
            <div className="flex items-center justify-center m-3" onClick={() => navigate('/')}>
              <img src={logoBook} alt="Logo" className="w-10 h-10 mr-2" />
              <span className="font-bold text-xl">Bookstore</span>
            </div>
            <div className="text-center mt-10 font-bold text-4xl">
              Welcome To Bookstore
            </div>
            <div className="flex items-center justify-center mt-10">
              <p class="font-bold text-2xl text-[#002D74] ">Sign Up</p>
            </div>
            <div className="flex items-center justify-center mb-5">
              <p class="text-xs mt-4 text-[#002D74]">
                If you are already a member, easily log in
              </p>
            </div>
            <div>
              <form
                action=""
                onSubmit={Register}
                class="gap-4 grid grid-rows-3 items-center justify-center"
              >
                <div className="row-span-1 hover:scale-105 duration-300">
                  <input
                    class="w-64 p-2 rounded-xl border"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="row-span-1 hover:scale-105 duration-300">
                  <input
                    class="w-64 p-2 rounded-xl border"
                    type="email"
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
                <div className="row-span-1 hover:scale-105 duration-300">
                  <input
                    class="w-64 p-2 rounded-xl border"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                  />
                </div>
                <div class="row-span-1 hover:scale-105 duration-400" 
                // onClick={() => navigate('/login')}
                >
                  <button type='submit' class="w-64 bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                    Sign Up
                  </button>
                </div>
              </form>
              <div class=" items-center text-gray-400 my-7">
                <p class="text-center text-sm ">OR, Sign Up With</p>
              </div>
              <div className="px-10">
                <div className="grid grid-cols-3 items-center justify-center gap-50">
                  <div className="col-span-1 flex justify-end hover:scale-105 duration-300">
                    <img className="w-10" src={logogg} />
                  </div>
                  <div className="col-span-1 flex justify-center hover:scale-105 duration-300">
                    <img className="w-10" src={logofb} />
                  </div>
                  <div className="col-span-1 flex justify-start hover:scale-105 duration-300">
                    <img className="w-10" src={logotwt} />
                  </div>
                </div>
                <div class="text-gray-500 text-center mt-8" onClick={() => navigate('/login')}>
                  <p class=" text-black hover:scale-105 duration-300">
                    <u>Already Have an account ?</u>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <img className="h-full w-full object-cover" src={logoutama} />
          </div>
        </div>
      </div>
    );
  }

export default Halaman_SignUp;
