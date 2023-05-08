import '../../../src/App.css';
import '../../../src/index.css';
import Bar from "../navbar/navbar";

function Halaman_help() {
  return (
    <div className="bg-bg_cream min-h-screen"> 
      <Bar />

      <div className="flex flex-col py-10 items-center">
        <div className="max-w-6xl mx-auto px-4 py-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Bagaimana kami dapat membantu Anda?</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition duration-300">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Akun &amp; Masuk</h2>
                     <ul className="list-disc pl-6">
                        <li className="text-gray-700 hover:text-gray-500 cursor-pointer mb-3">Bagaimana cara membuat akun?</li>
                        <li className="text-gray-700 hover:text-gray-500 cursor-pointer mb-3">Saya lupa kata sandi saya. Bagaimana cara mengatur ulang kata sandi?</li>
                        <li className="text-gray-700 hover:text-gray-500 cursor-pointer mb-3">Bagaimana cara mengubah alamat email saya?</li>
                        <li className="text-gray-700 hover:text-gray-500 cursor-pointer mb-3">Bagaimana cara menghapus akun saya?</li>
                    </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition duration-300">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Pesanan &amp; Pengiriman</h2>
                    <ul className="list-disc pl-6">
                        <li className="text-gray-700 hover:text-gray-500 cursor-pointer mb-3">Bagaimana cara melacak pesanan saya?</li>
                        <li className="text-gray-700 hover:text-gray-500 cursor-pointer mb-3">Dapatkah saya mengubah alamat pengiriman saya?</li>
                        <li className="text-gray-700 hover:text-gray-500 cursor-pointer mb-3">Apa saja opsi pengiriman yang Anda tawarkan?</li>
                        <li className="text-gray-700 hover:text-gray-500 cursor-pointer mb-3">Bagaimana cara membatalkan pesanan saya?</li>
                    </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition duration-300">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Produk &amp; Layanan</h2>
                    <ul className="list-disc pl-6">
                        <li className="text-gray-700 hover:text-gray-500 cursor-pointer mb-2">Metode pembayaran apa yang Anda terima?</li>
                        <li className="text-gray-700 hover:text-gray-500 cursor-pointer mb-2">Bagaimana cara memberikan ulasan produk?</li>
                        <li className="text-gray-700 hover:text-gray-500 cursor-pointer mb-2">Dapatkah saya mendapatkan pengembalian dana untuk pembelian saya?</li>
                        <li className="text-gray-700 hover:text-gray-500 cursor-pointer mb-2">Apa saja jam layanan pelanggan Anda?</li>
                    </ul>
                </div>      
            </div>
        </div>
    </div>  
    </div>
    );
}

export default Halaman_help;
              