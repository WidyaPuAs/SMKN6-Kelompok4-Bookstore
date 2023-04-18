import '../App.css';
import '../index.css';
import Books from '../assets/books.png';

function Test2() {
    return (
      <div class="flex overflow-x-auto">
  <div class="flex-none w-auto">
    <img src="book1.jpg" alt="Book 1"/>
    <div class="text-center">
      <p class="font-medium">Nama Buku</p>
      <p class="text-sm text-gray-500">Pengarang Buku</p>
      <p class="font-medium">Harga Buku</p>
    </div>
  </div>
  <div class="flex-none w-auto">
    <img src="book2.jpg" alt="Book 2"/>
    <div class="text-center">
      <p class="font-medium">Nama Buku</p>
      <p class="text-sm text-gray-500">Pengarang Buku</p>
      <p class="font-medium">Harga Buku</p>
    </div>
  </div>
</div>

    )
};

export default Test2;

