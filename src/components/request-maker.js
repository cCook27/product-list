import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchDataSuccess } from '../actions/actions';

function RequestMaker() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.queryObject)

  useEffect(() => {
    const fetchData = async () => {
      try {
        let keyword = state.keyword;
        let category = state.category;
        let price = state.price;
  
  
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

    fetchData();
  }, [dispatch, state]); 

  return null;
   
}

export default RequestMaker;