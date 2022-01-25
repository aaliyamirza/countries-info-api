import React from 'react';
import Header from './header.js';
import FilterBar from '../Search&Filter/searchfilter';
import Countries from "../Country/country.js";


function App() {
    return (
      <div className="App">
        <Header/>
        <FilterBar/>
        <Countries/>
      </div>
    );
  
}
 
export default App;