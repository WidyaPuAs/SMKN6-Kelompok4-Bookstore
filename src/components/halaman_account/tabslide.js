import '../../../src/App.css';
import '../../../src/index.css';
import { Navigate, useNavigate } from 'react-router-dom';
import Pp from '../../assets/pp.png';
import language from '../../assets/language.png';
import pallete from '../../assets/pallete.png';
import notifikasi from '../../assets/notifikasi.png';
import Halaman_Status_Pembelian from '../halaman_status_pembelian/status_pembelian';
import about from '../../assets/about.png';
import help from '../../assets/help.png';
import { useState } from 'react';
const Test = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Biodata', 'Pengaturan'];
    const navigate = useNavigate()
  
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

                {tab === 'Pengaturan' &&
                <div className='pengaturan'>
                  <div class="w-auto ml-5 mr-5 -mt-2 bg-white border border-gray-200 rounded-lg shadow">
                    <div class="flex justify-between items-center px-3 py-3">
                      <span class="text-gray-700">
                        <img src={language} alt="Bahasa" class="w-5 h-5 mr-5 inline-block"/> 
                          Bahasa
                      </span>

                        <div className="flex justify-between relative">
                          <select className="text-sm block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-5 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Indonesia</option>
                            <option>Inggris</option>
                            <option>Mandarin</option>
                            <option>Hindi</option>
                            <option>Spanyol</option>
                            <option>Perancis</option>
                            <option>Arab</option>
                            <option>Bengali</option>
                            <option>Rusia</option>
                          </select>

                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>
                          </div>
                        </div>
                      </div>
                    </div> 


                   {/* TAMPILAN */}

                    <div class="w-auto ml-5 mr-5 mt-3 bg-white border border-gray-200 rounded-lg shadow">
                    <div class="flex justify-between items-center px-3 py-3">
                      <span class="text-gray-700">
                        <img src={pallete} alt="Tampilan" class="w-5 h-5 mr-5 inline-block"/> 
                          Tampilan
                      </span>

                        <div className="flex justify-between relative">
                          <select className="text-sm block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-5 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Light</option>
                            <option>Dark</option>
                          </select>

                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>
                          </div>
                        </div>
                      </div>
                    </div> 


                   {/* NOTIFIKASI */}

                    <div class="w-auto ml-5 mr-5 mt-3 bg-white border border-gray-200 rounded-lg shadow">
                      <div class="flex justify-between items-center px-3 py-4">
                        <span class="text-gray-700">
                          <img src={notifikasi} alt="Notifikasi" class="w-5 h-5 mr-5 inline-block"/> 
                            Notifikasi
                        </span>

                        <label class="relative inline-flex items-center cursor-pointer mr-2">
                        <input type="checkbox" value="" class="sr-only peer"></input>
                          <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                    </div> 


                    {/* HELP */}

                    <div class="w-auto ml-5 mr-5 mt-3 bg-white border border-gray-200 rounded-lg shadow">
                      <div class="flex justify-between items-center px-3 py-4">
                        <span class="text-gray-700">
                          <img src={help} alt="Help" class="w-5 h-5 mr-5 inline-block"/> 
                            Help
                        </span>
                      </div>
                    </div> 


                    {/* ABOUT DEVELOPMENT */}

                    <div class="w-auto ml-5 mr-5 mt-3 bg-white border border-gray-200 rounded-lg shadow" onClick={() => navigate('/about')} >
                      <div class="flex justify-between items-center px-3 py-4">
                        <span class="text-gray-700">
                          <img src={about} alt="Aboutdevelopment" class="w-5 h-5 mr-5 inline-block"/> 
                            About Development
                        </span>
                      </div>
                    </div> 
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
