import '../../../src/App.css';
import '../../../src/index.css';
import { useState } from 'react';

const Test = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Biodata', 'Pemesanan', 'Pengaturan'];
  
    return (
      <div className="bg">
        <div className="max-w-6xl mx-auto ">
          <div className="border-b-2 border-gray-200">
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
                <h2>{tab}</h2>
                <p>Content for {tab}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Test;