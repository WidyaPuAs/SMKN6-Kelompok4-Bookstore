import './index.css';
import './App.css';

// Implementation
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// Page
import Halaman_SignUp from './login/signup';
import Halaman_Login from './login/login';
import Halaman_Home_Guest from './home/home_guest';
import Halaman_Home_Login from './home/home_login';
import Halaman_Chat from './user/chat';
import Halaman_Keranjang from './transaksi/keranjang';
import Halaman_Account from './user/account';
import Halaman_Pembelian from './transaksi/pembelian';
import Buku_Terbaru from './page/buku_terbaru';
import Beta_Keranjang from './transaksi/beta_keranjang';
import Halaman_help from './user/help';
import Halaman_about from './admin/about';
import Halaman_Status_Pembelian from './transaksi/status_pembelian';
import Halaman_kategori from './page/kategori';
import Desc from './pagebook/harrypotter';
import Administrator from './admin/administrator';
import Account from './user/accountbeta';

function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Router>
        <Routes>
          <Route>
          <Route path='/' element={<Halaman_Home_Guest/>} />
          <Route path='/admin' element={<Administrator/>} />
          <Route path='/signup' element={<Halaman_SignUp/>} />
          <Route path='/login' element={<Halaman_Login/>} />
          <Route path='/log' element={<Halaman_Home_Login/>} />
          <Route path='/buku-terbaru' element={<Buku_Terbaru/>} />
          <Route path='/book-pergi' element={<Desc/>} />
          <Route path='/chat' element={<Halaman_Chat/>} />
          <Route path='/keranjang' element={<Halaman_Keranjang/>} />
          <Route path='/keranjang1' element={<Beta_Keranjang/>} />
          <Route path='/profile' element={<Halaman_Account/>} />
          <Route path='/profil' element={<Account/>} />
          <Route path='/pembayaran' element={<Halaman_Pembelian/>} />
          <Route path='/help' element={<Halaman_help/>} />
          <Route path='/about' element={<Halaman_about/>} />
          <Route path='/status' element={<Halaman_Status_Pembelian/>} />
          <Route path='/kategori' element={<Halaman_kategori/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
