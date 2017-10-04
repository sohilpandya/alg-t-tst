import React from "react";

const Restaurants = ({ numRestaurants, restaurants, processingTime }) => {
  const results = restaurants.map((restaurant, i) => {
    return (
      <div>
        <h3> {restaurant.name} </h3>
        <p> rating {restaurant.stars_count} </p>
        <p> {restaurant.reviews_count} reviews</p>
        <p> {restaurant.food_type} cuisine</p>
        <p> {restaurant.neighborhood} </p>
        <p> {restaurant.price_range}</p>
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
