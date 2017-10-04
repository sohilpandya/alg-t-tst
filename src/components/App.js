import React, { Component } from 'react';
import '../style/app.css';
import Search from './Search';
import Filters from './Filters';
import Restaurants from './Restaurants';
import algoliaSearch from 'algoliasearch';
import helper from 'algoliasearch-helper';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: {
        value: ''
      },
      filter: {
        cuisine: '',
        rating: 0
      },
      restaurants: {
        numRestaurants: 0,
        data: []
      }
    };
  }



  handleSearchInput = (value) => {
    this.setState({
      ...this.state,
      search: {
        value: value
      }
    });
  }

  render() {

    console.log(this.state.search.value);
    console.log(this.state);

    return (
      <div className="app-container">
        <p> hello!</p>
        <Search
          inputValue={this.state.search.value}
          handleSearchInput={this.handleSearchInput}
        />
        <div>
          <Filters
            cuisine={this.state.filter.cuisine}
            rating={this.state.filter.rating}
          />
          <Restaurants
            numRestaurants={this.state.restaurants.numRestaurants}
            restaurants={this.state.restaurants.data}
          />
        </div>

      </div>
    );
  }
}

export default App;
