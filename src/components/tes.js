import '../App.css';
import '../index.css';
import { useState } from 'react';

const Test = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  return (
    <div className="bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`${
                  activeTab === index
                    ? 'border-b-2 border-blue-500'
                    : 'border-b border-transparent'
                } text-gray-500 py-4 px-6 hover:text-blue-500 focus:outline-none`}
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
