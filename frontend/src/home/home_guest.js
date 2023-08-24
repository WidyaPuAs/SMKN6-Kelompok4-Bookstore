import '../css/home.css';
import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import tereliyePergi from "../assets/books/tereliye-pergi.jpg";
import tereliyeBulan from "../assets/books/bulan.jpg";
import tereliyeAnakSpecial from "../assets/books/anak_special.jpg";
import tereliyeKomet from "../assets/books/komet.jpg";
import tereliyeMatahari from "../assets/books/matahari.jpg";
import tereliyeBintang from "../assets/books/bintang.jpg";
import tereliyeBedebah from "../assets/books/negeri_para_bedebah.jpg";
import tereliyeHujan from "../assets/books/hujan.jpg";
import tereliyeBumi from "../assets/books/bumi.jpg";
import CoverTop from "../assets/assets/cover.png";
import Test from "../assets/assets/test.png";
import Bar_Guest from "../nav/navbar_guest";
import Footer from '../nav/footer';

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
      <div class="mx-auto sm:w-4/5 md:w-4/5 lg:w-4/5 bg-light-cream mt-14 py-4 rounded-md" id="kotak-top">
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-10 gap-4 h-full">
          <div class="sm:col-span-1 md:col-span-3 border ml-10" id="text-terlaris">
            <h1 class="text-3xl sm:text-4xl md:text-5xl mt-6 md:mt-10 ml-2 antialiased text-dark-purple font-bold">
              Temukan Buku Terbaru
            </h1>
            <div class="mt-3">
              <p class="ml-3 text-sm sm:text-base">
                Jangan lewatkan buku-buku baru yang telah dirilis!
              </p>
              <p class="ml-3 text-sm sm:text-base">
                Temukan buku terbaru dari segala macam genre
              </p>
            </div>
            <a href="#" class="mt-5 block">
              <button class="bg-brown-cream rounded-lg antialiased font-sans text-white py-2 px-3 sm:px-4 md:px-5">
                Buku Terbaru
              </button>
            </a>
          </div>
          <div class="hidden sm:block sm:col-span-1 md:col-span-7">
            {/* <img src={CoverTop} class="object-cover h-full w-full" alt="Cover Top" /> */}
          </div>
        </div>
      </div>


      {/* View */}
      <div class="flex justify-between mx-10 sm:mx-20 mt-14">
        <h2 class="text-lg sm:text-2xl font-bold text-gray-800">Popular Now</h2>
        <a onClick={() => navigate('/book-view-1')} class="text-sm hover:text-gray-800 ml-4 hover:bg-gray-100 border border-gray-400 rounded-lg py-1 px-3">View All</a>
      </div>
      
      <div class="flex flex-nowrap overflow-x-auto snap-x snap-start mx-4 md:mx-16 gap-7 scroll-smooth py-5">

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
        <img src={tereliyePergi} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
        <div class="text-center mb-4">
          <h2 class="text-lg font-medium">Pergi</h2>
          <p class="text-sm text-gray-500">Tereliye</p>
        </div>
        <div class="text-lg font-medium text-gray-700">Rp. 99.000</div>
      </div>

      <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center">
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

      {/* View 2 */}
      <div class="flex justify-between mx-10 sm:mx-20 mt-14">
        <h2 class="text-lg sm:text-2xl font-bold text-gray-800">Popular Now</h2>
        <a onClick={() => navigate('/book-view-1')} class="text-sm hover:text-gray-800 ml-4 hover:bg-gray-100 border border-gray-400 rounded-lg py-1 px-3">View All</a>
      </div>
      
      <div class="flex flex-nowrap overflow-x-auto snap-x snap-start mx-4 md:mx-16 gap-7 scroll-smooth py-5">

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
      <div class="flex justify-between mx-10 sm:mx-20 mt-14">
        <h2 class="text-lg sm:text-2xl font-bold text-gray-800">Popular Now</h2>
        <a onClick={() => navigate('/book-view-1')} class="text-sm hover:text-gray-800 ml-4 hover:bg-gray-100 border border-gray-400 rounded-lg py-1 px-3">View All</a>
      </div>
      
      <div class="flex flex-nowrap overflow-x-auto snap-x snap-start mx-4 md:mx-16 gap-7 scroll-smooth py-5">

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

export default Halaman_Home_Guest;
