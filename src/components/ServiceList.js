import React from 'react';
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {removeService, editServiceField} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const filterItems = useSelector((state) => state.serviceFilter);
  const dispatch = useDispatch();
  const [itemList, setItemList] = useState(items);

  useEffect(() => {
    const itemList = filterItems.filter ? filterItems.items : items;
    setItemList(itemList);
  }, [filterItems, items]);

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const handleEdit = o => {
    dispatch(editServiceField(o.id, o.name, o.price));
  }

return (
    <ul>
      {itemList.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o)}>✏️</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList
