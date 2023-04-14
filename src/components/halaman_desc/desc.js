import '../../../src/index.css';
import '../../../src/App.css';
import image from '../../assets/picbuku.png';
import save from '../../assets/save.png';
import share from '../../assets/share.png';
import cart from '../../assets/cart.png';
import comment1 from '../../assets/comment1.jpg';
import comment2 from '../../assets/comment2.jpg';
import Bar from '../navbar/navbar';

function Desc() {
  return (
    <div className='bg-bg_cream'>
      <Bar />
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-transparent p-4"> 
            <img src={image} style={{ maxWidth: "80%", maxHeight: "80%" }} className="max-w-full h-auto" alt="Book Cover"/>
              <div className="description">
                <h1 className="font-barlow font-bold text-lg ml-20 -mt-16">Description</h1>
                  <p className="font-barlow text-sm mt-5 ml-20">
                    Cerita berlangsung selama tahun keenam Harry di Hogwarts School of Witchcraft and Wizardry.
                    Di mana dia menemukan lebih banyak tentang. Masa lalu Lord Voldemort dan ramalan yang meramalkan kekalahannya.<br></br>

                    <br></br>Dengan urutan penuh aksi, twist yang mengejutkan, dan momen tragedi yang menyayat hati, "Half-Blood Prince"
                    adalah bacaan wajib bagi setiap penggemar seri Harry Potter.
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
          <h1 className="font-playfair-semi text-5xl mt-40">Harry Potter: Half Blood Prince</h1>
          <p className="font-barlow text-lg mt-7">JK Rowling</p>
          <p className="font-barlow italic text-sm mt-7">
            Bersiaplah untuk mengungkap rahasia kelam dan pengkhianatan dalam buku ini. Petualangan mendebarkan menanti Anda.
          </p>

          <div className="button mt-10 grid-cols-3 w-auto">
            <button className="bg-dark hover:bg-darkhover text-white py-2 px-14 text-sm rounded-full">Buy Now</button>

            <button className="bg-button  hover:bg-buttonhover text-white py-4 px-4 text-sm rounded-full ml-72">
              <img src={cart} className="max-w-full h-auto" alt="Book Cover"/>
            </button>
            
            <button className="bg-button  hover:bg-buttonhover text-white py-3 px-3 text-sm rounded-full ml-5">
              <img src={save} className="max-w-full h-auto" alt="Book Cover"/>
            </button>

            <button className="bg-button  hover:bg-buttonhover text-white py-3 px-3 text-sm rounded-full ml-5">
              <img src={share} className="max-w-full h-auto" alt="Book Cover"/>
            </button>
          </div>

          <div className="editors ml-40">
            <h1 className="font-poppins font-bold text-lg mt-44">Editors</h1>
            <p className="font-barlow text-sm mt-6">
              JK. Rowling (author), Christopher Reath, Alena Gestabon, Steve Korg
            </p>

            <h1 className="font-poppins font-bold text-lg mt-16">Language</h1>
            <p className="font-barlow text-sm mt-6">
              Standard English (USA & UK)
            </p>

            <h1 className="font-poppins font-bold text-lg mt-16">Paperback</h1>
            <p className="font-barlow text-sm mt-6">
              Paper textured, full colour, 345 pages
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desc;
