import React, { Component } from 'react';

class SearchBar extends Component {
  render () {
    const {handleChange, clickChange, searchTerm} = this.props;
    
    return (
      <div className="m-4 text-center">
          <input onChange={handleChange} className="w-50 py-1" type="text" />
        
          <button onClick={clickChange} className="btn py-1 rounded">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/>
          </button>
          <span className="d-block mt-5">{searchTerm}</span>
      </div>
    );
  };
};
export default SearchBar;