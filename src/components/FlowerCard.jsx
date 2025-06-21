import React from "react";

const FlowerCard = ({ card }) => {
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
        <h1 className={`${card.textColor} text-lg font-bold rotate-90`}>
          {card.title}
        </h1>
      </div>
    </div>
  );
};

export default FlowerCard;
