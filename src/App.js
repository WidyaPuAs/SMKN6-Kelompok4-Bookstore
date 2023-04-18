import './App.css';
import Desc from './components/halaman_desc/desc';
import Halaman_Account from './components/halaman_account/account'
import Halaman_Home_Guest from './components/halaman_home_guest/home_guest';
import Halaman_Login from './components/halaman_login/login';
import Halaman_Keranjang from './components/halaman_keranjang/keranjang'

function App() {
  return (
    <div>
      {/* <Halaman_Home_Guest /> */}
      {/* <Halaman_Keranjang /> */}
      <Halaman_Account/>
    </div>
  );
}

export default App;
