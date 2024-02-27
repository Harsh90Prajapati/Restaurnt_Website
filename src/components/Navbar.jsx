import { useState } from "react";

import Logo from "../assets/logo.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setClose(!close);
  };

  return (
    <nav>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={Logo} alt="logo" className="h-14 " />
          <button
            onClick={handleOpen}
            disabled={close}
            type="button"
            className=" relative inline-flex items-center sm:hidden justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            {open ? (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        <ul className="sm:flex justify-center items-center gap-10 font-thin hidden ">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Menu</li>
          </a>
          <a href="#">
            <li>Reservation</li>
          </a>
          <a href="#">
            <li>About Us</li>
          </a>
          <a href="#">
            <li>Contact Us</li>
          </a>
        </ul>
        <div>login</div>
      </div>

      <div className="w-full sm:hidden ">
        <div
          className={
            !open ? "hidden" : "bg-white space-y-1 mt-4 px-2 pb-3 pt-2 rounded"
          }
        >
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Menu
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Reservation
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
