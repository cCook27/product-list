import React from 'react';
import { useDispatch } from 'react-redux';
import { queryObject } from "../actions/actions";

function InfoBar({handleQueryObject}) {

  const dispatch = useDispatch();


  const handleSearch = (event) => {
    event.preventDefault();

    let eventObject = {
      keyword: event.target.search.value,
      category: event.target.category.value,
      price: event.target.price.value
    }

    handleQueryObject(eventObject);
  }


  return (
    <form onSubmit={handleSearch}>
      <input type="text" placeholder="Search..." name='search' />
      <select name='category'>
        <option>Category</option>
      </select>
      <select name='price'>
        <option></option>
        <option>Highest</option>
        <option>Lowest</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
}

export default InfoBar;