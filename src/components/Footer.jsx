import React from "react";
import Container from "./Container";
import ficon from "./../assets/f.png";
import inIcon from "./../assets/in.png";
import xIcon from "./../assets/xicon.png";
import MIcon from "./../assets/mail.png";

const Footer = () => {
  return (
    <footer className="bg-black ">
      <Container>
        <div className="flex justify-between pt-20 flex-col md:flex-row md:px-0 px-3 text-white ">
          <div className="max-w-2xs mb-5">
            <h1 className="font-bold text-2xl mb-4 ">CS-Ticket System</h1>
            <p className="text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="space-y-3 mb-5">
            <h2 className="font-semibold text-lg mb-4 ">Company</h2>
            <h3 className=" text-gray-300 ">About Us</h3>
            <h3 className=" text-gray-400 ">Our Mission</h3>
            <h3 className=" text-gray-400 ">Contact Saled</h3>
          </div>
          <div className="space-y-3 mb-5">
            <h2 className="font-semibold text-lg mb-4 ">Services</h2>
            <h3 className=" text-gray-400 ">Products & Services</h3>
            <h3 className=" text-gray-400 ">Customer Stories</h3>
            <h3 className=" text-gray-400 ">Download Apps</h3>
          </div>
          <div className="space-y-3 mb-5">
            <h2 className="font-semibold text-lg mb-4 ">Information</h2>
            <h3 className=" text-gray-400 ">Privacy Policy</h3>
            <h3 className=" text-gray-400 ">Terms & Conditions</h3>
            <h3 className=" text-gray-400 ">Join Us</h3>
          </div>
          <div  className="space-y-3 ">
            <h2 className="font-semibold text-lg mb-4 ">Social Links</h2>
            <div className="flex gap-3 items-center ">
              <img className="w-[15px] h-[15px] " src={xIcon} alt="" />
              <h3>@CS-Ticket System</h3>
                      </div>
            <div className="flex gap-3 items-center ">
              <img className="w-[15px] h-[15px] " src={inIcon} alt="" />
              <h3>@CS-Ticket System</h3>
                      </div>
            <div className="flex gap-3 items-center ">
              <img className="w-[15px] h-[15px] " src={ficon} alt="" />
              <h3>@CS-Ticket System</h3>
                      </div>
            <div className="flex gap-3 items-center ">
              <img className="w-[15px] h-[15px] " src={MIcon} alt="" />
              <h3>support@cst.com</h3>
                      </div>
                      

          </div>
        </div>
        <h3 className="text-center py-7 mt-5 text-gray-300 ">© 2025 CS — Ticket System. All rights reserved.</h3>
      </Container>
    </footer>
  );
};

export default Footer;
