import '../../../src/App.css';
import '../../../src/index.css';
import Pp from '../../assets/pp.png';
import { useState } from 'react';

const Test = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Biodata', 'Pemesanan', 'Pengaturan'];
  
    return (
      <div className="bg">
        <div className="max-w-6xl mx-auto ">
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
          <div className="py-8">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`${
                  activeTab === index ? 'block' : 'hidden'
                }`}
              >
                {tab === 'Biodata' &&
                    <div className='container mx-3 flex'>
                        <div class="w-52 -mt-5 bg-white border border-gray-200 rounded-lg shadow">
                            <a href="#">
                                <img class="w-44 mx-auto my-4"  src={Pp} alt="" />
                            </a>
                            <div class="p-3">
                                <a href="#" class="inline-flex items-center p-2 center  text-sm font-medium text-center text-white bg-dark-cream rounded-lg hover:bg-brown-cream focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    Ubah Gambar
                                    {/* <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                                </a>
                                {/* <a href="#">
                                    <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a> */}
                                {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a> */}
                            </div>
                        </div>
                    </div>
                }
                {tab === 'Pemesanan' &&
                    <p>Daftar pemesanan Anda:</p>
                }
                {tab === 'Pengaturan' &&
                    <div>
                    <h3>Pengaturan akun</h3>
                    <ul>
                        <li>Email: johndoe@example.com</li>
                        <li>Password: **********</li>
                        <li>Notifikasi: ON</li>
                    </ul>
                    </div>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Test;