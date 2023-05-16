import React, { useState } from 'react';
import '../../../src/App.css';
import '../../../src/index.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-stone-400"
        onClick={toggleDropdown}
      >
        <span>All categories</span>
        <svg
          className={`${
            isOpen ? 'transform rotate-180' : ''
          } w-5 h-5 ml-2 -mr-1`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute z-10 w-44 py-1 mt-1 bg-gray-100 rounded-md shadow-lg`}
      >
        <button
          className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
          role="menuitem"
          onClick={toggleDropdown}
        >
          Fantasy
        </button>
        <button
          className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
          role="menuitem"
          onClick={toggleDropdown}
        >
          Horror
        </button>
        <button
          className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
          role="menuitem"
          onClick={toggleDropdown}
        >
          Adult
        </button>
        <button
          className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
          role="menuitem"
          onClick={toggleDropdown}
        >
          Fiksi
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
