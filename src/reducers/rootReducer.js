import { UPDATE_QUERY_OBJECT, FETCH_DATA_REQUEST, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from '../actions/actions';

const initialState = {
  data: null,
  queryObject: {
    keyword: '',
    category: '',
    price: '',
  },
  loading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'UPDATE_QUERY_OBJECT':
      return {
        ...state,
        queryObject: action.payload,
      };
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_DATA_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }; 
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };  
    default:
      return state;
  }
}

export default rootReducer;

