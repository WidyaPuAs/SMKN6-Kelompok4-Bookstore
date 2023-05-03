import '../../../src/App.css';
import '../../../src/index.css';
import Bar from '../navbar/navbar';
import Tabslide from '../halaman_status_pembelian/Tabslide_status';

function Halaman_Status_Pembelian() {
  return (
   <div>
     <Bar />
     <div>
        <Tabslide />
     </div>
   </div>
  );
};

export default Halaman_Status_Pembelian;
