import Bar from "../nav/navbar";
import Man from "../assets/assets/man.jpg"
import instagram from "../assets/icons/instagram.png"
import whastapp from "../assets/icons/whatsapp.png"
import ardhi from "../assets/picture/ardhi.jpg"
import dimas from "../assets/picture/dimas.jpg"
import ilham from "../assets/picture/ilham.jpg"
import kayy from "../assets/picture/kayy.jpg"
import raja from "../assets/picture/raja.jpg"
import widya from "../assets/picture/widya.jpg"

function Halaman_about() {
  return (
    <div className="bg-bg_cream min-h-screen"> 
      <Bar />
      <div className="flex flex-col py-10 items-center">
        <h1 className="text-3xl font-bold mb-4">Tentang Tim Developer</h1>
        <p className="text-lg text-gray-700 mb-8">
          Kami adalah tim yang berdedikasi untuk memberikan pengalaman pengguna yang terbaik dalam setiap produk yang kami buat. 
        </p>

        <section class="flex flex-col lg:flex-row justify-center px-4 mx-10 ">
          <ul class="flex flex-wrap items-center justify-center w-full mt-8 lg:mt-0">
            <div className="grid grid-cols-3 gap-4 py-2 m-5 ">

              <div className="mx-4">
                <div className="flex flex-col items-center">
                  <img src={raja} alt="Anggota Tim" className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300" />

                  <div className="flex mt-4">
                    <button className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full mr-2"
                      onClick={() => window.location.href = 'https://www.instagram.com/rjndr.kr/'}>
                      <img src={instagram} className="max-w-5 h-5" alt="instagram"/>
                    </button>

                    <button className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full"
                      onClick={() => window.location.href = 'https://wa.me/6281215279935'}>
                      <img src={whastapp} className="max-w-5 h-5" alt="whatsapp"/>
                    </button>
                  </div>

                  <h2 className="text-xl font-semibold mt-2">Rajendra Agra F</h2>
                  <p className="text-gray-700">Full Stack Developer</p>  
                </div>
              </div>

              <div className="mx-4">
                <div className="flex flex-col items-center">
                  <img src={widya} alt="Anggota Tim" className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300" />

                  <div className="flex mt-4">
                    <button className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full mr-2"
                      onClick={() => window.location.href = 'https://www.instagram.com/vio_lance56/'}>
                      <img src={instagram} className="max-w-5 h-5" alt="instagram"/>
                    </button>

                    <button className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full"
                      onClick={() => window.location.href = 'https://wa.me/6287789194255'}>
                      <img src={whastapp} className="max-w-5 h-5" alt="whatsapp"/>
                    </button>
                  </div>

                  <h2 className="text-xl font-semibold mt-2">Widya Pudji A</h2>
                  <p className="text-gray-700">Full Stack Developer</p>  
                </div>
              </div>

              <div className="mx-4">
                <div className="flex flex-col items-center">
                  <img src={kayy} alt="Anggota Tim" className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300" />

                  <div className="flex mt-4">
                    <button className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full mr-2"
                      onClick={() => window.location.href = 'https://www.instagram.com/kylrnahsn/'}>
                      <img src={instagram} className="max-w-5 h-5" alt="instagram"/>
                    </button>

                    <button className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full"
                      onClick={() => window.location.href = 'https://wa.me/6285725602090'}>
                      <img src={whastapp} className="max-w-5 h-5" alt="whatsapp"/>
                    </button>
                  </div>

                  <h2 className="text-xl font-semibold mt-2">Kayla Raniahasna A</h2>
                  <p className="text-gray-700">Front End Developer</p>  
                </div>
              </div>
            </div>
          </ul>
        </section>

        <section class="flex flex-col lg:flex-row justify-center px-4 mx-10 ">
          <ul class="flex flex-wrap items-center justify-center w-full mt-8 lg:mt-0">

            <div className="grid grid-cols-4 gap-4 py-2 m-5 ">
            <div className="mx-4">
                <div className="flex flex-col items-center">
                  <img src={ardhi} alt="Anggota Tim" className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300" />

                  <div className="flex mt-4">
                    <button className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full mr-2"
                      onClick={() => window.location.href = 'https://www.instagram.com/zyyaaja/'}>
                      <img src={instagram} className="max-w-5 h-5" alt="instagram"/>
                    </button>

                    <button className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full"
                      onClick={() => window.location.href = 'https://wa.me/6289630984128'}>
                      <img src={whastapp} className="max-w-5 h-5" alt="whatsapp"/>
                    </button>
                  </div>

                  <h2 className="text-xl font-semibold mt-2">Ardhiansyah Ichwan P</h2>
                  <p className="text-gray-700">Front End Developer</p>  
                </div>
              </div>

              <div className="mx-4">
                <div className="flex flex-col items-center">
                  <img src={dimas} alt="Anggota Tim" className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300" />

                  <div className="flex mt-4">
                    <button className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full mr-2"
                      onClick={() => window.location.href = 'https://www.instagram.com/dmssptiaji*/'}>
                      <img src={instagram} className="max-w-5 h-5" alt="instagram"/>
                    </button>

                    <button className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full"
                      onClick={() => window.location.href = 'https://wa.me/6281772886039'}>
                      <img src={whastapp} className="max-w-5 h-5" alt="whatsapp"/>
                    </button>
                  </div>

                  <h2 className="text-xl font-semibold mt-2">Dimas Ulung S</h2>
                  <p className="text-gray-700">Front End Developer</p>  
                </div>
              </div>

              <div className="mx-4">
                <div className="flex flex-col items-center">
                  <img src={ilham} alt="Anggota Tim" className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300" />

                  <div className="flex mt-4">
                    <button className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full mr-2"
                      onClick={() => window.location.href = 'https://www.instagram.com/17obie_/'}>
                      <img src={instagram} className="max-w-5 h-5" alt="instagram"/>
                    </button>

                    <button className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full"
                      onClick={() => window.location.href = 'https://wa.me/6283149596357'}>
                      <img src={whastapp} className="max-w-5 h-5" alt="whatsapp"/>
                    </button>
                  </div>

                  <h2 className="text-xl font-semibold mt-2">Ilham Nugroho</h2>
                  <p className="text-gray-700">Front End Developer</p>  
                </div>
              </div>

              <div className="mx-4">
                <div className="flex flex-col items-center">
                  <img src={Man} alt="Anggota Tim" className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300" />

                  <div className="flex mt-4">
                    <button className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full mr-2"
                      onClick={() => window.location.href = 'https://www.instagram.com/didandermawann/'}>
                      <img src={instagram} className="max-w-5 h-5" alt="instagram"/>
                    </button>

                    <button className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full"
                      onClick={() => window.location.href = 'https://wa.me/62895346404969'}>
                      <img src={whastapp} className="max-w-5 h-5" alt="whatsapp"/>
                    </button>
                  </div>

                  <h2 className="text-xl font-semibold mt-2">Didan Dermawan</h2>
                  <p className="text-gray-700">Back End Developer</p>  
                </div>
              </div>
            </div>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Halaman_about;
              