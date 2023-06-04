import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Pp from '../assets/icons/books.png'
import book1 from '../assets/books/kayla/picbuku.png'
import cowo from '../assets/assets/man.jpg'

const Status = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['belum dibayar','sedang dikemas', 'telah dikirim', 'selesai', 'dibatalkan'];
    const navigate = useNavigate()
  
    return (
      <div className="bg">
        <div className="max-w-screen">
          <div className="border-0 rounded">
            <nav className="-mb-px flex">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`${
                    activeTab === index
                      ? 'border-b-2 border-dark-cream'
                      : 'border-b border-transparent'
                  } text-gray-500 py-4 px-6 hover:text-dark-cream focus:outline-none`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
          <div className="py-1">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`${
                  activeTab === index ? 'block' : 'hidden'
                }`}
              >
                {tab === 'belum dibayar' &&
                  <div className="bg-bg_cream flex container min-h-screen mx-auto">
                    <div className="mx-4 md:mx-8 py-8 w-full">
                      <div className="bg-white shadow-md rounded-lg overflow-hidden px-4 md:px-10 py-4">
                      <div className="flex items-center mb-4">
  <div className="w-5 h-5 rounded-full bg-gray-500 flex items-center justify-center mr-4">
    <img src={cowo} alt="toko"/>
  </div>
  <div>
    <h1 className="font-bold text-gray-900 mt-1">
      Harry Potter: Half Blood Prince
    </h1>
    <p className="text-gray-500">Dijual oleh Toko Buku XYZ</p>
  </div>
</div>

                        <div className="flex items-center justify-between mb-4">
                          
                <div className="flex mt-1">
                  
                  <img src={book1} alt="Book 1" className="mr-4 w-20 h-auto"/>
                  <div>
                  <h1 className="font-bold text-gray-900 mt-1 text-xl">
  Harry Potter: Half Blood Prince
</h1>
                    <p className="text-gray-500">1x</p>
                  </div>
                </div>
                <span className="font-bold text-gray-900">Rp 100.000</span>
              </div>
                      </div>
                    </div>
                  </div>
                }
                {tab === 'Sedang dikemas' &&
                    <div className='container mx-5 -mt-2 flex'>
                        
                    </div>
                }
                {tab === 'telah dikirim' &&
                    <div className='container mx-5 -mt-2 flex'>
                        
                    </div>
                }
                {tab === 'selesai' &&
                    <div className='ml-3 container -mt-2'>
                        <input type='text' className='w-11/12 mx-auto border border-gray-300 px-4 py-2 rounded-r-md' placeholder='Cari berdasarkan Nama Penjual, No. Pesanan atau Nama produk dalam semua pesanan'/>
                        <div className='mt-3 bg-white rounded-md border'>
                          <div className='flex p-3 items-center'>
                            <img className='w-8' src={Pp}/>
                            <h1 className='font-semibold ml-2 text-sm'>Toko buku</h1>
                            <a href="#" class="p-1 px-2 text-xs font-medium text-center text-white bg-dark-cream rounded-lg hover:bg-brown-cream focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    chat
                                    {/* <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                            </a>
                            <a href="#" class="p-1 px-2 text-xs font-medium text-center text-white bg-dark-cream rounded-lg hover:bg-brown-cream focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    Kunjungi toko
                                    {/* <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                            </a>
                          </div>

                        </div>
                    </div>
                }
                {tab === 'dibatalkan' &&
                    <div className='container mx-5 -mt-2 flex'>
                        
                    </div>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Status;

