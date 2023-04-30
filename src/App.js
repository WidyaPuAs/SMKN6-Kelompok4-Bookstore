import Buku_Terlaris from './pages/keranjang';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Halaman_Keranjang from './components/halaman_keranjang/keranjang';
import Halaman_Account from './components/halaman_account/account'
import Halaman_Chat from './components/halaman_chat/chat';
import Halaman_Pembelian from './components/halaman_pembelian/pembelian';
import Pembayaran from './pages/pembayaran';
import Home from './pages/home'
import Halaman_Home_Guest from './components/halaman_home_guest/home_guest';
import Desc from './components/halaman_desc/harrypotter';
import Halaman_Login from './components/halaman_login/login'
import Halaman_SignUp from './components/halaman_login/signup'
import Halaman_about from './components/halaman_about/about';
import Desc3 from './components/halaman_desc/unbirthday';
import Halaman_Status_Pembelian from './components/halaman_status_pembelian/status_pembelian';
import Halaman_Admin from './components/halaman_admin/admin';
import Tesst from './test/test';
import Halaman_Home_Login from './components/halaman_home_login/home_login';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Router>
        <Routes>
          <Route path='/' element={<Halaman_Home_Guest/>} />
          <Route path='/log' element={<Halaman_Home_Login/>} />
          <Route path='/keranjang' element={<Halaman_Keranjang/>} />
          <Route path='/chat' element={<Halaman_Chat/>} />
          <Route path='/profile' element={<Halaman_Account/>} />
          <Route path='/view-all-1' element={<Buku_Terlaris/>} />
          <Route path='/buku-terlaris' element={<Buku_Terlaris/>} />
          <Route path='/pembayaran' element={<Pembayaran/>} />
          <Route path='/book-pergi' element={<Desc/>} />
          <Route path='/login' element={<Halaman_Login/>} />
          <Route path='/signup' element={<Halaman_SignUp/>} />
          <Route path='/about' element={<Halaman_about/>} />
          <Route path='/status' element={<Halaman_Status_Pembelian/>} />
          <Route path='/admin' element={<Halaman_Admin/>} />
          <Route path='/test' element={<Tesst/>} />
        </Routes>
      </Router>
      </div>
  );
}
export default App;

