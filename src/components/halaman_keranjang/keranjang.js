import '../../../src/App.css';
import '../../../src/index.css';
import Bar from '../navbar/navbar';
import image from '../../assets/picbuku.png';


function Halaman_Keranjang() {
  return (
    <div className="bg-bg_cream min-h-screen">
      <Bar/>

      <div className="max-w-4xl mx-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Keranjang Buku</h1>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div class="w-auto h-12 bg-gray-200 flex items-center">
              <p className="text-md ml-20">Nama Produk</p>
              <p className="text-md ml-80">Quantity</p>
              <p className="text-md ml-40">Harga</p>
              </div>

            <div className="grid-cols-4 gap-4">          
            <div className="mt-5 flex">
              <img src={image} style={{ maxWidth: "13%", maxHeight: "13%" }} className="max-w-full h-auto" alt="Book Cover"/>
                <div className="ml-3">
                <p className="font-bold text-lg mt-8">Harry Potter: Half Blood Prince</p>
                <p className="text-base mt-3">ISBN: 987 3 32564 455 B</p>

              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Halaman_Keranjang;
