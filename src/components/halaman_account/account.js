import '../../../src/App.css';
import '../../../src/index.css';
import Bar from '../navbar/navbar';
import Tabslide from './tabslide.js'
import Bgpp from '../../assets/bgpp.jpg';
import Pp from '../../assets/pp.png';

function Halaman_Account() {
  return (
	  <div>
        <Bar />
        <div className='container flex flex-row'>
          <div className='basis-2/3 mx-auto w-1/5 h-screen bg-light-cream my-6 rounded-md p-0' id='kotak-top'>
           <div className='flex'>
            <img src={Pp} className='w-36 border-white border-2 rounded-full m-3'/>
           <div className='py-8'>
            <h1 className='font-barlow font-bold text-lg'>Delavonte</h1>
            <h1 className='font-barlow text-sm'>Lalunadelavonte@gmail.com</h1>
            <h1 className='font-barlow text-sm'>Member Silver</h1>
            <button className="h-7 w-20 mt-3 bg-dark-cream  hover:bg-brown-cream font-barlow text-gray-900 text-xs rounded-full">Logout</button>
           </div>
           <div className='py-8 px-7 ml-auto'>
            <button className="h-8 w-24 m-3 bg-dark-cream  hover:bg-brown-cream font-barlow text-gray-900 text-xs rounded-full">Message</button>
            <button className="h-8 w-24 m-3 bg-dark-cream  hover:bg-brown-cream font-barlow text-gray-900 text-xs rounded-full">Edit Profile</button>
           </div>
           </div>
           {/* <div class="border-t border-gray-300 my-1"></div> */}
           <Tabslide/>
          </div>
          <div className='basis-1/4 my-2  mx-auto rounded-sm bg-light-cream h-screen'>
            <p>ppppp</p>
          </div>
        </div>
    </div>
  );
};

export default Halaman_Account;