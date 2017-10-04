import React from "react";

const Restaurants = ({ numRestaurants, restaurants, processingTime }) => {
  const results = restaurants.map((restaurant, i) => {
    return (
      <div>
        <h3> {restaurant.name} </h3>
        <p> rating {restaurant.rating} </p>
        <p> {restaurant.review} reviews</p>
        <p> {restaurant.type} reviews</p>
        <p> {restaurant.address} </p>
        <p> {restaurant.range}</p>
      </div>
    );
  });
  return (
    <div>
      {numRestaurants > 0 &&
        `${numRestaurants} results found in ${(processingTime / 1000).toFixed(
          3
        )} seconds`}
      {numRestaurants > 0 && results}
      <p>Restaurant</p>
    </div>
  );
};

export default Restaurants;
