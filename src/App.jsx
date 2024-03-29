import React, { useState } from 'react';
import Header from './Components/header';
import Footer from './Components/footer';
import Content from './Components/content';
import AddItem from './Components/addItem';
// import './index.css';

const App = () => {
    const  [items, setItem] = useState(
      JSON.parse(localStorage.getItem('todo_list'))
  );

  const[newItem, setNewItem] = useState('')

  const addItem = (item) =>{
    const id = items.length ? items[items.length-1].id+1 : 1 ;
    const NewItem = {id, checked:false, item};
    setItem([...items, NewItem])
    localStorage.setItem("todo_list", JSON.stringify([...items, NewItem]))
  }


  const handleSelect = (id) => {
      const ListItems = items.map(item => item.id === id ? {...item, checked: !item.checked} : item);
      setItem(ListItems);
      localStorage.setItem("todo_list",JSON.stringify(ListItems))
  }

  const handleDelete = (id) => {
    const ListItems = items.filter((item)=> item.id !== id)
      setItem(ListItems)
      localStorage.setItem("todo_list", JSON.stringify(ListItems))
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!newItem) return;
    addItem(newItem)
    setNewItem('')
  }
  return (
    <div>
      <Header tittle="TO-DO List"/>
      <AddItem
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
      />
      <Content 
      items = {items}
      handleSelect = {handleSelect}
      handleDelete = {handleDelete}
      />
      <Footer 
      length={items.length}
      />
    </div>
  )
}
export default App;
