import Bar from '../nav/navbar';
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddBuku = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState("");
  const [harga, setHarga] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("author", author);
    formData.append("harga", harga);
    try {
      await axios.post("http://localhost:8000/products", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      // navigate("/admin");
      window.location.reload();
      toast.success("Berhasil Menambah Product");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div>
      {/* <Bar /> */}
      <div class="container mx-auto p-4">
        <div class="bg-white rounded-lg shadow-md p-6">
            <h1 class="text-2xl font-semibold mb-4">Tambah Buku Baru</h1>
            <form onSubmit={saveProduct}>
                <div class="mb-4">
                    <label for="nama_buku" class="block text-sm font-medium text-gray-700">Nama Buku</label>
                    <input type="text" id="nama_buku" value={title} onChange={(e) => setTitle(e.target.value)} name="nama_buku" class="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-blue-200"/>
                </div>
                <div class="mb-4">
                    <label for="author" class="block text-sm font-medium text-gray-700">Penulis</label>
                    <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} name="author" class="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-blue-200"/>
                </div>
                <div class="mb-4">
                    <label for="harga" class="block text-sm font-medium text-gray-700">Harga</label>
                    <input type="text" id="harga" value={harga} onChange={(e) => setHarga(e.target.value)} name="harga" class="mt-1 p-2 border rounded-md w-full focus:ring focus:ring-blue-200"/>
                </div>
                <div class="mb-4">
                    <label for="harga" class="block text-sm font-medium text-gray-700">Image</label>
                    <input type="file" id="file" onChange={loadImage} name="file" class="p-2 border rounded-md block w-full text-sm text-gray-900 border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"></input>
                </div>

                {preview ? (
                  <figure className="list-image-none">
                    <img src={preview} alt="Preview Image" class="object-scale-down h-48 w-96 -ml-28" />
                  </figure>
                ) : (
                  ""
                )}

                <div class="text-center">
                    <button type="submit" class="mt-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">Tambah Buku</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default AddBuku;