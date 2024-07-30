import React, { useState } from 'react';

function CalorieForm({ addFoodItem }) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && calories) {
      addFoodItem({ name, calories: parseInt(calories) });
      setName('');
      setCalories('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Food item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default CalorieForm;
