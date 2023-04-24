import '../../../src/App.css';
import '../../../src/index.css';
import { Navigate, useNavigate } from 'react-router-dom';
import logoBook from '../../assets/icons8-book-65.png';
import logoBasket from '../../assets/icons8-shopping-basket-90.png';
import logoMessage from '../../assets/icons8-secured-letter-90.png';
import logoAccount from '../../assets/icons8-male-user-100.png';
import Menu from '../../assets/menu.png'



function Bar() {
	const navigate = useNavigate()
  return (
	<div className='sticky top-0 border-b border-black border-opacity-25 z-50'>
		<nav className='top-0 z-50 bg-white p-4 flex items-center justify-between'>

			{/* Logo Bookstore */}
			<div className='flex items-center' onClick={() => navigate('/')}>
    			<img src={logoBook} alt='Logo' className='w-10 h-10 mr-2'/>
    			<span className='font-bold text-xl'>Bookstore</span>
  			</div>

			{/* Search Bar */}
			<div className='flex-1 mx-4'>
    			<input type='text' className='w-full border border-gray-300 px-4 py-2 rounded-md' placeholder='Cari Buku ...'/>
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
				<button className='relative flex justify-center items-center focus:outline-none focus:ring group'>
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