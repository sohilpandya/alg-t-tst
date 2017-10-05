import React, { Component } from "react";
import "../style/app.css";
import Search from "./Search";
import Filters from "./Filters";
import Restaurants from "./Restaurants";
import algoliaSearch from "algoliasearch";
import helper from "algoliasearch-helper";

const client = algoliaSearch("L0UMXPISE0", "4da2771aabb89fcf0579bb0370e10390");
const index = client.initIndex("restaurants");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        value: ""
      },
      filter: {
        cuisine: "",
        rating: 0
      },
      restaurants: {
        numRestaurants: 0,
        data: [],
        processingTime: 0
      }
    };
  }

  handleSearchInput = value => {
    this.setState({
      ...this.state,
      search: {
        value: value
      }
    });
    this.searchAlgolia(value);
  };

  searchAlgolia = value => {
    index.search(value, (err, content) => {
      console.log(content);
      this.setState({
        ...this.state,
        restaurants: {
          numRestaurants: content.nbHits,
          data: content.hits,
          processingTime: content.processingTimeMS
        }
      });
    });
  };

  render() {
    return (
      <div className="app-container">
        <Search
          inputValue={this.state.search.value}
          handleSearchInput={this.handleSearchInput}
        />
        <div className="flex">
          <Filters
            cuisine={this.state.filter.cuisine}
            rating={this.state.filter.rating}
          />
          <Restaurants
            numRestaurants={this.state.restaurants.numRestaurants}
            restaurants={this.state.restaurants.data}
            processingTime={this.state.restaurants.processingTime}
          />
        </div>
      </div>
    );
  }
}

export default App;
