import '../../../src/App.css';
import '../../../src/index.css';
import Bar from '../navbar/navbar';
import image from '../../assets/picbuku.png';


function Halaman_Keranjang() {
  return (
    <div className="bg-bg_cream min-h-screen">
      <Bar/>

      <div class="max-w-7xl mx-8 py-8 flex mt-7">
        <div class="w-4/5">
          <div class="bg-white shadow-md rounded-lg overflow-hidden px-10 py-4">
            <p class="text-sm mb-2 font-bold">KERANJANG BUKU</p>
              <li className="flex mb-4 -mt-7" style={{ borderBottom: "1px solid #999999", paddingBottom: "1cm" }}></li>

              <ul>
                <li className="flex mb-4 mt-7">
                  <img src={image} style={{ maxWidth: "16%", maxHeight: "16%" }} className="max-w-full h-auto" alt="Book Cover"/>
                  <div className="ml-10 mt-5">
                    <p className="text-lg font-bold" style={{ whiteSpace: "nowrap" }}>Harry Potter: Half Blood Prince</p>
                    <p className="text-sm mt-5">Code Produk : 34528</p>
                  </div>
                      
                  <div className="w-2/4 text-right ml-10 mt-10">
                    <p className="text-md font-bold">Rp260.000</p>
                  </div>
                </li>
              </ul>

              <ul>
                <li className="flex mb-4 mt-7">
                  <img src={image} style={{ maxWidth: "16%", maxHeight: "16%" }} className="max-w-full h-auto" alt="Book Cover"/>
                  <div className="ml-10 mt-5">
                    <p className="text-lg font-bold" style={{ whiteSpace: "nowrap" }}>Harry Potter: Half Blood Prince</p>
                    <p className="text-sm mt-5">Code Produk : 34528</p>
                  </div>
                      
                  <div className="w-2/4 text-right ml-10 mt-10">
                    <p className="text-md font-bold">Rp260.000</p>
                  </div>
                </li>
              </ul>

              <ul>
                <li className="flex mb-4 mt-7">
                  <img src={image} style={{ maxWidth: "16%", maxHeight: "16%" }} className="max-w-full h-auto" alt="Book Cover"/>
                  <div className="ml-10 mt-5">
                    <p className="text-lg font-bold" style={{ whiteSpace: "nowrap" }}>Harry Potter: Half Blood Prince</p>
                    <p className="text-sm mt-5">Code Produk : 34528</p>
                  </div>
                      
                  <div className="w-2/4 text-right ml-10 mt-10">
                    <p className="text-md font-bold">Rp260.000</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        <div class="w-1/3 ml-5">
          <div class="bg-white shadow-md rounded-lg overflow-hidden px-10 py-4">
            <p class="text-sm mb-2 font-bold">RINGKASAN PEMESANAN</p>
            <li className="flex mb-4 -mt-7" style={{ borderBottom: "1px solid #999999", paddingBottom: "1cm" }}></li>

            <ul>
              <li className="flex mb-4 mt-7">
                <div className="flex justify-between">
                  <p className="w-1/3 text-sm text-center">ITEM</p>
                  <p className="w-1/3 text-sm text-center mx-10">3</p>
                  <p className="w-1/3 text-sm text-center ml-20" style={{ whiteSpace: "nowrap" }}>RP. 520.000</p>
                </div>
              </li>

              <li className="flex mb-4 mt-7">
                <div className="flex justify-between">
                  <p className="w-1/3 text-sm text-center">DISCOUNT</p>
                  <p className="w-1/3 text-sm text-center ml-40" style={{ whiteSpace: "nowrap" }}>20%</p>
                </div>
              </li>

              <li className="flex mb-4 mt-7">
                <div className="flex justify-between">
                  <p className="w-1/3 text-sm text-center mt-2">PENGIRIMAN</p>
                </div>
              </li>

              <li className="flex mb-4">
                <div className="flex justify-between relative">
                    <select className="text-sm block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                      <option>Instant Dari Rp.19.000</option>
                      <option>Same Day Dari Rp.14.000</option>
                      <option>Reguler Rp.9.000</option>
                      <option>Hemat Rp.11.000</option>
                      <option>Kargo Rp.6.000</option>
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>
                    </div>
                </div>
              </li>

              <li className="flex mb-4" style={{ borderBottom: "1px solid #999999", paddingBottom: "1cm" }}></li>

              <li className="flex mb-4 mt-7">
                <div className="flex justify-between">
                  <p className="w-1/3 text-sm text-center font-bold">TOTAL</p>
                  <p className="w-1/3 font-bold text-sm text-center ml-40" style={{ whiteSpace: "nowrap" }}>Rp.427.000</p>
                </div>
                
              </li>
              <button className="bg-bg_button hover:bg-bg_button_hover tnteext-sm text-white py-2 px-24 ml-2 mt-6 mb-5 rounded">Check Out</button> 
            </ul> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Halaman_Keranjang;