import React from 'react';
import Header from './Components/header';
import Footer from './Components/footer';
import Content from './Components/content';
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

  const handleSelect = (id) => {
      setItem(items.map(item => item.id === id ? {...item, checked: !item.checked} : item));
  }

  const handleDelete = (id) => {
      setItem(items.filter((item)=> item.id !== id))
  }
  return (
    <div>
      <Header tittle="TO-DO List"/>
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
