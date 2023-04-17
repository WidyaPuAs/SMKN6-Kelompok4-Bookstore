import '../../../src/App.css';
import '../../../src/index.css';
import Bar from '../navbar/navbar';
import image from '../../assets/picbuku.png';


function Halaman_Keranjang() {
  return (
    <div className="bg-bg_cream min-h-screen">
      <Bar/>

      <div className="max-w-7xl mx-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Keranjang Buku</h1>
          <div className="bg-white shadow-md rounded-lg overflow-hidden px-10 py-4">
            <p className="text-lg font-bold mb-2">Daftar Keranjang</p>

            <ul>
              <li className="flex mb-4 mt-10">
                  <img src={image} style={{ maxWidth: "13%", maxHeight: "13%" }} className="max-w-full h-auto" alt="Book Cover"/>
                  <div className="ml-10">
                  <p className="text-xl font-bold mt-10">Harry Potter: Half Blood Prince</p>
                  <p className="text-base mt-5">ISBN: 987 3 32564 455 B</p>
                  </div>
                <div className="w-2/4 text-right ml-10 mt-10">
                  <p className="text-md font-bold">Rp260.000</p>
                </div>
              </li>

              <li className="flex -mt-5 mb-4">
                  <img src={image} style={{ maxWidth: "13%", maxHeight: "13%" }} className="max-w-full h-auto" alt="Book Cover"/>
                  <div className="ml-10">
                  <p className="text-xl font-bold mt-10">Harry Potter: Half Blood Prince</p>
                  <p className="text-base mt-5">ISBN: 987 3 32564 455 B</p>
                  </div>
                <div className="w-2/4 text-right ml-10 mt-10">
                  <p className="text-md font-bold">Rp260.000</p>
                </div>
              </li>
            </ul>

          </div>
          <div className="px-6 py-4 bg-gray-100">
            <p className="text-lg font-bold mb-2">Total Belanja</p>
            <p className="text-2xl font-bold text-gray-800">Rp125.000</p>
          </div>
          <div className="px-6 py-4 flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Lanjutkan ke Pembayaran
            </button>
        </div>
      </div>
    </div>
  );
};

export default Halaman_Keranjang;