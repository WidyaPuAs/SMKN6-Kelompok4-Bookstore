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
                    <div className='container mx-5 mt-2 flex'>
                        <div class="w-52 -mt-5 bg-white border border-gray-200 rounded-lg shadow">
                            <a href="#">
                                <img class="w-44 mx-auto my-4"  src={Pp} alt="" />
                            </a>
                                <a href="#" class="p-2 mx-12 text-sm font-medium text-center text-white bg-dark-cream rounded-lg hover:bg-brown-cream focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    Ubah Gambar
                                    {/* <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                                </a>
                            <div class="p-3">
                                <p class="my-3 font-normal text-xs text-gray-700 dark:text-gray-400">Besar file maxsimum 10mb. Ekstensi file yang diperbolehkan: .jpg .jpeg .png</p>
                            </div>                      
                        </div>
                        <div class="ml-6 text-gray-700">
                          <p className='text-4xl font-bold ml-3 -mt-7 mb-3'>About</p>
                              <div class="grid md:grid-cols-1 text-sm">
                                  <div class="grid grid-cols-2">
                                      <div class="px-4 py-2 font-semibold">Username</div>
                                      <div class="px-4 py-2">LalunaDelavonte</div>
                                  </div>
                                  <div class="grid grid-cols-2">
                                      <div class="px-4 py-2 font-semibold">Email</div>
                                      <div class="px-4 py-2">
                                          <a class="text-blue-800" href="mailto:laluna@example.com">laluna@example.com</a>
                                      </div>
                                  </div>
                                  <div class="grid grid-cols-2">
                                      <div class="px-4 py-2 font-semibold">Gender</div>
                                      <div class="px-4 py-2">Female</div>
                                  </div>
                                  <div class="grid grid-cols-2">
                                      <div class="px-4 py-2 font-semibold">Contact No.</div>
                                      <div class="px-4 py-2">+62083495242994</div>
                                  </div>
                                  <div class="grid grid-cols-2">
                                      <div class="px-4 py-2 font-semibold">Country</div>
                                      <div class="px-4 py-2">Indonesia</div>
                                  </div>
                                  {/* <div class="grid grid-cols-2">
                                      <div class="px-4 py-2 font-semibold">Permanant Address</div>
                                      <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                                  </div>
                                  <div class="grid grid-cols-2">
                                      <div class="px-4 py-2 font-semibold">Email.</div>
                                      <div class="px-4 py-2">
                                          <a class="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                                      </div>
                                  </div>
                                  <div class="grid grid-cols-2">
                                      <div class="px-4 py-2 font-semibold">Birthday</div>
                                      <div class="px-4 py-2">Feb 06, 1998</div>
                                  </div> */}
                                  <a href="#" class="p-2 m-3 w-36 text-sm font-medium text-center text-white bg-dark-cream rounded-lg hover:bg-brown-cream focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    Edit Biodata
                                    {/* <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                                 </a>
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