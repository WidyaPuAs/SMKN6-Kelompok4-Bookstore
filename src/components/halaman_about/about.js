import '../../../src/App.css';
import '../../../src/index.css';
import Bar from "../navbar/navbar";
import Man from "../../assets/man.jpg"
import Woman from "../../assets/woman.jpg"



function Halaman_about() {
  return (
	  <div className="bg-bg_cream"> 
      <Bar />

      <div className="text-black text-3xl py-10 px-10 font-bold text-center">ABOUT DEVELOPMENT</div>
        <section class="flex flex-col lg:flex-row justify-center py-8 px-4 mx-10 ">
        <ul class="flex flex-wrap items-center justify-center  w-full lg:w-2/3 mt-8 lg:mt-0">

        <div class="w-full w-30 h-30 lg:w-1/5 md:1/5 mb-4 lg:mb-0 lg:mr-14">
          <a href="https://www.instagram.com/rjndr.kr/">
            <div class="relative overflow-hidden rounded-xl">
              <img src={Man} alt="Man" class="w-full h-62 object-cover transition duration-300 transform hover:scale-105"/>
              <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-20 transition duration-300 hover:opacity-0"></div>
              <div class="absolute bottom-0 left-0 w-full py-2 px-4 text-gray-800 text-xs font-semibold uppercase tracking-widest"></div>
            </div>

            <p class="text-slate-800 text-base text-center mt-3">Rajendra Agra Farrel M</p>
          </a>
          </div>

          <div class="w-full w-30 h-30 lg:w-1/5 md:1/5 mb-4 lg:mb-0 lg:mr-14">
          <a href="https://www.instagram.com//">
            <div class="relative overflow-hidden rounded-xl">
              <img src={Woman} alt="Man" class="w-full h-62 object-cover transition duration-300 transform hover:scale-105"/>
              <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-20 transition duration-300 hover:opacity-0"></div>
              <div class="absolute bottom-0 left-0 w-full py-2 px-4 text-gray-800 text-xs font-semibold uppercase tracking-widest"></div>
            </div>

            <p class="text-slate-800 text-base text-center mt-3">Widya Puji Astuti</p>
          </a>
          </div>                  
          
          <div class="w-full w-30 h-30 lg:w-1/5 md:1/5 mb-4 lg:mb-0 lg:mr-14">
          <a href="https://www.instagram.com/kylrnahsn/">
            <div class="relative overflow-hidden rounded-xl">
              <img src={Woman} alt="Man" class="w-full h-62 object-cover transition duration-300 transform hover:scale-105"/>
              <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-20 transition duration-300 hover:opacity-0"></div>
              <div class="absolute bottom-0 left-0 w-full py-2 px-4 text-gray-800 text-xs font-semibold tracking-widest">@kylrnahsn</div>
            </div>

            <p class="text-slate-800 text-base text-center mt-3">Kayla Raniahasna A</p>
          </a>
          </div>

        <div class="flex flex-nowrap">
          <div class="w-full w-30 h-30 lg:w-1/4 md:1/5 mb-4 lg:mb-0 lg:mr-14 mt-14">
          <a href="https://www.instagram.com/rajaagra/">
            <div class="relative overflow-hidden rounded-xl">
              <img src={Man} alt="Man" class="w-full h-62 object-cover transition duration-300 transform hover:scale-105"/>
              <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-20 transition duration-300 hover:opacity-0"></div>
              <div class="absolute bottom-0 left-0 w-full py-2 px-4 text-gray-800 text-xs font-semibold tracking-widest"></div>
            </div>

            <p class="text-slate-800 text-base text-center mt-3">Dimas Ulung Septiaji</p>
          </a>
          </div>

          <div class="w-full w-30 h-30 lg:w-1/4 md:1/5 mb-4 lg:mb-0 lg:mr-14 mt-14">
          <a href="https://www.instagram.com/rajaagra/">
            <div class="relative overflow-hidden rounded-xl">
              <img src={Man} alt="Man" class="w-full h-62 object-cover transition duration-300 transform hover:scale-105"/>
              <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-20 transition duration-300 hover:opacity-0"></div>
              <div class="absolute bottom-0 left-0 w-full py-2 px-4 text-gray-800 text-xs font-semibold tracking-widest"></div>
            </div>

            <p class="text-slate-800 text-base text-center mt-3">Ardhiansyah Ichwan P</p>
          </a>
          </div>

          <div class="w-full w-30 h-30 lg:w-1/4 md:1/5 mb-4 lg:mb-0 lg:mr-14 mt-14">
          <a href="https://www.instagram.com/rajaagra/">
            <div class="relative overflow-hidden rounded-xl">
              <img src={Man} alt="Man" class="w-full h-62 object-cover transition duration-300 transform hover:scale-105"/>
              <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-20 transition duration-300 hover:opacity-0"></div>
              <div class="absolute bottom-0 left-0 w-full py-2 px-4 text-gray-800 text-xs font-semibold tracking-widest"></div>
            </div>

            <p class="text-slate-800 text-base text-center mt-3">Ilham Nugroho</p>
          </a>
          </div>

          <div class="w-full w-30 h-30 lg:w-1/4 md:1/5 mb-4 lg:mb-0 lg:mr-14 mt-14">
          <a href="https://www.instagram.com/rajaagra/">
            <div class="relative overflow-hidden rounded-xl">
              <img src={Man} alt="Man" class="w-full h-62 object-cover transition duration-300 transform hover:scale-105"/>
              <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-20 transition duration-300 hover:opacity-0"></div>
              <div class="absolute bottom-0 left-0 w-full py-2 px-4 text-gray-800 text-xs font-semibold tracking-widest"></div>
            </div>

            <p class="text-slate-800 text-base text-center mt-3">Didan Dermawan</p>
          </a>
          </div>
          </div>
        </ul>
      </section>
        </div>
  );
};

export default Halaman_about;