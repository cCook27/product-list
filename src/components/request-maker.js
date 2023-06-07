// import React from 'react';
import { useDispatch } from 'react-redux';
// import { useEffect } from 'react'
import { fetchDataSuccess } from '../actions/actions';

function RequestMaker({queryObject}) {
  const dispatch = useDispatch();

  const fetchData = async (queryObject) => {
    try {
      let keyword = queryObject.keyword;
      let category = queryObject.category;
      let price = queryObject.price;


      const response = await fetch(`http://localhost:8000/products`);

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();

      dispatch(fetchDataSuccess(data));

    } catch (error) {
      console.log(error)
      } 
  };

  fetchData(queryObject);
}

export default RequestMaker;