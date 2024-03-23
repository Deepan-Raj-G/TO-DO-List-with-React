import React, { Component } from 'react';
import { FaTrashAlt } from "react-icons/fa";

const ListItems = ({item, handleDelete, handleSelect}) => {
  return (
    <li key={item.id}>
        <input 
        type="checkbox"
        checked = {item.checked}
        onChange={()=>handleSelect(item.id)}/>
        <label style={(item.checked)? {textDecoration: 'line-through'} : null} onDoubleClick = {() => handleSelect(item.id)}>{item.item}</label>
        <FaTrashAlt onClick={() => handleDelete(item.id)} />
    </li>
  )
}

export default ListItems