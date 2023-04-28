import '../../../src/App.css';
import '../../../src/index.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Dropdown from '../dropdown_kategori/dropdown';
import logoBook from '../../assets/icons8-book-65.png';
import logoBasket from '../../assets/icons8-shopping-basket-90.png';
import logoMessage from '../../assets/icons8-secured-letter-90.png';
import logoAccount from '../../assets/icons8-male-user-100.png';
import Menu from '../../assets/menu.png'



function Bar() {
	const navigate = useNavigate()
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)

	const handleDropdownToggle = () => {
		setIsDropdownOpen(!isDropdownOpen)
	}
  return (
	<div className='sticky top-0 border-b border-black border-opacity-25 z-50'>
		<nav className='top-0 z-50 bg-white p-4 flex items-center justify-between'>

			{/* Logo Bookstore */}
			<div className='flex items-center' onClick={() => navigate('/')}>
    			<img src={logoBook} alt='Logo' className='w-10 h-10 mr-2'/>
    			<span className='font-bold text-xl'>Bookstore</span>
  			</div>

			{/* Search Bar */}
			<div className='flex-1 ml-10'>
				<button id="dropdown-button" data-dropdown-toggle="dropdown" onClick={handleDropdownToggle} class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100" type="button">All categories <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
				{isDropdownOpen && (
					<ul className="absolute z-10 bg-white text-sm py-2 w-auto rounded-lg shadow-lg grid grid-cols-3">
					<li><a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Horror</a></li>
					<li><a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Fiksi</a></li>
					<li><a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Fantasi</a></li>
					<li><a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Action</a></li>
					<li><a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Thriller</a></li>
					<li><a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Adult</a></li>
					<li><a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Comedy</a></li>
					<li><a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Romansa</a></li>
					<li><a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Slice of life</a></li>
				  </ul>
				)}
				
				{/* <Dropdown/> */}
    			<input type='text' className='w-10/12 border border-gray-300 px-4 py-2 rounded-r-md' placeholder='Cari Buku ...'/>
  			</div>

			{/* Perkumpulan */}
			<div className='flex items-center'>
				<a onClick={() => navigate('/keranjang')} className='p-2 hidden sm:block'>
				<img src={logoBasket} className='h-6 w-6' />
    			</a>
				<a onClick={() => navigate('/chat')} className='p-2 hidden sm:block'>
				<img src={logoMessage} className='h-6 w-6' />
    			</a>
				<a onClick={() => navigate('/profile')} className='p-2 hidden sm:block'>
				<img src={logoAccount} className='h-6 w-6' />
    			</a>
				{/* <a>
				<img src={Menu} className='h-6 w-6 block sm:hidden' />
    			</a> */}
				<button className='relative justify-center items-center focus:outline-none focus:ring group block sm:hidden'>
					<img src={Menu} className='h-5 w-5' />
					<div className='absolute hidden group-focus:block top-full min-w-full w-screen bg-light-cream shadow-md mt-1 rounded'>
						<ul className='text-left border rounded'>
							<li className='px-4 py-1 hover:bg-bg_cream border-b'>Store</li>
							<li className='px-4 py-1 hover:bg-bg_cream border-b'>Store</li>
							<li className='px-4 py-1 hover:bg-bg_cream border-b'>Store</li>
						</ul>
					</div>
				</button>
			</div>

		</nav>
	</div>
    
  );
};

export default Bar;