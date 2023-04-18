import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Desc from './components/halaman_desc/desc';
import Halaman_Home_Guest from './components/halaman_home_guest/home_guest';
import Halaman_Login from './components/halaman_login/login';
import Home from './pages/home';
import Buku_Terlaris from './pages/keranjang';
import Halaman_Keranjang from './components/halaman_keranjang/keranjang';
import Halaman_Account from './components/halaman_account/account'
import Halaman_Chat from './components/halaman_chat/chat';

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

export default App;
