import '../css/home.css';
import Bar from "../nav/navbar";
import Footer from "../nav/footer";

import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import tereliyePergi from "../assets/books/tereliye-pergi.jpg";
import tereliyeBulan from "../assets/books/bulan.jpg";
import tereliyeAnakSpecial from "../assets/books/anak_special.jpg";
import tereliyeKomet from "../assets/books/komet.jpg";
import tereliyeMatahari from "../assets/books/matahari.jpg";
import tereliyeBintang from "../assets/books/bintang.jpg";
import tereliyeBedebah from "../assets/books/negeri_para_bedebah.jpg";
import tereliyeHujan from "../assets/books/hujan.jpg";
import tereliyeBumi from "../assets/books/bumi.jpg";
import Test from "../assets/assets/test.png";

function Halaman_Home_Login() {

  const[username, setUsername] = useState ('');
  const[token, setToken] = useState ('');
  const[expire, setExpire] = useState('');

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:8000/token');
      setToken(response.data.accessToken);
      const decoded =jwt_decode(response.data.accessToken);
      setUsername(decoded.username);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate('/');
      }
    }
  }

  const navigate = useNavigate()
  return (
    <div className="bg-bg-baru">
      <Bar />
      {/* Kotak Top */}
      <div className="mx-auto sm:w-4/5 md:w-4/5 lg:w-4/5 h-4/5 bg-light-cream mt-14 py-4 rounded-md" id="kotak-top">
        <div className="grid grid-cols-10 gap-4 h-3/4">
          <div
            className="col-span-4 border ml-10"
            id="text-terlaris">
            <h1 className="text-4xl mt-10 ml-2 antialiased text-dark-purple bold font-bold">
              Temukan Buku Terbaru
            </h1>
            <div className="mt-3">
              <p className="ml-3">
                Jangan lewatkan buku-buku baru yang telah dirilis!
              </p>
              <p className="ml-3">
                Temukan buku terbaru dari segala macam genre
              </p>
            </div>
            <a>
              <button onClick={() => navigate('/buku-terbaru')} className="bg-brown-cream rounded-lg antialiased font-sans text-white py-2 px-2 ml-3 mt-5 mb-5">
                Buku Terbaru
              </button>
            </a>
          </div>
          <div className="col-span-6">
            {/* <img src={CoverTop} className="" /> */}
          </div>
        </div>
      </div>

      {/* View */}
      <div class="flex justify-between mx-20 mt-14">
        <h2 class="text-2xl font-bold text-gray-800">Popular Now</h2>
        <a onClick={() => navigate('/book-view-1')} class="text-sm hover:text-gray-800 ml-4 hover:bg-gray-100 border border-gray-400 rounded-lg py-1 px-3">View All</a>
      </div>
      
      <div class="flex flex-nowrap overflow-x-auto snap-x snap-start mx-16 gap-7 scroll-smooth py-5">

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center" onClick={() => navigate('/book-pergi')}>
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center" onClick={() => navigate('/book-pergi')}>
        <img src={tereliyeBulan} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Bulan</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyeAnakSpecial} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Si Anak Special</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyeMatahari} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Matahari</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyeBintang} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Bintang</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyeHujan} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Hujan</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyeKomet} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Komet</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyeBedebah} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Negeri Para Bedebah</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyeBumi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Bumi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      </div>

      {/* View 2 */}
      <div class="flex justify-between mx-20 mt-14">
        <h2 class="text-2xl font-bold text-gray-800">Popular Now</h2>
        <a onClick={() => navigate('/book-view-1')} class="text-sm hover:text-gray-800 ml-4 hover:bg-gray-100 border border-gray-400 rounded-lg py-1 px-3">View All</a>
      </div>
      
      <div class="flex flex-nowrap overflow-x-auto snap-x snap-start mx-16 gap-7 scroll-smooth py-5">

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      </div>

      {/* EEEEE */}
      <section class="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-start my-10 py-8 px-4 mx-10 bg-brown-cream rounded-xl z-0">
  <div class="w-full lg:w-1/2 ml-5">
    <h2 class="text-2xl lg:text-3xl text-white font-bold mb-4">Temukan Penulis Terkenal</h2>
    <p class="text-white mb-8">Penulis penulis ini telah meliris banyak karya top seller</p>
    <a href="#" class="bg-cornflower-blue text-dark-purple py-3 px-6 rounded-full text-lg transition duration-300 hover:bg-opacity-80 hover:shadow-md bg-light-cream">Cari Sekarang</a>
  </div>
  <div class="flex flex-wrap items-center justify-center lg:justify-end w-full lg:w-1/2 mt-8 lg:mt-0">
    <div class="w-full lg:w-1/2">
      <ul class="grid grid-cols-2 gap-4">
        <li class="h-48 lg:h-62 relative overflow-hidden">
          <img src={Test} alt="Mondstadt" class="w-full h-full object-cover transition duration-300 transform hover:scale-105"/>
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-75 transition duration-300 hover:opacity-0"></div>
          <div class="absolute bottom-0 left-0 w-full py-2 px-4 text-white text-lg font-semibold uppercase tracking-widest">tereliye</div>
        </li>
        <li class="h-48 lg:h-62 relative overflow-hidden">
          <img src={Test} alt="Liyue" class="w-full h-full object-cover transition duration-300 transform hover:scale-105"/>
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-75 transition duration-300 hover:opacity-0"></div>
          <div class="absolute bottom-0 left-0 w-full py-2 px-4 text-white text-lg font-semibold uppercase tracking-widest">tereliye</div>
        </li>
      </ul>
    </div>
    <div class="w-full lg:w-1/2">
      <ul class="grid grid-cols-2 gap-4">
        <li class="h-48 lg:h-62 relative overflow-hidden my-5">
          <img src={Test} alt="Mondstadt" class="w-full h-full object-cover transition duration-300 transform hover:scale-105"/>
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-75 transition duration-300 hover:opacity-0"></div>
          <div class="absolute bottom-0 left-0 w-full py-2 px-4 text-white text-lg font-semibold uppercase tracking-widest">tereliye</div>
        </li>
        <li class="h-48 lg:h-62 relative overflow-hidden my-5">
          <img src={Test} alt="Liyue" class="w-full h-full object-cover transition duration-300 transform hover:scale-105"/>
          <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-75 transition duration-300 hover:opacity-0"></div>
          <div class="absolute bottom-0 left-0 w-full py-2 px-4 text-white text-lg font-semibold uppercase tracking-widest">tereliye</div>
        </li>
      </ul>
    </div>
  </div>
</section>
    

      {/* View 2 */}
      <div class="flex justify-between mx-20 mt-10">
        <h2 class="text-2xl font-bold text-gray-800">Popular Now</h2>
        <a onClick={() => navigate('/book-view-1')} class="text-sm hover:text-gray-800 ml-4 hover:bg-gray-100 border border-gray-400 rounded-lg py-1 px-3">View All</a>
      </div>
      
      <div class="flex flex-nowrap overflow-x-auto snap-x snap-start mx-16 gap-7 scroll-smooth py-5">

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      </div>

      {/* RRRRRR */}

      {/* <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-1 gap-4 p-8 bg-light-cream shadow-md mx-10 rounded-lg my-10">
        <div>
          <h2 class="text-2xl font-bold mb-4">Mondstadt</h2>
          <ul>
            <li><a href="#">Windswept Wilderness</a></li>
            <li><a href="#">Cider Lake</a></li>
            <li><a href="#">Brightcrown Canyon</a></li>
            <li><a href="#">Stormterror's Lair</a></li>
            <li><a href="#">Dawn Winery</a></li>
          </ul>
          <img src={Test} class="h-62 w-full mt-4"/>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-4">Liyue</h2>
          <ul>
            <li><a href="#">Mt. Aozang</a></li>
            <li><a href="#">Qingce Village</a></li>
            <li><a href="#">Guyun Stone Forest</a></li>
            <li><a href="#">Jueyun Karst</a></li>
            <li><a href="#">Luhua Pool</a></li>
          </ul>
          <img src={Test} class="h-62 w-full mt-4"/>
        </div>
        <div>
          <h2 class="text-2xl font-bold mb-4">Inazuma</h2>
          <ul>
            <li><a href="#">Tatarasuna</a></li>
            <li><a href="#">Kujou Encampment</a></li>
            <li><a href="#">Narukami Island</a></li>
            <li><a href="#">Seirai Island</a></li>
            <li><a href="#">Kannazuka</a></li>
          </ul>
          <img src={Test} class="h-62 w-full mt-4"/>
        </div>
      </section> */}
       <Footer />
      </div>
  );
}

export default Halaman_Home_Login;
