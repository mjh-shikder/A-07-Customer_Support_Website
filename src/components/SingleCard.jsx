import calender from "./../assets/calendar-line.png";

const SingleCard = ({ card, handleClick,  handleClickedCard }) => {

  
  
  

  return (
    <div onClick={() => { handleClick(card); handleClickedCard(card) }}  className="bg-white px-4 py-3 rounded-lg shadow-md cursor-pointer ">
      <div className="flex justify-between items-center ">
        <div className="flex  ">
          <h2 className="title2 mb-4">{card.title}</h2>
        </div>
        <div
          className={` rounded-full flex items-center gap-2 px-3 ${
            card.status == "Open" ? "bg-green-300" : "bg-yellow-200"
          }`}
        >
          <div
            className={`w-3 h-3 rounded-full  ${
              card.status == "Open" ? "bg-gradient-to-b from-bg-green-500 to-green-600" : "bg-gradient-to-b from-bg-yellow-400 to-yellow-600 "
            }`}
          ></div>
          <p
            className={`font-medium ${
              card.status == "Open" ? "text-green-800" : "text-yellow-800"
            }`}
          >
            {card.status}
          </p>
        </div>
      </div>
      <p className="text mb-4">{card.description}</p>

      <div className="flex justify-between  ">
        <div className=" flex items-center md:gap-4 gap-2">
          <p className="text-xs md:text-base text-gray-600 ">#0{card.id}</p>
          <p
            className={` text-xs md:text-base  ${
              card.priority == "High" ? "!text-red-500": card.priority == "Medium" ? "!text-yellow-500": "text-green-600"
            } `}
          >
            {card.priority.toUpperCase()} PRIORITY
          </p>
        </div>
        <div className=" flex md:gap-4 gap-2 items-center ">
          <p className="text">{card.customer}</p>
          <div className="flex items-center gap-1.5">
            <img className="w-5 h-5" src={calender} alt="" />
            <p className="text ">{card.createdAt}</p>
          </div>
        </div>
      </div>
      
    </div>

    
  );
};

export default SingleCard;
