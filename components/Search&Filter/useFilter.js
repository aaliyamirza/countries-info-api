import React, {createContext, useContext, useState} from "react";

const FilterContext = createContext();

const initialState = {
    search:"",
    region:"",
}

const FilterProvider = ({children}) => {

    const [filter,setFilter] = useState(initialState);
    
    const data = {
      filter,
      setFilter
    }
  
    return (
      <FilterContext.Provider value={data} >
        {children}
      </FilterContext.Provider>
    )
  }
  
  export {
    FilterContext,
    FilterProvider,
    useContext,
    initialState
  }