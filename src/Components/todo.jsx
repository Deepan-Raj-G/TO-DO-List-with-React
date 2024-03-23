import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import '../index.css'

const Todo = () => {
    const  [items, setItem] = React.useState(
        [
            {
                id: 1,
                checked: true,
                item: "Buy groceries"
            },

            {
                id: 2,
                checked: false,
                item: "Clean the house"
            },

            {
                id: 3,
                checked: true,
                item: "make development"
            }
        ]
    );
    
    const handleSelect = (id) => {
        setItem(items.map(item => item.id === id ? {...item, checked: !item.checked} : item));
    }

    const handleDelete = (id) => {
        setItem(items.filter((item)=> item.id !== id))
    }

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
    );
}
 
export default Todo;