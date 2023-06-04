import Bar from '../nav/navbar';
import { useState } from 'react';
import { navigate, useNavigate } from 'react-router-dom';

const Halaman_Admin = () => {
  const navigate = useNavigate();
  
    return (
      <div>
        <Bar />
        <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold mb-4">Admin Bookstore</h1>
        <form action="">
          <div class="mb-4">
            <label for="judul_buku" class="block font-bold mb-2">Judul Buku</label>
            <input
              type="text"
              id="judul_buku"
              name="judul_buku"
              placeholder="Masusukkan Judul Buku ..."
              class="border rounded py-2 px-3 w-full"/>
          </div>
          <div class="mb-4">
            <label for="author" class="block font-bold mb-2">Author</label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Masukkan Penulis Buku ..."
              class="border rounded py-2 px-3 w-full"/>
          </div>
          <div class="mb-4">
            <label for="sinopsis_buku" class="block font-bold mb-2" >Sinopsis Buku </label>
            <textarea
              id="sinopsis_buku"
              name="sinopsis_buku"
              placeholder="Masukkan Sinopsis Singkat Buku ..."
              class="border rounded py-2 px-3 w-full"
            ></textarea>
          </div>
          <div class="mb-8">
            <label for="harga_buku" class="block font-bold mb-2">Harga Buku</label>
            <input
              type="number"
              id="harga_buku"
              name="harga_buku"
              placeholder="Masukkan Harga Buku (Rp) ..."
              class="border rounded py-2 px-3 w-full"/>
          </div>
          <div class="mb-8">
            <label for="stok_buku" class="block font-bold mb-2">Stok Buku</label>
            <input
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