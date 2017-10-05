import React from "react";

const Filters = ({ cuisine, rating }) => {
  let cuisineList = [
    "Italian",
    "American",
    "Californian",
    "French",
    "Seafood",
    "Japanese",
    "Indian"
  ].map((type, i) => {
    return (
      <div className="flex justify-between pv1 ph2 bg-custom-blue br1">
        <span className="f-body cuisine__name"> {type} </span>
        <span className="f-body cuisine__total"> # </span>
      </div>
    );
  });

  let ratings = [0, 1, 2, 3, 4, 5].map((star, i) => {
    return <p>{star}</p>;
  });

  return (
    <div className="mw5 flex-auto dib pa3">
      <h3 className="f-sub-header pb2">Cuisine/Food Type</h3>
      {cuisineList}
      <h3>Rating</h3>
      {ratings}
      <h3 className="f-sub-header">Payment Options</h3>
    </div>
  );
};

export default Filters;
