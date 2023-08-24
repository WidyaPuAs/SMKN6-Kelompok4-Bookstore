import Bar from "../nav/navbar";

import React, {useState, useEffect} from "react";
import axios from "axios";

import tereliyePergi from "../assets/books/tereliye-pergi.jpg";
import tereliyeBulan from "../assets/books/bulan.jpg";
import tereliyeAnakSpecial from "../assets/books/anak_special.jpg";
import tereliyeKomet from "../assets/books/komet.jpg";
import tereliyeMatahari from "../assets/books/matahari.jpg";
import tereliyeBintang from "../assets/books/bintang.jpg";
import tereliyeBedebah from "../assets/books/negeri_para_bedebah.jpg";
import tereliyeHujan from "../assets/books/hujan.jpg";
import tereliyeBumi from "../assets/books/bumi.jpg";

function Buku_Terbaru() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:8000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };


  return (
	  <div>
        <Bar />
        <div class="flex flex-nowrap overflow-x-auto snap-x snap-start mx-10 md:mx-16 gap-7 scroll-smooth py-5">
        {products.map((product) => (

          <div class="flex-shrink-0 w-44 p-4 bg-white rounded-lg shadow-lg text-center" key={product.id}>
            <img src={product.url} alt="Gambar Buku" class="w-36 h-52 mx-auto mb-4"/>
            <div class="text-center mb-4">
              <h2 class="text-lg font-medium">{product.name}</h2>
              <p class="text-sm text-gray-500">{product.author}</p>
            </div>
            <div class="text-lg font-medium text-gray-700">{product.harga}</div>
          </div>

        ))}
        </div>
    </div>
  );
};

export default Buku_Terbaru;