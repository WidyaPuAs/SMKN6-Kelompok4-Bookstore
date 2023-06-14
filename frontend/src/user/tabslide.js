import Bar from "../nav/navbar";
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import Pp from '../assets/assets/pp.png';
import language from '../assets/icons/language.png';
import pallete from '../assets/icons/pallete.png';
import notifikasi from '../assets/icons/notifikasi.png';
import about from '../assets/icons/about.png';
import help from '../assets/icons/help.png';
import Search from '../assets/icons/search.png';
import Padlock from '../assets/icons/padlock.png';
import Show from '../assets/icons/show.png';
import Device from '../assets/icons/device.png';
import Alert from '../assets/icons/alert.png';
import Laptop from '../assets/icons/laptop.png';

const Tabslide = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Biodata', 'Daftar Alamat', 'Keamanan', 'Wishlist', 'Pengaturan'];
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
                    <div className='w-auto container mx-5 mt-2 flex'>
                        <div class="w-52 -mt-5 bg-white border border-gray-200 rounded-lg shadow">
                            <a href="#">
                                <img class="lg:w-44  mx-auto my-4"  src={Pp} alt="" />
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

                {tab === 'Daftar Alamat' &&
                  <div className='overflow-scroll mx-4'>
                    <div className='flex'>
                      <input type='text' className='w-4/12 border border-gray-300 px-3 py-1 rounded-l-md ml-2' placeholder='Cari Alamat...'/>
                      <button  className='bg-dark-cream text-white p-1 rounded-r-md'><img src={Search} className='w-5 p-1'></img></button>
                      <button className="p-2 mr-2 ml-auto bg-dark-cream  hover:bg-brown-cream font-barlow text-white font-bold text-xs rounded-md">Tambah Alamat</button>
                    </div>
                    <div class="w-auto mt-4 mx-2 bg-bg-baru border border-gray-200 rounded-lg shadow">
                      <div class="items-center px-3 py-2">
                      <div class="flex items-center mt-1">
                        <h1 className='font-semibold'>Rumah</h1>
                        <button className="p-1 ml-1 bg-brown-cream font-barlow text-white font-semibold text-xs rounded-full">Utama</button>
                      </div>
                      <h1 className='font-bold text-xl mt-2'>Mbak luna</h1>
                      <h1 className='font-semibold text-sm mt-1'>082368736773</h1>
                      <h1 className='font-semibold text-sm'>Mesir, Kairo Distrik B, Jln.Kenangan. Apartment no 7</h1>
                      <h1 className='font-semibold text-gray-400'>Pesan: Apartment Warna Krem, Lantai 6 pojok sendiri</h1>
                      <div className='flex mt-4'>
                        <button className='font-bold font-xs text-emerald-500 hover:text-emerald-700'>Share &nbsp; <span className='font-semibold text-gray-200'>|</span></button>
                        <button className='font-bold font-xs text-emerald-500 hover:text-emerald-700'> &nbsp; &nbsp; Ubah Alamat</button>
                      </div>
                      </div>
                    </div> 
                    {/* <div class="w-auto mt-4 mx-2 bg-bg-baru border border-gray-200 rounded-lg shadow">
                      <div class="items-center px-3 py-2">
                      <div class="flex items-center">
                        <h1 className='font-semibold'>Rumah</h1>
                        <button className="p-1 ml-1 bg-brown-cream font-barlow text-white font-semibold text-xs rounded-full">Utama</button>
                      </div>
                      <h1 className='font-bold text-xl '>Mbak luna</h1>
                      <h1 className='font-semibold text-sm'>082368736773</h1>
                      <h1 className='font-semibold text-sm'>Mesir, Kairo Distrik B, Jln.Kenangan. Apartment no 7</h1>
                      <h1 className='font-semibold text-gray-400'>Pesan: Apartment Warna Krem, Lantai 6 pojok sendiri</h1>
                      <div className='flex mt-4'>
                        <button className='font-bold font-xs text-emerald-500'>Share &nbsp; <span className='font-semibold text-gray-200'>|</span></button>
                        <button className='font-bold font-xs text-emerald-500'> &nbsp; &nbsp; Ubah Alamat</button>
                      </div>
                      </div>
                    </div>  */}
                  </div>
                  
                }
                {tab === 'Keamanan' &&
                  <div className='flex -mt-3'>
                    <div className='ml-8'>
                      <div className='mb-3'>
                        <button className='border rounded-lg p-2 w-48 '>
                        <span class="text-gray-700 ">
                            <img src={Show} alt="Sandi" class="w-5 mr-5 inline-block"/> 
                              Buat Kata Sandi
                          </span>
                        </button>
                      </div>
                      <div className='mb-3'>
                        <button className='border rounded-lg p-2 w-48 '>
                          <span class="text-gray-700 ">
                              <img src={Padlock} alt="pin" class="w-5 -ml-4 mr-5 inline-block"/> 
                                Pin Bookstore
                            </span>
                          </button>
                      </div>
                      <div>
                        <button className='border rounded-lg p-2 w-48 '>
                        <span class="text-gray-700 ">
                            <img src={Device} alt="scan" class="w-5 -ml-2 mr-5 inline-block"/> 
                              Verifikasi instan
                          </span>
                        </button>
                      </div>
                    </div>
                    <div class="w-8/12 sm:order-last mx-auto border border-gray-200 rounded-lg shadow">
                      <p className='text-xl font-bold m-2 -mb-1'>Aktivitas login</p>
                      <span class="text-red-500 text-xs ">
                              <img src={Alert} alt="Sandi" class="ml-2 w-3 mr-2 inline-block"/> 
                              Bila terdapat aktivitas tidak dikenal, segera klik "Keluar" dan ubah kata sandi.
                      </span>
                      <p className='text-sm font-semibold ml-2 mt-5 '>Aktivitas login saat ini:</p>
                      <div className='m-4 flex'>
                        <img src={Laptop} alt="Sandi" class="ml-2 w-12 mr-2 inline-block"/> 
                        <div>
                          <p className='text-sm font-bold ml-2'>Chrome di Windows 10</p>
                          <p className='text-sm font-semibold ml-2 mt-1'>182.347.39</p>
                          <button className="p-1 ml-1 bg-dark-cream font-barlow text-white font-semibold text-xs rounded-full mt-1">Sedang Aktif</button>
                        </div>
                      </div>
                    </div>

                  </div>
                }
                {tab === 'Wishlist' &&
                  <div></div>
                }

                {tab === 'Pengaturan' &&
                <div className='pengaturan'>
                  <div class="w-auto ml-5 mr-5 -mt-2 bg-white border border-gray-200 rounded-lg shadow">
                    <div class="flex justify-between items-center px-3 py-2">
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
                    <div class="flex justify-between items-center px-3 py-2">
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
                      <div class="flex justify-between items-center px-3 py-3">
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
                      <div class="flex justify-between items-center px-3 py-3">
                        <span class="text-gray-700">
                          <img src={help} alt="Help" class="w-5 h-5 mr-5 inline-block"/> 
                            Help
                        </span>
                      </div>
                    </div> 


                    {/* ABOUT DEVELOPMENT */}

                    <div class="w-auto ml-5 mr-5 mt-3 bg-white border border-gray-200 rounded-lg shadow" onClick={() => navigate('/about')} >
                      <div class="flex justify-between items-center  px-3 py-3">
                        <span class="text-gray-700">
                          <img src={about} alt="Aboutdevelopment" class="w-5 h-5 mr-5 inline-block"/> 
                            Tentang Tim
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
  
  export default Tabslide;
