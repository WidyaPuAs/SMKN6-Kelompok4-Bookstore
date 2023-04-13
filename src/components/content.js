import '../App.css';
import '../index.css';
import Bar from './navbar';
import tereliyePergi from '../assets/tereliye-pergi.jpg';

function Content() {
  return (
    <div> 
      <Bar />
      <div className='mx-auto w-4/5 h-100 bg-light-cream my-14 p-4 rounded-md' id='kotak-top'>
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-2">
              <h1 className='text-4xl mt-10 ml-2 antialiased text-dark-purple bold font-bold'>Temukan Buku Terbaru</h1>
              <div className='mt-3'>
                <p className='ml-3'>Jangan lewatkan buku-buku baru yang telah dirilis!</p>
                <p className='ml-3'>Temukan buku-buku terbaru dari segala macam genre</p>
              </div>
              
              <a>
                <button className='bg-brown-cream rounded-lg antialiased font-sans text-white py-2 px-2 ml-3 mt-5'>Buku Terbaru</button>
              </a>
            </div>
            <div className='col-span-3'>
              <div className='grid grid-cols-4 gap-3' id='buku-terbaru'>
                  <div className='col-span-1'>
                    <img className='hover:object-scale-down' src={tereliyePergi}/>
                    {/* <h3 className='font-medium text-lg mt-2'>Tereliye Pergi</h3>
                    <p className='text-gray-500 mt-1'>Tereliye</p>
                    <p className='text-red-500 mt-1'>Rp. 100.000</p> */}
                  </div>
                  <div></div>
                  <div></div>
              </div>
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

export default Content;