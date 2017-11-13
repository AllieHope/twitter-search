import React, { Component } from 'react';
import axios from 'axios';
import logo from './twitter_logo.svg';
import './App.css';

const APITOKEN = '';

const SearchBar = ({ search }) => {
  // Input tracker
  let input;

  return (
    <form
      className="form-group search-bar-container"
      onSubmit={(e) => {
        e.preventDefault();
        search(input.value);
        input.value = '';
      }}
    >
      <input
        className="form-control"
        placeholder="Search for a term on Twitter"
        ref={(node) => {
          input = node;
        }}
      />
      <button
        className="btn btn-primary"
        onClick={() => {
        search(input.value);
        input.value = '';
      }}
      >
        search
      </button>
    </form>
  );
};

const Result = ({ result }) => {
  const link = `https://twitter.com/statuses/${result.id_str}`;
  return (<a href={link} target="_blank" className="list-group-item">{result.text}</a>);
};

const ResultList = ({ results }) => {
  // Map through the search results
  const resultNode = results.map(result => (<Result result={result} key={result.id} />));
  return (<div className="list-group">{resultNode}</div>);
};

// Container component
class SearchApp extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      searchResults: [],
    };
    this.apiBaseUrl = 'https://api.twitter.com/1.1/search/tweets.json';
  }

  // Search handler for Twitter API
  searchTwitter(val) {
    const encodedValue = encodeURI(val);
    const apiUrl = `${this.apiBaseUrl}?q=${encodedValue}&count=10`;

    // Make HTTP reques with Axios
    axios.get(apiUrl, { headers: { Authorization: APITOKEN } })
      .then((res) => {
        // Set state with result
        this.setState({ searchResults: res.data.statuses });
      })
      .catch((error) => {
        console.log(`error ${error}`);
      });
  }

  // Search handler for Mock API
  search(val) {
    const apiUrl = 'http://5a0993e47e1850001267a8a5.mockapi.io/v1/search/tweets';

    // Make HTTP reques with Axios
    axios.get(apiUrl)
      .then((res) => {
        // Set state with result
        this.setState({ searchResults: res.data[0].statuses });
      })
      .catch((error) => {
        console.log(`error ${error}`);
      });
  }

  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Twitter Search</h1>
        </header>
        <div className="app-content container">
          <SearchBar search={this.search.bind(this)} />
          <ResultList results={this.state.searchResults} />
        </div>
      </div>
    );
  }
}

export default SearchApp;
