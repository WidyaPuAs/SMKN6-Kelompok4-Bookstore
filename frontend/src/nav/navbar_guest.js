import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Dropdown from './dropdown';
import logoBook from '../assets/icons/icons8-book-65.png';
import Modal_Login from './modal_login';

function Bar_Guest() {
	const navigate = useNavigate()
	const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
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
			<div className='flex-1 ml-16'>
				<button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100" type="button">All categories <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
				<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
					<ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
					<li>
						<button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
					</li>
					<li>
						<button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
					</li>
					<li>
						<button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
					</li>
					<li>
						<button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
					</li>
					</ul>
				</div>
				{/* <Dropdown/> */}
    			<input type='text' className='w-10/12 border border-gray-300 px-4 py-2 rounded-r-md' placeholder='Cari Buku ...'/>
  			</div>

			{/* Perkumpulan */}
			<div className='flex items-center self-center'>		
			<button className="bg-dark-cream text-white py-2 px-4 rounded-lg hover:bg-green-600" // onClick={handleOpenModal}
				onClick={() => navigate('/login')}> Login
			</button>
			
			<Modal_Login isOpen={isModalOpen} onClose={handleCloseModal} />
			</div>
					

				</nav>
	</div>
    
  );
};

export default Bar_Guest;