import '../App.css'
import '../index.css'
import './list.js'


function Tesst() {
  return (
	  <div className='App bg-slate-500'>
        <h1 className='px-3 py-3'>My Contact List</h1>
        
        <form className='px-3 py-4'>
          <div className='form-group'>
            <label htmlFor='' className='mr-5'>Name</label>
            <input type='text' className='form-control' name='name'/>
          </div>
          <div className='form-group mt-3'>
            <label htmlFor='' className='mr-5'>No Telp</label>
            <input type='text' className='form-control' name='telp'/>
          </div>
          <div>
            <button type='submit' className='btn bg-slate-300 w-100 mt-3'>
              Save
            </button>
          </div>

          {/* <List /> */}
        </form>
    </div>
  );
};

export default Tesst;