import React from "react";

const Restaurants = ({ numRestaurants, restaurants, processingTime }) => {
  const results = restaurants.map((restaurant, i) => {
    console.log(restaurant);
    return (
      <div key={i} className="restaurant flex w-100 pa3">
        <div>
          <img src={restaurant.image_url} className="w3p5 br1" />
        </div>
        <div className="flex flex-column w-100 pl3">
          <h3 className="f-header pa1"> {restaurant.name} </h3>
          <span className="flex pa1">
            <p> rating {restaurant.stars_count} </p>
            <p className="f-body custom-gray">
              {" "}
              ({restaurant.reviews_count} reviews)
            </p>
          </span>
          <span className="flex pa1">
            <p className="f-body custom-gray pr1">
              {restaurant.food_type} cuisine
            </p>
            <p className="f-body custom-gray">|</p>
            <p className="f-body custom-gray ph1">
              {" "}
              {restaurant.neighborhood}{" "}
            </p>
            <p className="f-body custom-gray"> | </p>
            <p className="f-body custom-gray pl1"> {restaurant.price_range}</p>
          </span>
        </div>
      </div>
    );
  });
  return (
    <div className="mw7 flex-auto dib pa3 vh-50 overflow-auto">
      {numRestaurants > 0 && (
        <div>
          <span className="f-sub-header">{numRestaurants} results found </span>
          <span className="f-body">
            {(processingTime / 1000).toFixed(3)} seconds
          </span>
        </div>
      )}
      {numRestaurants > 0 && results}
    </div>
  );
};

export default Restaurants;
