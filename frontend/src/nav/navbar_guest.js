import { Navigate, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Dropdown from './dropdown';
import logoBook from '../assets/icons/icons8-book-65.png';
import Modal_Login from './modal_login';
import {
  Drawer,
  Typography,
  IconButton,
  List,
  Input,
  Button,
  ListItem,
  ListItemPrefix,
  Avatar,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

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
	const [isMobile, setIsMobile] = useState(false);

	const handleDropdownToggle = () => {
		setIsDropdownOpen(!isDropdownOpen)
	}
	useEffect(() => {
    const checkMobileScreen = () => {
      if (window.innerWidth <= 1023) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkMobileScreen();

    window.addEventListener("resize", checkMobileScreen);
    return () => window.removeEventListener("resize", checkMobileScreen);
  }, []);
  return (
    <div className="sticky top-0 border-b border-black border-opacity-25 z-50">
      <nav className="top-0 z-50 bg-white p-4 flex items-center justify-between">
        {/* Logo Bookstore */}
        <div className="flex items-center" onClick={() => navigate("/")}>
          <img src={logoBook} alt="Logo" className="w-10 h-10 mr-2" />
          <span className="font-bold text-xl">Bookstore</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 ml-16">
          {isMobile ? (
            <input
              type="text"
              className="flex-grow-1 w-10/12 sm:hidden xs:hidden justify-center border border-gray-300 px-4 py-2 rounded-r-md"
              placeholder="Cari Buku ..."
            />
          ) : (
            <>
              <div className="flex flex-1 justify-center">
                <Dropdown />
                <input
                  type="text"
                  className="flex-grow-1 w-9/12 border border-gray-300 px-4 py-2 rounded-r-md"
                  placeholder="Cari Buku ..."
                />
              </div>
            </>
          )}
        </div>

        {/* Perkumpulan */}
        <div className="flex items-center self-center">
          <button
            className="bg-dark-cream text-white py-2 px-4 rounded-lg hover:bg-green-600" // onClick={handleOpenModal}
            onClick={() => navigate("/login")}
          >
            {" "}
            Login
          </button>

          <Modal_Login isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
      </nav>
    </div>
  );
};

export default Bar_Guest;