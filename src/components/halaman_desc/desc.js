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
                <h1 className="font-barlow font-bold text-lg ml-20 -mt-16">Deskripsi</h1>
                  <p className="font-barlow text-sm mt-5 ml-20">
                    Harry Potter dan Pangeran Berdarah Campuran Edisi Ravenclaw House ini merayakan karakter mulia dari asrama Hogwarts yang terkenal 
                    karena kecerdasan, pembelajaran, dan kebijaksanaannya. Tahun keenam Harry di Hogwarts dikemas dengan momen dan karakter Ravenclaw 
                    yang lebih hebat paling tidak komentar Quidditch debut Luna Lovegood.<br></br>

                    <br></br>Setiap Ravenclaw House Edition menampilkan tepian yang disemprotkan dengan warna cerah dan pelapisan perunggu yang rumit. 
                    Desain sampul yang menakjubkan memiliki potret bergaya cameo dari Pangeran Berdarah Campuran sebagai ikon sentral, dibingkai oleh ikonografi 
                    bertema rumah yang indah. Selain pengenalan yang dipesan lebih dahulu, Edisi Ravenclaw juga berisi ilustrasi baru oleh pemenang Medali Kate Greenaway Levi Pinfold, 
                    termasuk potret siswa Ravenclaw yang tak ada bandingannya, Luna Lovegood, dan gambar indah Gilderoy Lockhart menandatangani salinan Magical Me untuk menyertai fitur magis buku. 
                    Ketujuh buku dalam seri ini akan diterbitkan dalam House Editions yang sangat dapat dikoleksi dan dibuat dengan indah ini, dirancang untuk dihargai dan dibaca selama bertahun-tahun yang akan datang.
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
          <p className="text-2xl font-bold">Rp 260.000</p>

            <button className="bg-dark hover:bg-darkhover text-white py-3 px-16 text-sm rounded-full mt-10">Buy Now</button>

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
            <h1 className="font-poppins font-bold text-lg mt-32">Editor</h1>
            <p className="font-barlow text-sm mt-6">
              JK. Rowling (Penulis), Christopher Reath, Alena Gestabon, Steve Korg
            </p>

            <h1 className="font-poppins font-bold text-lg mt-14">Bahasa</h1>
            <p className="font-barlow text-sm mt-6">
              Standard English (USA & UK)
            </p>

            <h1 className="font-poppins font-bold text-lg mt-14">Paperback</h1>
            <p className="font-barlow text-sm mt-6">
              Paper textured, full colour, 345 pages<br></br>
              ISBN: 987 3 32564 455 B
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desc;
