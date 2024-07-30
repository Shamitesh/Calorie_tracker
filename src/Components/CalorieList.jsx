import React from 'react';

function CalorieList({ items, deleteFoodItem }) {
  return (
    <div>
      <h2>Food Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.calories} calories
            <button onClick={() => deleteFoodItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CalorieList;
