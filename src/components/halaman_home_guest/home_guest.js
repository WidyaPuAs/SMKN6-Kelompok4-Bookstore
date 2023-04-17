import '../..//App.css';
import '../../index.css';
import Bar from '../navbar/navbar';
import Books from '../../assets/books.png';
import tereliyePergi from '../../assets/tereliye-pergi.jpg';

function Halaman_Home_Guest() {
  return (
    <div> 
      <Bar />
      <div className='mx-auto sm:w-3/5 md:w-2/3 lg:w-4/5 h-4/5 bg-light-cream mt-14 py-4 rounded-md' id='kotak-top'>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-span-2 flex justify-center items-center h-full border border-black'>
            {/* <img className='transform scale-75' src={Books} id='icon-1'/> */}
          </div>
          <div className='col-span-4 sm:ml-3 border border-black' id='text-terlaris'>
            <h1 className='text-4xl mt-10 ml-2 antialiased text-dark-purple bold font-bold'>Temukan Buku Terbaru</h1>
            <div className='mt-3'>
              <p className='ml-3'>Jangan lewatkan buku-buku baru yang telah dirilis!</p>
              <p className='ml-3'>Temukan buku terbaru dari segala macam genre</p>
            </div>
            <a>
              <button className='bg-brown-cream rounded-lg antialiased font-sans text-white py-2 px-2 ml-3 mt-5 mb-5'>Buku Terbaru</button>
            </a>
          </div>
          <div className='col-span-6 border border-black'>
            <div className='border-b border-black border-opacity-25'>

            </div>
          </div>
        </div>
      </div>

      {/* <div className='w-11/12 mx-auto grid grid-rows-2 py-3'>
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
      </div> */}

      <div className='grid grid-rows-2 w-11/12 mx-auto py-3 mt-8'>
        <div className='row-span-1 flex justify-between items-center'>
          <div className='text-2xl font-bold text-black'>
            <h4>Popular Now</h4>
          </div>
          <div className='text-lg text-gray-500'>
            <h4>View All</h4>
          </div>
        </div>
        <div className='row-span-2'>
          <div className='grid grid-rows'>

          </div>
        <div id='book-view' class='grid grid-cols-1 gap-2'>
          <div class='flex flex-col items-center border border-violet-700 -mt-16'>
            <img src={tereliyePergi } class='w-32 h-auto' />
            <p class='text-center'>Buku 1</p>
            <p class='text-center'>Nama Pembuat Buku 1</p>
            <p class='text-center'>Rp. 100.000</p>
          </div>
        </div>

        </div>
      </div>



    </div>
  );
}

export default Halaman_Home_Guest;