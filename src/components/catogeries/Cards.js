import React from "react";
import skincare from "../../images/image8.png";
import suncare from "../../images/image6.png";
import fragrances from "../../images/image9.png";
import beardgrooming from "../../images/image10.png";

export const Cards = () => {
  let catogeries = [
    { imageUrl: skincare, cardTitle: "SKINCARE" },
    { imageUrl: suncare, cardTitle: "SUNCARE" },
    { imageUrl: fragrances, cardTitle: "FRAGRANCES" },
    { imageUrl: beardgrooming, cardTitle: "BEARDGROOMING" },
  ];
  return (
    <div className="flex">
      {catogeries.map((data) => (
        <div className="relative mr-5 h-[472px] w-[330px]">
          <img className="absolute" src={data.imageUrl} alt="cards" />
          <button className="absolute bg-[#f6f6f6] font-bold bottom-3 opacity-80 left-16 px-12 py-4">
            {data.cardTitle}
          </button>
        </div>
      ))}
    </div>
  );
};
