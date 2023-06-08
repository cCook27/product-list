import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import React from 'react';
import '../component-css/paginator.css'
import { updatePageQuery } from '../actions/actions';

function Paginator() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.count);
  const pages = Math.ceil(state/10);

  let paginatorArr = [];

  useEffect(() => {
    loadPaginatorArr();
  }, [state])

  const loadPaginatorArr = () => {
    for (let i = 1; i <= pages; i++) {  
      paginatorArr.push(i)
    }
    return paginatorArr;
  };

  const handleClick = (page) => {
    dispatch((updatePageQuery(page)))
  };

  const createPaginator = loadPaginatorArr().map((page) => {
    return (
      <div onClick={() => handleClick(page)} className='pages'>{page}</div>
    )
  });

  return (
    <div className='pages-container'>{createPaginator}</div>
  )
}

export default Paginator;