import './App.css';
import Harrypotter from './components/halaman_desc/harrypotter';
import Halaman_Home_Guest from './components/halaman_home_guest/home_guest';
import Halaman_Login from './components/halaman_login/login';
import Halaman_Keranjang from './components/halaman_keranjang/keranjang';
import Unbirthday from './components/halaman_desc/unbirthday';

function App() {
  return (
    <div>
      {/* <Harrypotter/> */}
      {/* <Unbirthday/> */}
      {/* <Halaman_Login /> */}
      <Halaman_Keranjang />
    </div>
  );
}

export default App;
