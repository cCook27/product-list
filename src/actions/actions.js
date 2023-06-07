

export const fetchDataSuccess = data => (
  {
    type: 'FETCH_DATA_SUCCESS',
    payload: data
  }
);

export const queryObject = data => (
  {
    type: 'QUERY_OBJECT',
    payload: data
  }
);