import React from 'react'
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {filterService} from '../actions/actionCreators';

function ServiceFilter() {
  const items = useSelector((state) => state.serviceFilter);
  const list = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterService(items.filter, list));
  }, [list]);


  const handleFilter = (evt) => {
    const { value } = evt.target;
    dispatch(filterService(value, list));
  };

  return (
    <div>
      Filter
      <input onChange={handleFilter}/>
    </div>
  );
}

export default ServiceFilter;