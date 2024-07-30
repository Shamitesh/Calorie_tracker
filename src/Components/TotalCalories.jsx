import React from 'react';

function TotalCalories({ items }) {
  const totalCalories = items.reduce((acc, item) => acc + item.calories, 0);

  return (
    <div>
      <h2>Total Calories: {totalCalories}</h2>
    </div>
  );
}

export default TotalCalories;
