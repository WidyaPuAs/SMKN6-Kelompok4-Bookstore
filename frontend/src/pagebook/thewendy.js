import Bar from "../nav/navbar";
import image from '../assets/books/kayla/thewendy.png';
import save from '../assets/icons/save.png';
import share from '../assets/icons/share.png';
import cart from '../assets/icons/cart.png';

function Desc2() {
  return (
    <div className='bg-bg_cream'>
      <Bar />
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-transparent p-4"> 
            <img src={image} style={{ maxWidth: "75%", maxHeight: "75%" }} className="max-w-full h-auto" alt="Book Cover"/>
              <div className="description">
                <h1 className="font-barlow font-bold text-lg ml-20 -mt-16">Deskripsi</h1>
                  <p className="font-barlow text-sm mt-5 ml-20">
                    London. 1789. Lebih dari apa pun di dunia, Wendy Darling ingin menjadi kapten kapal, 
                    tetapi wanita tidak diizinkan masuk Angkatan Laut Kerajaan. Ketika dia mengetahui Home Office 
                    menerima segelintir wanita ke dalam jajarannya, dia langsung mengambil kesempatan itu, bergabung 
                    dalam perang melawan ancaman paling tangguh yang pernah dihadapi Inggris. Sihir.<br></br>

                    <br></br>Tapi dinas rahasia tidak persis seperti yang dia harapkan. Ditemani oleh pemeran 
                    yang ditata ulang dari Peter Pan asli, Wendy segera menemukan bahwa mimpinya sejauh ini, 
                    bahwa memilih sisi tidak sesederhana yang dia pikirkan, dan bahwa satu-satunya pria yang 
                    tidak dibutakan oleh jenis kelaminnya. .. mungkin musuh terbesar bangsanya.
                  </p>
              </div>
          
            {/* <div className="commet mt-20 ml-20">
              <div className="comment flex ">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={comment1} className="max-w-full h-auto" alt="Book Cover"/>
                </div>
            
                <h1 className="font-poppins font-bold text-base ml-4 mt-2">Roberto Jordan</h1>
                </div>

              <p className="font-barlow text-sm ml-14">
                What a delightful and magical book it is! It indeed transports readers to the wizarding world.
              </p>
            </div> */}

            {/* <div className="commet mt-10 ml-20">
              <div className="comment flex ">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={comment2} className="max-w-full h-auto" alt="Book Cover"/>
                </div>
            
                <h1 className="font-poppins font-bold text-base ml-4 mt-2">Sabrina Cathrine</h1>
                </div>

              <p className="font-barlow text-sm ml-14">
                What a delightful and magical book it is! It indeed transports readers to the wizarding world.
              </p>
            </div> */}
          </div>
                    
        <div className="bg-transparent p-4 -ml-20"> 
          <h1 className="font-playfair-semi text-5xl mt-32">The Wendy</h1>
          <p className="font-barlow text-lg mt-7">Erin Michelle Sky</p>
          <p className="font-barlow italic text-sm mt-7">
            Ketika dunia tidak ingin Anda menjadi diri Anda sendiri, Anda harus menjadi diri Anda lebih dari yang Anda tahu.
          </p>

          <div className="button mt-10 grid-cols-3 w-auto">
          <p className="text-2xl font-bold">Rp 112.000</p>

            <button className="bg-dark hover:bg-darkhover text-white py-3 px-16 text-sm rounded-full mt-10">Buy Now</button>

            <button className="bg-button  hover:bg-buttonhover text-white py-4 px-4 text-sm rounded-full ml-72">
              <img src={cart} className="max-w-7 h-7" alt="Book Cover"/>
            </button>
            
            <button className="bg-button  hover:bg-buttonhover text-white py-3 px-3 text-sm rounded-full ml-5">
              <img src={save} className="max-w-7 h-7" alt="Book Cover"/>
            </button>

            <button className="bg-button  hover:bg-buttonhover text-white py-3 px-3 text-sm rounded-full ml-5">
              <img src={share} className="max-w-7 h-7" alt="Book Cover"/>
            </button>
          </div>

          <div className="editors ml-40">
            <h1 className="font-poppins font-bold text-lg mt-36">Editor</h1>
            <p className="font-barlow text-sm mt-6">
                Erin Michelle Sky (Penulis), Steven Brown
            </p>

            <h1 className="font-poppins font-bold text-lg mt-14">Bahasa</h1>
            <p className="font-barlow text-sm mt-6">
                Standard English (USA & UK)
            </p>

            <h1 className="font-poppins font-bold text-lg mt-14">Paperback</h1>
            <p className="font-barlow text-sm mt-6">
                Paper textured, full colour, 294 pages<br></br>
                ISBN-10: 1946137057<br></br>
                ISBN-13: 978-1946137050
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desc2;
