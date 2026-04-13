import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="py-3 bg-transparent backdrop-blur-md sticky top-0 z-10 ">
      <Container>
        <div className="flex justify-between items-center px-2 md:px-0 ">
          <div>
            <h1 className="font-bold md:text-2xl text-gray-800 ">
              CS- Ticket System
            </h1>
          </div>
          <div className=" md:flex  items-center gap-7  ">
            <div className="dropdown dropdown-center md:hidden ">
              <div tabIndex={0} role="button" className="btn m-1  ">
                Menu
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box z-15 w-52 p-2 shadow-sm    "
              >
                <li>
                  <h3 className="text-gray-800 font-bold ">Home</h3>
                </li>
                <li>
                  <h3 className="text-gray-800 font-bold">FAQ</h3>
                </li>
                <li>
                  <h3 className="text-gray-800 font-bold">Changelog</h3>
                </li>
                <li>
                  <h3 className="text-gray-800 font-bold">Blog</h3>
                </li>
                <li>
                  <h3 className="text-gray-800 font-bold">Download</h3>
                </li>
                <li>
                  <h3 className="text-gray-800 font-bold">Contact</h3>
                </li>
              </ul>
            </div>
            <div className="md:flex items-center gap-5 hidden font-bold ">
              <h3 className="text-gray-700">Home</h3>
              <h3 className="text-gray-700">FAQ</h3>
              <h3 className="text-gray-700">Changelog</h3>
              <h3 className="text-gray-700">Blog</h3>
              <h3 className="text-gray-700">Download</h3>
              <h3 className="text-gray-700">Contact</h3>
            </div>
            <button className="btn border-0 bg-gradient-to-l from-[#9f62f2] to-[#703ae7] px-5 ">
              + New Ticket
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
