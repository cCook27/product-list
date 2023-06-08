import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQueryObject } from "../actions/actions";
import '../component-css/info-bar.css'

function InfoBar() {

  const dispatch = useDispatch();


  const handleSearch = (event) => {
    event.preventDefault();

    let eventObject = {
      keyword: event.target.search.value,
      category: event.target.category.value,
      price: event.target.price.value
    }

    dispatch(updateQueryObject(eventObject));
  }


  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSearch}>
        <input className='query' type="text" placeholder="Search..." name='search' />
        <select className='query option' name='category'>
          <option></option>
          <option>tools</option>
          <option>grocery</option>
        </select>
        <select className='query option' name='price'>
          <option></option>
          <option>Highest</option>
          <option>Lowest</option>
        </select>
        <button className='submit' type="submit">Search</button>
      </form>
    </div>
    
  );
}

export default InfoBar;