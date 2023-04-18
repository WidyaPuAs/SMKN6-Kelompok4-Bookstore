import Buku_Terlaris from './pages/keranjang';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Halaman_Keranjang from './components/halaman_keranjang/keranjang';
import Halaman_Account from './components/halaman_account/account'
import Halaman_Chat from './components/halaman_chat/chat';
import Halaman_Home_Guest from './components/halaman_home_guest/home_guest';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Halaman_Home_Guest/>} />
          <Route path='/keranjang' element={<Halaman_Keranjang/>} />
          <Route path='/chat' element={<Halaman_Chat/>} />
          <Route path='/profile' element={<Halaman_Account/>} />
          <Route path='/view-all-1' element={<Buku_Terlaris/>} />
          <Route path='/buku-terlaris' element={<Buku_Terlaris/>} />
        </Routes>
      </Router>
  );
}

export default App;