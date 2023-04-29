import '../../../src/App.css';
import '../../../src/index.css';
import Bar from '../navbar/navbar';
import Tabslide from '../tabslide_status.js';

function Halaman_Status_Pembelian() {
  return (
   <div className=''>
    <Bar />
    <div classname=''>
      <Tabslide />
    </div> 
   </div>
  );
};

export default Halaman_Status_Pembelian;
