import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Buku_Terlaris from './pages/keranjang';
import Halaman_Keranjang from './components/halaman_keranjang/keranjang';
import Halaman_Account from './components/halaman_account/account'
import Halaman_Chat from './components/halaman_chat/chat';
import Halaman_Home_Guest from './components/halaman_account/account';
import Halaman_Pembelian from './components/halaman_pembelian/pembelian';
import Pembayaran from './pages/pembayaran';
import Desc from './components/halaman_desc/desc';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/keranjang' element={<Halaman_Keranjang/>} />
          <Route path='/chat' element={<Halaman_Chat/>} />
          <Route path='/profile' element={<Halaman_Account/>} />
          <Route path='/view-all-1' element={<Buku_Terlaris/>} />
          <Route path='/buku-terlaris' element={<Buku_Terlaris/>} />
          <Route path='/pembayaran' element={<Pembayaran/>} />
          <Route path='/book-pergi' element={<Desc/>} />
        </Routes>
      </Router>
  );
}

export default App;
