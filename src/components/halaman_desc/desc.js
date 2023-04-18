import '../../../src/index.css';
import '../../../src/App.css';
import image from '../../assets/picbuku.png';
import save from '../../assets/save.png';
import share from '../../assets/share.png';
import card from '../../assets/card.png';
import comment1 from '../../assets/comment1.jpg';
import comment2 from '../../assets/comment2.jpg';
import Bar from '../navbar/navbar';

function Desc() {
  return (
    <div>
      <Bar />
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-transparent p-4"> 
            <img src={image} style={{ maxWidth: "80%", maxHeight: "80%" }} className="max-w-full h-auto" alt="Book Cover"/>
              <div className="description">
                <h1 className="font-barlow font-bold text-lg ml-20 -mt-10">Description</h1>
                  <p className="font-barlow text-sm mt-5 ml-20">
                    The story takes place during Harry's sixth year at Hogwarts School of Witchcraft and Wizardry.
                    Where he discovers more about. Lord Voldemort's past and the prophecy that foretells his defeat.<br></br>

                    <br></br>With action-packed sequences, shocking twist, and moments of heart-wrenching tragedy, "Half-Blood Prince"
                    is a must-read for any fan of the Harry Potter series.
                  </p>
              </div>
          
            <div className="commet mt-20 ml-20">
              <div className="comment flex ">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={comment1} className="max-w-full h-auto" alt="Book Cover"/>
                </div>
            
                <h1 className="font-poppins font-bold text-base ml-4 mt-2">Roberto Jordan</h1>
                </div>

              <p className="font-barlow text-sm ml-14">
                What a delightful and magical book it is! It indeed transports readers to the wizarding world.
              </p>
            </div>

            <div className="commet mt-10 ml-20">
              <div className="comment flex ">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={comment2} className="max-w-full h-auto" alt="Book Cover"/>
                </div>
            
                <h1 className="font-poppins font-bold text-base ml-4 mt-2">Sabrina Cathrine</h1>
                </div>

              <p className="font-barlow text-sm ml-14">
                What a delightful and magical book it is! It indeed transports readers to the wizarding world.
              </p>
            </div>
          </div>
                    
        <div className="bg-transparent p-4 -ml-20"> 
          <h1 className="font-playfair-semi text-5xl mt-40">Harry Potter: Half Blood Prince</h1>
          <p className="font-barlow text-lg mt-5">JK Rowling</p>
          <p className="font-barlow text-sm mt-7">
            Get ready to uncover the dark secrets and betrayals in the book. A thrilling adventure awaits you.
            Get ready to uncover the dark secrets and betrayals in the book. A thrilling adventure awaits you.
          </p>

          <div className="button mt-10 grid-cols-3 w-auto">
            <button className="bg-dark hover:bg-darkhover text-white py-2 px-14 text-sm rounded-full">Buy Now</button>

            <button className="bg-button  hover:bg-buttonhover text-white py-3 px-3 text-sm rounded-full ml-72">
              <img src={card} className="max-w-full h-auto" alt="Book Cover"/>
            </button>
            
            <button className="bg-button  hover:bg-buttonhover text-white py-3 px-3 text-sm rounded-full ml-5">
              <img src={save} className="max-w-full h-auto" alt="Book Cover"/>
            </button>

            <button className="bg-button  hover:bg-buttonhover text-white py-3 px-3 text-sm rounded-full ml-5">
              <img src={share} className="max-w-full h-auto" alt="Book Cover"/>
            </button>
          </div>

          <div className="editors ml-40">
            <h1 className="font-poppins font-bold text-lg mt-52">Editors</h1>
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
