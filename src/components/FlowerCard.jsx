import React from "react";

const FlowerCard = ({card}) => {
  return (
    <div className="h-full">
<div className={`h-full rounded-lg ${card.bgCardColor}`}>
  <h1>{card.title}</h1>
</div>
    </div>
  );
};

export default FlowerCard;
