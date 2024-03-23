import React, { Component } from 'react'
import { FaTrashAlt } from "react-icons/fa";

const Content = ({items, handleDelete, handleSelect}) => {
    return (
        <main>
            {(items.length) ? (
            <ul>
                { items.map(item => (
                     <li key={item.id}>
                        <input 
                        type="checkbox"
                        checked = {item.checked}
                        onChange={()=>handleSelect(item.id)}/>
                        <label style={(item.checked)? {textDecoration: 'line-through'} : null} onDoubleClick = {() => handleSelect(item.id)}>{item.item}</label>
                        <FaTrashAlt onClick={() => handleDelete(item.id)} />
                     </li>
                ) )}
            </ul>
            ) : (
                <h2>List is empty</h2>
            )}       
        </main>
    )
}

export default Content