import './App.css';
import Halaman_Account from './components/halaman_account/account';
import Desc from './components/halaman_desc/desc';
import Halaman_Home_Guest from './components/halaman_home_guest/home_guest';
import Halaman_Login from './components/halaman_login/login';
import Halaman_Keranjang from './components/halaman_keranjang/keranjang';
import Test from './components/tes';
import Test2 from './components/tes2';
import Halaman_Pembelian from './components/halaman_pembelian/pembelian';

function App() {
  return (
    
    <div>
      {/* <Halaman_Home_Guest /> */}
      {/* <Halaman_Pembelian /> */}
      <Halaman_Account/>
    </div>
  );
}

export default App;
