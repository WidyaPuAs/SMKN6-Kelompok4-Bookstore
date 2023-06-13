import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logoBook from "../assets/icons/icons8-book-65.png";
import AccountIcon from "../assets/icons/user.png";
import EmailIcon from "../assets/icons/email.png";
import BasketIcon from "../assets/icons/basket.png";
import MenuIcon from "../assets/icons/menu.png";
import Dropdown from "./dropdown";
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

function Bar() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [openRight, setOpenRight] = React.useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

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
        <div className="flex items-center" onClick={() => navigate("/log")}>
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
        <div className="flex items-center gap-2">
          {!isMobile && (
            <>
              <a onClick={() => navigate("/keranjang")} className="p-2">
                <img src={BasketIcon} className="h-6 w-6" alt="Keranjang" />
              </a>
              <a onClick={() => navigate("/chat")} className="p-2">
                <img src={EmailIcon} className="h-6 w-6" alt="Chat" />
              </a>
              <a onClick={() => navigate("/profile")} className="p-2">
                <img src={AccountIcon} className="h-6 w-6" alt="Profil" />
              </a>
            </>
          )}
          {isMobile && (
            <>
              <button
                className="relative justify-center items-center focus:outline-none focus:ring"
                onClick={openDrawerRight}
              >
                <img src={MenuIcon} alt="" className="h-5 w-5" />
              </button>
              <Drawer
                anchor="right"
                open={openRight}
                onClose={closeDrawerRight}
                className="p-4"
              >
                <div className="mb-1 flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    Menu
                  </Typography>
                  <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={closeDrawerRight}
                  >
                    <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                  </IconButton>
                </div>
                <div>
                  <List>
                    <ListItem>
                      <ListItemPrefix>
                        <Avatar
                          variant="circular"
                          alt="candice"
                          size="sm"
                          src={BasketIcon}
                        />
                      </ListItemPrefix>
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          Keranjang
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          Checkout segera!
                        </Typography>
                      </div>
                    </ListItem>
                    <ListItem>
                      <ListItemPrefix>
                        <Avatar
                          variant="circular"
                          alt="alexander"
                          size="sm"
                          src={EmailIcon}
                        />
                      </ListItemPrefix>
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          Chat
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          Bertanya tentang produk
                        </Typography>
                      </div>
                    </ListItem>
                    <ListItem>
                      <ListItemPrefix>
                        <Avatar
                          variant="circular"
                          alt="emma"
                          size="sm"
                          src={AccountIcon}
                        />
                      </ListItemPrefix>
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          Account Profile
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          Informasi mengenai anda
                        </Typography>
                      </div>
                    </ListItem>
                  </List>
                </div>
              </Drawer>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Bar;
