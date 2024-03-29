import React, { useState } from 'react';
import Header from './Components/header';
import Footer from './Components/footer';
import Content from './Components/content';
import AddItem from './Components/addItem';
// import './index.css';

const App = () => {
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

  const[newItem, setNewItem] = useState('')

  const addItem = (item) =>{
    const id = items.length ? items[items.length-1].id+1 : 1 ;
    const NewItem = {id, checked:false, item};
    setItem([...items, NewItem])
  }


  const handleSelect = (id) => {
      setItem(items.map(item => item.id === id ? {...item, checked: !item.checked} : item));
  }

  const handleDelete = (id) => {
      setItem(items.filter((item)=> item.id !== id))
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
