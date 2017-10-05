import React from "react";
import Rating from "./Rating";
const Filters = ({ cuisine, rating, handleCuisineSelection }) => {
  let cuisineList = [
    "Italian",
    "American",
    "Californian",
    "French",
    "Seafood",
    "Japanese",
    "Indian"
  ].map((type, i) => {
    // console.log(type, "===", cuisine);
    return (
      <div
        className={`flex justify-between pv1 ph2 br1 ${type === cuisine
          ? "bg-custom-blue"
          : ""}`}
        onClick={() => handleCuisineSelection(type)}
      >
        <span className="f6 cuisine__name">{type}</span>
        <span className="f6 cuisine__total"> # </span>
      </div>
    );
  });

  let ratings = [0, 1, 2, 3, 4, 5].map((star, i) => {
    return (
      <div className="flex flex-column">
        <Rating star={star} />
      </div>
    );
  });

  return (
    <div className="mw5 flex-auto dib pa3">
      <h3 className="f5 pb2">Cuisine/Food Type</h3>
      {cuisineList}
      <h3 className="f5 pv2">Rating</h3>
      {ratings}
    </div>
  );
};

export default Filters;
