import '../App.css';
import '../index.css';
import logoBook from '../assets/icons8-book-65.png';
import shenhe from '../assets/shenhe.jpg';
import logoMessage from '../assets/icons8-secured-letter-90.png';

function Login() {
  return (
    <div className='bg-white-buram w-screen h-screen flex items-center justify-center' id='kotak-tengah'>
      <div className='bg-white-apik w-3/4 h-3/4 rounded-xl grid grid-cols-2'>
        <div className='col-span-1 border'>
          <div className='flex items-center justify-center mt-16'>
            <img src={logoBook} alt='Logo' className='w-10 h-10 mr-2'/>
            <span className='font-bold text-xl'>Bookstore</span>
          </div>
          <div className='text-center mt-10'>
            <h5>Welcome To Bookstore</h5>
            <h1>Tolong Isi Data Untuk Masuk ke Bookstore</h1>
          </div>
        </div>
        <div className='col-span-1 flex items-center justify-center'>
          <img className='h-4/5 w-4/5' src={shenhe}/>
        </div>
      </div>
    </div>
  );
}

export default Login;