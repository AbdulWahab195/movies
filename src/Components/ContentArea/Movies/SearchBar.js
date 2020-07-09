import React from 'react';
import { Input } from 'antd';

const { Search } = Input;
const SearchBar = ({ onSearchMoviesList, value }) => (
  <Search
    placeholder="Search the movie name"
    enterButton="Search"
    style={{ width: 500 }}
    value={value}
    onChange={onSearchMoviesList}
    className="search-bar"
  />
);

export default SearchBar;