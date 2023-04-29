import '../../../src/index.css';
import '../../../src/App.css';
import Bar from '../navbar/navbar';

const Halaman_Admin = () => {
    return (
      <div>
        <Bar />
        <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">Admin Bookstore</h1>
      <form action="" method="POST">
        <div class="mb-4">
          <label for="title" class="block font-bold mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter book title"
            class="border rounded py-2 px-3 w-full"
          />
        </div>
        <div class="mb-4">
          <label for="author" class="block font-bold mb-2">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Enter book author"
            class="border rounded py-2 px-3 w-full"
          />
        </div>
        <div class="mb-4">
          <label for="description" class="block font-bold mb-2"
            >Description</label
          >
          <textarea
            id="description"
            name="description"
            placeholder="Enter book description"
            class="border rounded py-2 px-3 w-full"
          ></textarea>
        </div>
        <div class="mb-4">
          <label for="price" class="block font-bold mb-2">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter book price"
            class="border rounded py-2 px-3 w-full"
          />
        </div>
        <div>
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>

      </div>
        
        
    )
}

export default Halaman_Admin;