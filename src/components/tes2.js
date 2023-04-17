import '../App.css';
import '../index.css';
import Books from '../assets/books.png';

function Test2() {
    return (
<div className="mx-auto w-4/5 h-4/5 bg-light-cream my-14 py-4 rounded-md" id="kotak-top">
  <div className="grid grid-cols-12 gap-4">
    <div className="col-span-2">
      <img className="transform scale-75" src={Books} alt="Books" />
    </div>
    <div className="col-span-4" id="text-terlaris">
      <h1 className="text-4xl mt-10 ml-2 antialiased text-dark-purple bold font-bold">Temukan Buku Terbaru</h1>
      <div className="mt-3">
        <p className="ml-3">Jangan lewatkan buku-buku baru yang telah dirilis!</p>
        <p className="ml-3">Temukan buku-buku terbaru dari segala macam genre</p>
      </div>
      <a>
        <button className="bg-brown-cream rounded-lg antialiased font-sans text-white py-2 px-2 ml-3 mt-5">Buku Terbaru</button>
      </a>
    </div>
    <div className="col-span-6">
      <hr className="border-t-2 border-gray-200 mx-8" />
      <div className="flex justify-between items-center mx-8">
        <img className="h-12" src={Books} alt="Book1" />
        <img className="h-12" src={Books} alt="Book2" />
        <img className="h-12" src={Books} alt="Book3" />
        <img className="h-12" src={Books} alt="Book4" />
        <img className="h-12" src={Books} alt="Book5" />
      </div>
    </div>
  </div>
</div>
    )
};

export default Test2;

