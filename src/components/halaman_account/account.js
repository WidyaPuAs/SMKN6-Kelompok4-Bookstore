import '../../../src/App.css';
import '../../../src/index.css';
import Bar from '../navbar/navbar';
import Bgpp from '../../assets/bgpp.jpg';
import Pp from '../../assets/pp.png';

function Halaman_Account() {
  return (
	  <div>
        <Bar />
        <div className='container flex flex-row'>
          <div className='basis-2/3 mx-auto w-1/5 h-screen bg-light-cream my-2 rounded-md p-0' id='kotak-top'>
           <div className='flex'>
            <img src={Pp} className='w-24 rounded-full m-3'/>
           <div className='py-8'>
            <h1 className='font-barlow font-bold text-lg'>Delavonte</h1>
            <h1 className='font-barlow text-sm'>Lalunadelavonte@gmail.com</h1>
           </div>
           <div className='py-8 px-7 ml-auto'>
            <button className="h-8 w-24 m-3 bg-dark-cream  hover:bg-brown-cream font-barlow text-gray-900 text-xs rounded-full">Message</button>
            <button className="h-8 w-24 m-3 bg-dark-cream  hover:bg-brown-cream font-barlow text-gray-900 text-xs rounded-full">Edit Profile</button>
           </div>
           </div>
           <div class="border-t border-gray-300 my-4"></div>
           
          </div>
          <div className='basis-1/3 my-2 -mr-16 mx-auto rounded-sm bg-light-cream h-screen'>
            <p>ppppp</p>
          </div>
        </div>
    </div>
  );
};

export default Halaman_Account;