

export const fetchDataSuccess = (data) => (
  {
    type: 'FETCH_DATA_SUCCESS',
    payload: data
  }
);

export const fetchDataRequest = () => (
  {
    type: 'FETCH_DATA_REQUEST',
  }
);

export const updateQueryObject = (queryObject) => (
  {
    type: 'UPDATE_QUERY_OBJECT',
    payload: queryObject
  }
);

export const fetchDataError = (error) => (
  {
    type: 'FETCH_DATA_ERROR',
    payload: error
  }
);

