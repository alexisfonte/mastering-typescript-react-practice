import React, {useState} from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import Item from './models/Item';

function App() {
  const [items, setItems] = useState<Item[]>([])
  // const items = [
  //   {id: 1, product: "lemon", quantity: 3},
  //   {id: 2, product: "chicken", quantity: 2},
  // ]
  return (
    <div >
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
