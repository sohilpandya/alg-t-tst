const Papa = require("papaparse");
const fs = require("fs");

// pasre the csv data using papaparse
const restaurantInfoCSV = fs.readFileSync(
  __dirname + "/../dataset/restaurants_info.csv",
  "utf8"
);
const parsedCSV = Papa.parse(restaurantInfoCSV, {
  header: true,
  dynamicTyping: true
});

// read the data from restaurant list and then match it to the parsed CSV file.
fs.readFile(
  __dirname + "/../dataset/restaurants_list.json",
  "utf8",
  (error, restaurantList) => {
    if (error) {
      throw new Error("error reading restaurants_list json file");
    }

    const parsedRestaurantList = JSON.parse(restaurantList);
    const combinedData = parsedRestaurantList.map(restaurant => {
      const filteredRestaurant = parsedCSV.data.filter(restaurantInfo => {
        return restaurantInfo.objectID === restaurant.objectID;
      });

      return Object.assign({}, filteredRestaurant[0], restaurant);
    });

    fs.writeFile(
      "./dataset/combinedData.json",
      JSON.stringify(combinedData),
      "utf8",
      error => {
        if (error) {
          throw new Error(
            "error creating new json file which contains combined the data"
          );
        } else {
          console.error("Data has been combined! :tada:");
        }
      }
    );
  }
);
