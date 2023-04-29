import "../..//App.css";
import "../../index.css";
import Css from '../halaman_home_guest/home.css'
import Java from '../halaman_home_guest/java.js'
import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import Books from "../../assets/books.png";
import tereliyePergi from "../../assets/tereliye-pergi.jpg";
import CoverTop from "../../assets/cover.png";
import Test from "../../assets/test.png";
import Modal_Login from "./modal_login";
import Bar_Guest from "../navbar/navbar_guest";

function Halaman_Home_Guest() {
  const navigate = useNavigate()
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };
  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <div className="bg-bg-baru">
      <Bar_Guest />
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
              <button className="bg-brown-cream rounded-lg antialiased font-sans text-white py-2 px-2 ml-3 mt-5 mb-5">
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
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center" onClick={() => navigate('/book-pergi')}>
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
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
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      </div>

      {/* EEEEE */}
      <section class="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-start my-10 py-8 px-4 mx-10 bg-brown-cream rounded-xl z-0">
        <div class="w-full lg:w-1/2 ml-5">
          <h2 class="text-2xl lg:text-3xl text-white font-bold mb-4">Temukan Penulis Terkenal</h2>
          <p class="text-white mb-8">Penulis penulis ini telah meliris banyak karya top seller</p>
          <a href="#" class="bg-cornflower-blue text-dark-purple py-3 px-6 rounded-full text-lg transition duration-300 hover:bg-opacity-80 hover:shadow-md bg-light-cream">Cari Sekarang</a>
        </div>
        <ul class="flex flex-wrap items-center justify-center lg:justify-end w-full lg:w-1/2 mt-8 lg:mt-0">
        <li class="w-full lg:w-1/3 md:1/5 h-62 relative overflow-hidden mb-4 lg:mb-0 lg:mr-4">
            <img src={Test} alt="Mondstadt" class="w-full h-62 object-cover transition duration-300 transform hover:scale-105"/>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-75 transition duration-300 hover:opacity-0"></div>
            <div class="absolute bottom-0 left-0 w-full py-2 px-4 text-white text-lg font-semibold uppercase tracking-widest">tereliye</div>
          </li>
          <li class="w-full lg:w-1/3 h-62 relative overflow-hidden mb-4 lg:mb-0 lg:mr-4">
            <img src={Test} alt="Liyue" class="w-full h-62 object-cover transition duration-300 transform hover:scale-105"/>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-75 transition duration-300 hover:opacity-0"></div>
            <div class="absolute bottom-0 left-0 w-full py-2 px-4 text-white text-lg font-semibold uppercase tracking-widest">tereliye</div>
          </li>
          <li class="w-full lg:w-1/3 h-62 relative overflow-hidden mb-4 lg:mb-0 lg:mr-4 my-5">
            <img src={Test} alt="Mondstadt" class="w-full h-62 object-cover transition duration-300 transform hover:scale-105"/>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-75 transition duration-300 hover:opacity-0"></div>
            <div class="absolute bottom-0 left-0 w-full py-2 px-4 text-white text-lg font-semibold uppercase tracking-widest">tereliye</div>
          </li>
          <li class="w-full lg:w-1/3 h-62 relative overflow-hidden mb-4 lg:mb-0 lg:mr-4 my-5">
            <img src={Test} alt="Liyue" class="w-full h-62 object-cover transition duration-300 transform hover:scale-105"/>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-75 transition duration-300 hover:opacity-0"></div>
            <div class="absolute bottom-0 left-0 w-full py-2 px-4 text-white text-lg font-semibold uppercase tracking-widest">tereliye</div>
          </li>
        </ul>
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
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Judul Buku 4</h2>
          <p class="text-sm text-gray-500">Penulis Buku 4</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 250.000</div>
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





      </div>
  );
}

export default Halaman_Home_Guest;
