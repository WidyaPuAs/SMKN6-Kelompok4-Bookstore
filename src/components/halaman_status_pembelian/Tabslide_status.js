import '../../../src/App.css';
import '../../../src/index.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Status = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['belum dibayar','sedang dikemas', 'telah dikirim', 'selesai', 'dibatalkan'];
    const navigate = useNavigate()
  
    return (
      <div className="bg">
        <div className="max-w-screen">
          <div className="border-0 rounded">
            <nav className="-mb-px flex">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`${
                    activeTab === index
                      ? 'border-b-2 border-dark-cream'
                      : 'border-b border-transparent'
                  } text-gray-500 py-4 px-6 hover:text-dark-cream focus:outline-none`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
          <div className="py-8">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`${
                  activeTab === index ? 'block' : 'hidden'
                }`}
              >
                {tab === 'belum dibayar' &&
                    <div className='container mx-auto -mt-2 flex'>
                        <span className='text-9xl font-playfair m-auto mt-28'>Yahh, kosong!</span>
                    </div>
                }
                {tab === 'Sedang dikemas' &&
                    <div className='container mx-5 -mt-2 flex'>
                        
                    </div>
                }
                {tab === 'telah dikirim' &&
                    <div className='container mx-5 -mt-2 flex'>
                        
                    </div>
                }
                {tab === 'selesai' &&
                    <div className='container mx-5 -mt-2 flex'>
                        
                    </div>
                }
                {tab === 'dibatalkan' &&
                    <div className='container mx-5 -mt-2 flex'>
                        
                    </div>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Status;

