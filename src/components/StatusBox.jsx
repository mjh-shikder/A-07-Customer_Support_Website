import React from 'react';
import linesImg from "./../assets/vector1.png";
import Container from './Container';

const StatuBox = ({ clicked, clickComplete }) => {

  
 
  
    return (
        <div>
        <Container>
          <div className="flex flex-col md:flex-row justify-between md:my-20 gap-5  overflow-hidden text-white  ">
            <div
              className="md:w-1/2 text-center flex flex-col justify-center h-60 rounded-xl  bg-gradient-to-r 
         from-[#642fe4] to-[#9d60ff] relative  "
            >
              <div className="flex justify-between items-center  ">
                <img src={linesImg} className=" " alt="" />
                <img className="scale-x-[-1]  " src={linesImg} alt="" />
              </div>
              <div className=" absolute w-full h-full top-16  ">
                <h3 className="text-xl mb-3">In-Progress</h3>
                <h1 className="text-6xl font-semibold  ">{ clicked.length }</h1> 
              </div>
            </div>

            <div
              className="md:w-1/2 text-center flex flex-col justify-center h-60 rounded-xl  bg-gradient-to-r 
         from-[#55d068] to-[#00827a] relative  "
            >
              <div className="flex justify-between items-center  ">
                <img src={linesImg} className=" " alt="" />
                <img className="scale-x-[-1]  " src={linesImg} alt="" />
              </div>
              <div className=" absolute w-full h-full top-16  ">
                <h3 className="text-xl mb-3">Resolved</h3>
                <h1 className="text-6xl font-semibold  ">{clickComplete.length} </h1>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default StatuBox;