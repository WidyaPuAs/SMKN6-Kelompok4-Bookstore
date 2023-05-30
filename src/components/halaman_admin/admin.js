import '../../../src/index.css';
import '../../../src/App.css';
import Bar from '../navbar/navbar';
import { useState } from 'react';
import axios from 'axios';
import { navigate, useNavigate } from 'react-router-dom';

const Halaman_Admin = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:80/api/book_product/save', inputs).then(function(response){
      console.log(response.data);
      // navigate('/admin');
    });

  }
    return (
      <div>
        <Bar />
        <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold mb-4">Admin Bookstore</h1>
        <form action="" onSubmit={handleSubmit}>
          <div class="mb-4">
            <label for="judul_buku" class="block font-bold mb-2">Judul Buku</label>
            <input
              onChange={handleChange}
              type="text"
              id="judul_buku"
              name="judul_buku"
              placeholder="Masusukkan Judul Buku ..."
              class="border rounded py-2 px-3 w-full"/>
          </div>
          <div class="mb-4">
            <label for="author" class="block font-bold mb-2">Author</label>
            <input
              onChange={handleChange}
              type="text"
              id="author"
              name="author"
              placeholder="Masukkan Penulis Buku ..."
              class="border rounded py-2 px-3 w-full"/>
          </div>
          <div class="mb-4">
            <label for="sinopsis_buku" class="block font-bold mb-2" >Sinopsis Buku </label>
            <textarea
              onChange={handleChange}
              id="sinopsis_buku"
              name="sinopsis_buku"
              placeholder="Masukkan Sinopsis Singkat Buku ..."
              class="border rounded py-2 px-3 w-full"
            ></textarea>
          </div>
          <div class="mb-8">
            <label for="harga_buku" class="block font-bold mb-2">Harga Buku</label>
            <input
              onChange={handleChange}
              type="number"
              id="harga_buku"
              name="harga_buku"
              placeholder="Masukkan Harga Buku (Rp) ..."
              class="border rounded py-2 px-3 w-full"/>
          </div>
          <div class="mb-8">
            <label for="stok_buku" class="block font-bold mb-2">Stok Buku</label>
            <input
              onChange={handleChange}
              type="number"
              id="stok_buku"
              name="stok_buku"
              placeholder="Masukkan Stok Buku ..."
              class="border rounded py-2 px-3 w-full"/>
          </div>
          <div>
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Add Book </button>
          </div>
        </form>
        </div>

      </div>
    )
}

export default Halaman_Admin;