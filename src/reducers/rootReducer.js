import { UPDATE_QUERY_OBJECT, FETCH_DATA_REQUEST, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from '../actions/actions';

const initialState = {
  data: [],
  count: null,
  page: null,
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
    case 'UPDATE_PAGE_QUERY':
      return {
        ...state,
        page: action.payload,
      };
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_DATA_ERROR':
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      }; 
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.products,
        count: action.payload.count,
      };  
    default:
      return state;
  }
}

export default rootReducer;

