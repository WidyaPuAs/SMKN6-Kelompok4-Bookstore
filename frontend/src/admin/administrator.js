import Bar from "../nav/navbar";
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import ListBook from "./ListBook";
import AddBuku from "./AddBook";
import EditBuku from "./EditBook";

const Administrator = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['List Buku', 'Tambah Buku', 'Edit Buku'];
    const navigate = useNavigate()
  
    return (
      <div className="bg">
        <Bar />
        <div className="max-w-6xl mx-auto ">
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
                {tab === 'List Buku' &&
                    <ListBook />
                }
                {tab === 'Tambah Buku' &&
                    <AddBuku />
                }
                {tab === 'Edit Buku' &&
                    <EditBuku />
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Administrator;
