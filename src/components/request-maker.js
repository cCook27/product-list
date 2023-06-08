import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchDataSuccess, fetchDataError, fetchDataRequest } from '../actions/actions';

function RequestMaker() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.queryObject);
  const page = useSelector((state) => state.page);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let keyword = state.keyword;
        let category = state.category;
        let price = state.price;
  
        dispatch(fetchDataRequest());
  
        const response = await fetch(`http://localhost:8000/products?page=${page}&category=${category}&query=${keyword}&price=${price}`);
  
        if (!response.ok) {
          dispatch(fetchDataError(`Oops! Error: ${response.status} Products ${response.statusText}`));
        }
  
        const data = await response.json();
  
        dispatch(fetchDataSuccess(data));
  
      } catch (error) {
        console.log(error)
        } 
    };

    fetchData();
  }, [dispatch, state, page]); 

  return null;
   
}

export default RequestMaker;