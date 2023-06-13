import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleKategoriClick = (kategori) => {
    navigate(`/kategori/${kategori}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-md"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>All categories</span>
        <svg
          className={`${
            isOpen ? "transform rotate-180" : ""
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
          isOpen ? "block" : "hidden"
        } absolute z-10 w-96 py-1 mt-1 bg-white rounded-md shadow-lg grid grid-cols-3 gap-2`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col">
          <button
            className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
            role="menuitem"
            onClick={() => {
              handleKategoriClick("fantasy");
              toggleDropdown();
            }}
          >
            Fantasy
          </button>
          <button
            className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
            role="menuitem"
            onClick={() => {
              handleKategoriClick("comedy");
              toggleDropdown();
            }}
          >
            Comedy
          </button>
          <button
            className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
            role="menuitem"
            onClick={() => {
              handleKategoriClick("action");
              toggleDropdown();
            }}
          >
            Action
          </button>
        </div>
        <div className="flex flex-col">
          <button
            className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
            role="menuitem"
            onClick={() => {
              handleKategoriClick("horror");
              toggleDropdown();
            }}
          >
            Horror
          </button>
          <button
            className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
            role="menuitem"
            onClick={() => {
              handleKategoriClick("romance");
              toggleDropdown();
            }}
          >
            Romance
          </button>
          <button
            className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
            role="menuitem"
            onClick={() => {
              handleKategoriClick("sliceoflife");
              toggleDropdown();
            }}
          >
            Slice of Life
          </button>
        </div>
        <div className="flex flex-col">
          <button
            className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
            role="menuitem"
            onClick={() => {
              handleKategoriClick("fiction");
              toggleDropdown();
            }}
          >
            Fiction
          </button>
          <button
            className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
            role="menuitem"
            onClick={() => {
              handleKategoriClick("adventure");
              toggleDropdown();
            }}
          >
            Adventure
          </button>
          <button
            className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900"
            role="menuitem"
            onClick={() => {
              handleKategoriClick("thriller");
              toggleDropdown();
            }}
          >
            Thriller
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
