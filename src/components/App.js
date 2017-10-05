import React, { Component } from "react";
import "../style/app.css";
import Search from "./Search";
import Filters from "./Filters";
import Restaurants from "./Restaurants";
import algoliaSearch from "algoliasearch";
import algoliaSearchHelper from "algoliasearch-helper";

const client = algoliaSearch("L0UMXPISE0", "4da2771aabb89fcf0579bb0370e10390");
const index = client.initIndex("restaurants");
let helper;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {
        value: ""
      },
      filter: {
        data: [],
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

  // updates state for search input
  handleSearchInput = value => {
    this.searchAlgolia(value);
    this.setState({
      ...this.state,
      search: {
        value: value
      }
    });
  };

  // updates state for cuisine filter option
  handleCuisineSelection = value => {
    let newFilterState = Object.assign(
      {},
      { rating: this.state.filter.rating },
      { cuisine: value }
    );
    this.setState({
      ...this.state,
      filter: newFilterState
    });
    this.searchAlgolia(this.state.search.value, value);
  };

  // updates state with list of restaurants via algolia search
  searchAlgolia = (value, cuisine) => {
    helper = algoliaSearchHelper(client, "restaurants", {
      facets: ["food_type"]
    });
    helper.on("result", content => {
      let newFilterState = {};
      const newRestaurantState = Object.assign(
        {},
        {
          numRestaurants: content.nbHits,
          data: content.hits,
          processingTime: content.processingTimeMS
        }
      );
      if (content.facets.length !== 0) {
        newFilterState = Object.assign(
          {},
          { ...this.state.filter },
          {
            data: content.facets[0].data
          }
        );
      }
      this.setState({
        ...this.state,
        restaurants: newRestaurantState,
        filter: newFilterState
      });
    });

    if (cuisine) {
      helper.toggleFacetRefinement("food_type", cuisine);
    }
    helper.setQuery(value).search();
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
            data={this.state.filter.data}
            cuisine={this.state.filter.cuisine}
            rating={this.state.filter.rating}
            handleCuisineSelection={this.handleCuisineSelection}
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
