
import React, { useState } from 'react';
import CalorieForm from './Components/CalorieForm';
import CalorieList from './Components/CalorieList';
import TotalCalories from './Components/TotalCalories';
import  './App.css';


function App() {
  const [items, setItems] = useState([]);

  const addFoodItem = (item) => {
    setItems([...items, item]);
  };

  const deleteFoodItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <h1>Calorie Counter</h1>
      <CalorieForm addFoodItem={addFoodItem} />
      <CalorieList items={items} deleteFoodItem={deleteFoodItem} />
      <TotalCalories items={items} />
    </div>
  );
}

export default App;

