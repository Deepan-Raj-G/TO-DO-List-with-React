import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

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
    )
    return ( 
        <div>
            <ul>
                { input.map(item => (
                     <li key={item.id}>
                        <input 
                        type="checkbox"
                        checked = {item.checked}
                        />
                        <label>{item.item}</label>
                        <FaTrashAlt />
                     </li>
                ) )}
            </ul>
        </div>
    );
}
 
export default Todo;