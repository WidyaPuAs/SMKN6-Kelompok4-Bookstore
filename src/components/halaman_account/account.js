import '../../../src/App.css';
import '../../../src/index.css';
import Bar from '../navbar/navbar';
import Bgpp from '../../assets/bgpp.jpg';
import Pp from '../../assets/pp.png';

function Halaman_Account() {
  return (
	  <div>
        <Bar />
        <div className='mx-auto w-11/12 h-96 bg-light-cream my-14 p-4 rounded-md' id='kotak-top'>
          <div className='bgpp '>
            <img src={Bgpp} className='w-full'/>
          </div>
          
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-2">

            </div>
          </div>
        </div>
    </div>
  );
};

export default Halaman_Account;