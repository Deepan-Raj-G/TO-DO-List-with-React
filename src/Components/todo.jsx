import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import '../index.css'

const Todo = () => {
    const  [input, setInput] = React.useState(
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
        setInput(input.map(item => item.id === id ? {...item, checked: !item.checked} : item));
    }

    const handleDelete = (id) => {
        setInput(input.filter((item)=> item.id !== id))
    }

    return ( 
        <main>
            <ul>
                { input.map(item => (
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
        </main>
    );
}
 
export default Todo;