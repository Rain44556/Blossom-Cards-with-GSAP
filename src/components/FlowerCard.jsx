import React from "react";

const FlowerCard = ({ card, selectedCard, idx}) => {
  return (
    <div className="relative h-full">
      <div
        className={` h-full rounded-lg ${card.bgCardColor} flex justify-center items-center`}
      >
        <img
          className="absolute top-5 left-5 w-6 h-6 rounded-full"
          src={card.icon}
          alt=""
        />
        <h1 className={`
        ${selectedCard === idx ? "rotate-0 text-6xl" : "text-lg rotate-90"} 
        ${card.textColor} font-bold transition-all ease-in-out duration-[2000ms]`}>
          {card.title}
        </h1>
      </div>
    </div>
  );
};

export default FlowerCard;
