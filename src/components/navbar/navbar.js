import '../../../src/App.css';
import '../../../src/index.css';
import logoBook from '../../assets/icons8-book-65.png';
import logoBasket from '../../assets/icons8-shopping-basket-90.png';
import logoMessage from '../../assets/icons8-secured-letter-90.png';
import logoAccount from '../../assets/icons8-male-user-100.png';



function Bar() {
  return (
	<div className='sticky top-0 border-b border-black border-opacity-25'>
		<nav className='top-0 z-50 bg-white p-4 flex items-center justify-between'>

			{/* Logo Bookstore */}
			<div className='flex items-center'>
    			<img src={logoBook} alt='Logo' className='w-10 h-10 mr-2'/>
    			<span className='font-bold text-xl'>Bookstore</span>
  			</div>

			{/* Search Bar */}
			<div className='flex-1 mx-4'>
    			<input type='text' className='w-full border border-gray-300 px-4 py-2 rounded-md' placeholder='Cari Buku ...'/>
  			</div>

			{/* Perkumpulan */}
			<div className='flex items-center'>
				<a href='#' className='p-2'>
				<img src={logoBasket} className='h-6 w-6' />
    			</a>
				<a href='#' className='p-2'>
				<img src={logoMessage} className='h-6 w-6' />
    			</a>
				<a href='../profile/profil.js' className='p-2'>
				<img src={logoAccount} className='h-6 w-6' />
    			</a>
			</div>

		</nav>
	</div>
    
  );
};

export default Bar;