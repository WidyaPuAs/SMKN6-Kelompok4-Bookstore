import '../../../src/App.css';
import '../../../src/index.css';
import Bar from "../navbar/navbar";
import Man from "../../assets/man.jpg"
import Woman from "../../assets/woman.jpg"

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
    <img src={Man} alt="Anggota Tim" className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300" />
    <h2 className="text-xl font-semibold mt-4">Rajendra Agra F </h2>
    <p className="text-gray-700">UI Designer</p>
    <div className="flex justify-center space-x-4 mt-2">
      <a href="#" className="text-gray-700 hover:text-blue-500">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="text-gray-700 hover:text-green-500">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  </div>
</div>



              <div className="mx-4">
                <div className="flex flex-col items-center">
                  <img src={Woman} alt="Anggota Tim" className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300" />
                  <h2 className="text-xl font-semibold mt-4">Maria</h2>
                  <p className="text-gray-700">UI Designer</p>
                </div>
              </div>

              <div className="mx-4">
                <div className="flex flex-col items-center">
                  <img src={Man} alt="Anggota Tim" className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300" />
                  <h2 className="text-xl font-semibold mt-4">Steve</h2>
                  <p className="text-gray-700">Full-stack Developer</p>
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
                  <img src={Man} alt="Anggota Tim" className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300" />
                  <h2 className="text-xl font-semibold mt-4">Rajendra Agra F</h2>
                  <p className="text-gray-700">UI Designer</p>
                </div>
              </div>

              <div className="mx-4">
                <div className="flex flex-col items-center">
                  <img src={Woman} alt="Anggota Tim" className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300" />
                  <h2 className="text-xl font-semibold mt-4">Maria</h2>
                  <p className="text-gray-700">UI Designer</p>
                </div>
              </div>

              <div className="mx-4">
                <div className="flex flex-col items-center">
                  <img src={Man} alt="Anggota Tim" className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300" />
                  <h2 className="text-xl font-semibold mt-4">Steve</h2>
                  <p className="text-gray-700">Full-stack Developer</p>
                </div>
              </div>

              <div className="mx-4">
                <div className="flex flex-col items-center">
                  <img src={Man} alt="Anggota Tim" className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300" />
                  <h2 className="text-xl font-semibold mt-4">Steve</h2>
                  <p className="text-gray-700">Full-stack Developer</p>
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
              