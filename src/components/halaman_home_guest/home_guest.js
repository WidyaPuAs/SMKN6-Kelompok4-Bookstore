import "../..//App.css";
import "../../index.css";
import { Navigate, useNavigate } from 'react-router-dom';
import Bar from "../navbar/navbar";
import Books from "../../assets/books.png";
import tereliyePergi from "../../assets/tereliye-pergi.jpg";

function Halaman_Home_Guest() {
  return (
    <div>
      <Bar />
      <div className="mx-auto sm:w-3/5 md:w-2/3 lg:w-4/5 h-4/5 bg-light-cream mt-14 py-4 rounded-md" id="kotak-top">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-2 flex justify-center items-center h-full border border-black">
            {/* <img className='transform scale-75' src={Books} id='icon-1'/> */}
          </div>
          <div
            className="col-span-4 sm:ml-3 border border-black"
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
          <div className="col-span-6 border border-black">
            <div className="border-b border-black border-opacity-25"></div>
          </div>
        </div>
      </div>

        <div class="flex justify-between mx-20 mt-14">
          <h2 class="text-2xl font-bold text-gray-800">Popular Now</h2>
          <a href="#" class="text-sm hover:text-gray-800 ml-4 hover:bg-gray-100 border border-gray-400 rounded-lg py-1 px-3">View All</a>
        </div>
        
        <div class="flex justify-center mt-5 gap-5 mb-5">
          <div class="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center text-center" id="book-view">
            <img src={tereliyePergi} alt="Gambar Buku" class="w-40 h-56 mb-4"/>
            <div class="mb-4">
              <h2 class="text-lg font-medium">Pergi</h2>
              <p class="text-sm text-gray-500">Tereliye</p>
            </div>
            <div class="text-lg font-medium text-gray-700 mb-4">Rp. 100.000</div>
          </div>
          <div class="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center text-center" id="book-view">
            <img src={tereliyePergi} alt="Gambar Buku" class="w-40 h-56 mb-4"/>
            <div class="mb-4">
              <h2 class="text-lg font-medium">Pergi</h2>
              <p class="text-sm text-gray-500">Tereliye</p>
            </div>
            <div class="text-lg font-medium text-gray-700 mb-4">Rp. 100.000</div>
          </div>
          <div class="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center text-center" id="book-view">
            <img src={tereliyePergi} alt="Gambar Buku" class="w-40 h-56 mb-4"/>
            <div class="mb-4">
              <h2 class="text-lg font-medium">Pergi</h2>
              <p class="text-sm text-gray-500">Tereliye</p>
            </div>
            <div class="text-lg font-medium text-gray-700 mb-4">Rp. 100.000</div>
          </div>
          <div class="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center text-center" id="book-view">
            <img src={tereliyePergi} alt="Gambar Buku" class="w-40 h-56 mb-4"/>
            <div class="mb-4">
              <h2 class="text-lg font-medium">Pergi</h2>
              <p class="text-sm text-gray-500">Tereliye</p>
            </div>
            <div class="text-lg font-medium text-gray-700 mb-4">Rp. 100.000</div>
          </div>
          <div class="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center text-center" id="book-view">
            <img src={tereliyePergi} alt="Gambar Buku" class="w-40 h-56 mb-4"/>
            <div class="mb-4">
              <h2 class="text-lg font-medium">Pergi</h2>
              <p class="text-sm text-gray-500">Tereliye</p>
            </div>
            <div class="text-lg font-medium text-gray-700 mb-4">Harga: Rp. 100.000</div>
          </div>
          <div class="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center text-center" id="book-view">
            <img src={tereliyePergi} alt="Gambar Buku" class="w-40 h-56 mb-4"/>
            <div class="mb-4">
              <h2 class="text-lg font-medium">Pergi</h2>
              <p class="text-sm text-gray-500">Tereliye</p>
            </div>
            <div class="text-lg font-medium text-gray-700 mb-4">Harga: Rp. 100.000</div>
          </div>
        </div>



      </div>
  );
}

export default Halaman_Home_Guest;
