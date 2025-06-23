import React from "react";

const FlowerCard = ({ card, selectedCard, idx}) => {
  return (
   <>
{
  idx === selectedCard && (
    <div className="flex justify-between absolute w-screen h-screen top-0 left-0">
  <div className="flex p-10 flex-col justify-around">
    <img className="w-40 rotate-12" src={card.bgImg} alt="" />
    <img className="w-52 rotate-45" src={card.bgImg} alt="" />
  </div>
   <div  className="flex flex-col justify-around">
    <img className="w-32 rotate-[-90deg]" src={card.bgImg} alt="" />
    <img className="w-40 rotate-90" src={card.bgImg} alt="" />
  </div>
</div>
  )
}

    <div className="relative h-full">
      <div
        className={` h-full rounded-lg ${card.bgCardColor} z-10 relative flex justify-center items-center`}
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

      <img src={card.img}
      className={`${ 
        selectedCard === idx ? "opacity-100" : "opacity-0"} z-1 flower-img w-54 absolute top-0 mx-auto`}
      alt="" />
    </div>
   </>
  );
};

export default FlowerCard;
