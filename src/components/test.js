import { Navigate, useNavigate } from 'react-router-dom';
import '../App.css';
import '../index.css';

const Test1 = () => {
    const navigate = useNavigate()
    return (
      <div>
        <h3>Halaman Awal</h3>
        <button onClick={() => navigate('/laris')}> Buku Terlaris </button>
      </div>
    )
};

export default Test1;

