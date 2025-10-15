import React from "react";

const Task = ({ clickedCard, handlClickComplete, removeCard, clicked}) => {
  //console.log(clickedCard);

    const handleRemove = (card) => {
       // const singleCard = clickedCard.map(card =>card)
        removeCard(card)
    }
    
  return (
    <div className="mb-10 ">
      <h1 className="title mb-3">Task Status</h1>
      {clickedCard.length === 0 ? (
        <div>
          <p className="text ">Select a ticket to add to Task Status</p>
        </div>
      ) : (
        <>
          {clickedCard.map((card, index) => (
            <div key={index} className="bg-white rounded-lg p-4 mb-3">
              <h2 className="font-semibold mb-3 text-lg text-gray-800">
                {card.title}{" "}
              </h2>

                  <button onClick={() => { handlClickComplete(card); handleRemove(card) }} className="btn bg-green-600 border-0 w-full ">
                Complete
              </button>
            </div>
          ))}{" "}
        </>
      )}
    </div>
  );
};

export default Task;
