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
        <div className="flex flex-col items-center">
          <h1 className="xs:text-3xl md:text-3xl lg:text-4xl xl:text-4xl text-4xl font-bold mb-2">
            About Developer
          </h1>
          <p className=" container px-[14px] xs:text-sm sm:text-sm lg:text-lg xl:text-md text-center font-normal mb-8">
            Kami adalah tim yang berdedikasi untuk memberikan pengalaman
            pengguna yang terbaik dalam setiap produk yang kami buat.
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row md:flex-col sm:flex-col xs:flex-col">
          <section className="xl:py-6 mt-8 mx-auto  w-full flex justify-center lg:flex-col md:flex-row sm:flex-col xs:flex-col px-10">
            <div className="mx-auto xl:mx-auto md:ml-auto md:mr-12 md:mb-12">
              <div className="flex flex-col items-center">
                <img
                  src={raja}
                  alt="Anggota Tim"
                  className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300"
                />

                <div className="flex mt-4">
                  <button
                    className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full mr-2"
                    onClick={() =>
                      (window.location.href =
                        "https://www.instagram.com/rjndr.kr/")
                    }
                  >
                    <img
                      src={instagram}
                      className="max-w-5 h-5"
                      alt="instagram"
                    />
                  </button>

                  <button
                    className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full"
                    onClick={() =>
                      (window.location.href = "https://wa.me/6281215279935")
                    }
                  >
                    <img
                      src={whastapp}
                      className="max-w-5 h-5"
                      alt="whatsapp"
                    />
                  </button>
                </div>

                <h2 className="text-xl text-center font-semibold mt-2">
                  Rajendra Agra F
                </h2>
                <p className="text-gray-700">Full Stack Developer</p>
              </div>
            </div>

            <div className="-mx-10 xl:-mx-10 lg:my-10 md:ml-auto md:mr-12 md:mb-12">
              <div className="flex flex-col items-center">
                <img
                  src={Man}
                  alt="Anggota Tim"
                  className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300"
                />

                <div className="flex mt-4">
                  <button
                    className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full mr-2"
                    onClick={() =>
                      (window.location.href =
                        "https://www.instagram.com/vio_lance56/")
                    }
                  >
                    <img
                      src={instagram}
                      className="max-w-5 h-5"
                      alt="instagram"
                    />
                  </button>

                  <button
                    className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full"
                    onClick={() =>
                      (window.location.href = "https://wa.me/6287789194255")
                    }
                  >
                    <img
                      src={whastapp}
                      className="max-w-5 h-5"
                      alt="whatsapp"
                    />
                  </button>
                </div>

                <h2 className="text-xl text-center font-semibold mt-2">
                  Widya Puji A
                </h2>
                <p className="text-gray-700">Full Stack Developer</p>
              </div>
            </div>

            <div className="mx-auto xl:mx-auto md:ml-auto md:mr-12 md:mb-12">
              <div className="flex flex-col items-center">
                <img
                  src={kayy}
                  alt="Anggota Tim"
                  className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300"
                />

                <div className="flex mt-4">
                  <button
                    className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full mr-2"
                    onClick={() =>
                      (window.location.href =
                        "https://www.instagram.com/kylrnahsn/")
                    }
                  >
                    <img
                      src={instagram}
                      className="max-w-5 h-5"
                      alt="instagram"
                    />
                  </button>

                  <button
                    className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full"
                    onClick={() =>
                      (window.location.href = "https://wa.me/6285725602090")
                    }
                  >
                    <img
                      src={whastapp}
                      className="max-w-5 h-5"
                      alt="whatsapp"
                    />
                  </button>
                </div>

                <h2 className="text-xl text-center font-semibold mt-2">
                  Kayla Raniahasna A
                </h2>
                <p className="text-gray-700">Front End Developer</p>
              </div>
            </div>
          </section>

          <section className="xl:py-6 w-full mt-8 flex justify-center mx-auto lg:flex-col md:flex-row sm:flex-col xs:flex-col px-10">
            <div className="mx-auto xl:mx-auto md:ml-auto md:mr-12 md:mb-12">
              <div className="flex flex-col items-center">
                <img
                  src={ardhi}
                  alt="Anggota Tim"
                  className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300"
                />

                <div className="flex mt-4">
                  <button
                    className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full mr-2"
                    onClick={() =>
                      (window.location.href =
                        "https://www.instagram.com/zyyaaja/")
                    }
                  >
                    <img
                      src={instagram}
                      className="max-w-5 h-5"
                      alt="instagram"
                    />
                  </button>

                  <button
                    className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full"
                    onClick={() =>
                      (window.location.href = "https://wa.me/6289630984128")
                    }
                  >
                    <img
                      src={whastapp}
                      className="max-w-5 h-5"
                      alt="whatsapp"
                    />
                  </button>
                </div>

                <h2 className="text-lg text-center font-semibold mt-2">
                  Ardhiansyah Ichwan P
                </h2>
                <p className="text-gray-700">Front End Developer</p>
              </div>
            </div>

            <div className="mx-auto xl:mx-auto lg:my-10 md:ml-auto md:mr-12 md:mb-12">
              <div className="flex flex-col items-center">
                <img
                  src={dimas}
                  alt="Anggota Tim"
                  className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300"
                />

                <div className="flex mt-4">
                  <button
                    className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full mr-2"
                    onClick={() =>
                      (window.location.href =
                        "https://www.instagram.com/dmssptiaji*/")
                    }
                  >
                    <img
                      src={instagram}
                      className="max-w-5 h-5"
                      alt="instagram"
                    />
                  </button>

                  <button
                    className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full"
                    onClick={() =>
                      (window.location.href = "https://wa.me/6281772886039")
                    }
                  >
                    <img
                      src={whastapp}
                      className="max-w-5 h-5"
                      alt="whatsapp"
                    />
                  </button>
                </div>

                <h2 className="text-xl text-center font-semibold mt-2">
                  Dimas Ulung S
                </h2>
                <p className="text-gray-700">Front End Developer</p>
              </div>
            </div>

            <div className="mx-auto xl:mx-auto lg:mb-10 md:ml-auto md:mr-12 md:mb-12">
              <div className="flex flex-col items-center">
                <img
                  src={ilham}
                  alt="Anggota Tim"
                  className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300"
                />

                <div className="flex mt-4">
                  <button
                    className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full mr-2"
                    onClick={() =>
                      (window.location.href =
                        "https://www.instagram.com/17obie_/")
                    }
                  >
                    <img
                      src={instagram}
                      className="max-w-5 h-5"
                      alt="instagram"
                    />
                  </button>

                  <button
                    className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full"
                    onClick={() =>
                      (window.location.href = "https://wa.me/6283149596357")
                    }
                  >
                    <img
                      src={whastapp}
                      className="max-w-5 h-5"
                      alt="whatsapp"
                    />
                  </button>
                </div>

                <h2 className="text-xl text-center font-semibold mt-2">
                  Ilham Nugroho
                </h2>
                <p className="text-gray-700">Front End Developer</p>
              </div>
            </div>

            <div className="mx-auto xl:mx-auto md:ml-auto md:mr-12 md:mb-12">
              <div className="flex flex-col items-center">
                <img
                  src={Man}
                  alt="Anggota Tim"
                  className="rounded-full w-36 h-36 object-cover hover:scale-105 transition duration-300"
                />

                <div className="flex mt-4">
                  <button
                    className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full mr-2"
                    onClick={() =>
                      (window.location.href =
                        "https://www.instagram.com/didandermawann/")
                    }
                  >
                    <img
                      src={instagram}
                      className="max-w-5 h-5"
                      alt="instagram"
                    />
                  </button>

                  <button
                    className="bg-button hover:scale-105 transition duration-300 text-white py-2 px-2 text-sm rounded-full"
                    onClick={() =>
                      (window.location.href = "https://wa.me/62895346404969")
                    }
                  >
                    <img
                      src={whastapp}
                      className="max-w-5 h-5"
                      alt="whatsapp"
                    />
                  </button>
                </div>

                <h2 className="text-xl text-center font-semibold mt-2">
                  Didan Dermawan
                </h2>
                <p className="text-gray-700">Back End Developer</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Halaman_about;
              