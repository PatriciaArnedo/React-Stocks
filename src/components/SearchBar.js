import React from 'react';

const SearchBar = (props) => {
  
  const sortOnChange = (e) =>{
    props.changeSort(e.target.value)
  }

  const filterOnChange = (e) => {
    props.changeFilter(e.target.value)
  }
  
  
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sort==="Alphabetically"} onChange={sortOnChange}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sort==="Price"} onChange={sortOnChange}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={filterOnChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
