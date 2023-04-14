import '../..//App.css';
import '../../index.css';
import Bar from '../navbar/navbar';
import Books from '../../assets/books.png';
import tereliyePergi from '../../assets/tereliye-pergi.jpg';

function Halaman_Home_Guest() {
  return (
    <div> 
      <Bar />
      <div className='mx-auto w-4/5 h-4/5 bg-light-cream my-14 py-4 rounded-md' id='kotak-top'>
          <div className="grid grid-cols-12 gap-4">
            <div className='col-span-2'>
              <img className='transform scale-75' src={Books}/>
            </div>
              <div className='col-span-4'>
              <h1 className='text-4xl mt-10 ml-2 antialiased text-dark-purple bold font-bold'>Temukan Buku Terbaru</h1>
              <div className='mt-3'>
                <p className='ml-3'>Jangan lewatkan buku-buku baru yang telah dirilis!</p>
                <p className='ml-3'>Temukan buku-buku terbaru dari segala macam genre</p>
              </div>
              <a>
                <button className='bg-brown-cream rounded-lg antialiased font-sans text-white py-2 px-2 ml-3 mt-5'>Buku Terbaru</button>
              </a>
              </div>
            <div className='col-span-6 '>
              
            </div>
          </div>
      </div>

      <div className='w-11/12 h-fit border mx-auto grid grid-rows-2 py-3'>
        <div className='row-span-1 grid grid-co'>
          <div>
            <h4>Popular Now</h4>
          </div>
          <div>
            <h4>View All</h4>
          </div>
        </div>
        <div className='row-span-2'>
                 
        </div>
      </div>

    </div>
  );
}

export default Halaman_Home_Guest;