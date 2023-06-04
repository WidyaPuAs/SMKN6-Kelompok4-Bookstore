import Bar from "../nav/navbar";
import Tabslide from './tabslide.js'

import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import Pp from '../assets/assets/pp.png';
import Rewardsilver from '../assets/icons/RewardsSilver.svg'
import Ovo from  '../assets/icons/ovo.png'
import Saldo from  '../assets/icons/saldo.png'
import Gopay from  '../assets/icons/gopay.png'

function Halaman_Account() {
  const navigate = useNavigate();
  return (
	  <div className='bg-bg_cream'>
        <Bar />
        <div className=' container flex flex-row md:grid-col-2'>
        <div className=' container flex flex-col md:flex-row sm:flex-row'>
          <div className='basis-2/3 mx-auto w-1/5 bg-white h-screen my-6 rounded-xl p-0' id='kotak-top'>
           <div className='flex'>
            <img src={Pp} className='w-36 ml-7 border-white border-2 rounded-full m-3'/>
           <div className='mx-4 py-8'>
            <h1 className='font-barlow font-bold text-lg'>Nama User</h1>
            <h1 className='font-barlow text-sm'>Email User</h1>
            <h1 className='font-barlow text-sm'>Member Silver</h1>
            <button className="h-7 w-20 mt-4 bg-dark-cream  hover:bg-brown-cream font-barlow text-white font-bold text-xs rounded-full" onClick={() => navigate('/login')}>Logout</button>
           </div>
           <div className='py-8 px-7 ml-auto'>
            <button className="h-8 w-24 m-3 bg-dark-cream  hover:bg-brown-cream font-barlow text-white font-bold text-xs rounded-full">Message</button>
            <button className="h-8 w-24 m-3 bg-dark-cream  hover:bg-brown-cream font-barlow text-white font-bold text-xs rounded-full">Edit Profile</button>
           </div>
           </div>
           <Tabslide/>
          </div>
          <div className='basis-1/2 md:basis-1/4 my-6  mx-auto rounded-xl bg-white h-screen'>
           <div className='flex'>
            <img src={Rewardsilver} className='m-2'/>
            <h1 className=' fort-barlow font-extrabold text-lg -ml-1 m-2'>Member Silver</h1>
           </div>
           <div class="border-t-2 border-gray-300"></div>
           <div>
            <div className='flex items-center'>
             <img src={Saldo} className='h-7 m-2'/>
             <h1 className=' fort-barlow font-semibold text-xs -ml-1 m-2'>Saldo</h1>
             <h1 className=' fort-barlow font-semibold text-xs ml-auto m-2 '>Rp0</h1>
            </div>
            <div className='flex items-center'>
              <img src={Ovo} className='h-7 m-2'/>
              <h1 className=' fort-barlow font-semibold text-xs -ml-1 m-2'>Ovo Cash</h1>
              <h1 className=' fort-barlow font-semibold text-emerald-700 text-xs ml-auto m-2 '>Aktifkan</h1>
            </div>
            <div className='flex items-center'>
              <img src={Gopay} className='h-7 m-2'/>
              <h1 className=' fort-barlow font-semibold text-xs -ml-1 m-2'>GoPay</h1>
              <h1 className=' fort-barlow font-semibold text-emerald-700 text-xs ml-auto m-2 '>Aktifkan</h1>
            </div>
            <div class="border-t-2 my-1 border-gray-300"></div>
            <div>
              <div className='flex items-center'>
                <h1 className=' fort-barlow font-bold text-md m-2'>Pembelian</h1>
                <svg className="ml-auto mr-2 fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>
              </div>
              <div>
                <ul>
                  <li className='fort-barlow font-semibold text-sm my-1.5 ml-2 hover:text-gray-500'><a href='#'>Riwayat Transaksi</a></li>
                  <li className='fort-barlow font-semibold text-sm my-1.5 ml-2 hover:text-gray-500'><a href='#'>Ulasan</a></li>
                  <li className='fort-barlow font-semibold text-sm my-1.5 mb-3 ml-2 hover:text-gray-500'><a href='#'>Chat</a></li>
                </ul>
              </div>
            </div>
            <div class="border-t-2 my-1 border-gray-300"></div>
            <div>
              <div className='flex items-center'>
                <h1 onClick={() => navigate('/status')} className=' fort-barlow font-bold text-md m-2'>Pesanan Saya</h1>
                <svg className="ml-auto mr-2 fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>
              </div>
              <div>
                <ul>
                  <li onClick={() => navigate('/status')} className='fort-barlow font-semibold text-sm my-1.5 ml-2 hover:text-gray-500'>Belum Dibayar</li>
                  <li onClick={() => navigate('/status')} className='fort-barlow font-semibold text-sm my-1.5 ml-2 hover:text-gray-500'>Sedang Dikemas</li>
                  <li onClick={() => navigate('/status')} className='fort-barlow font-semibold text-sm my-1.5 ml-2 hover:text-gray-500'>Dikirim</li>
                  <li onClick={() => navigate('/status')} className='fort-barlow font-semibold text-sm my-1 ml-2 hover:text-gray-500'>Selesai</li>
                  <li onClick={() => navigate('/status')} className='fort-barlow font-semibold text-sm my-1 ml-2 hover:text-gray-500'>Dibatalkan</li>
                  <li onClick={() => navigate('/status')} className='fort-barlow font-semibold text-sm my-1 ml-2 hover:text-gray-500'>Pengembalian barang</li>
                </ul>
              </div>
            </div>
           </div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Halaman_Account;