import React from 'react';
import { Link } from 'react-router-dom';

function ColorList({ colors }) {
  return (
    <div>
      <h1>Color List</h1>
      <ul>
        {colors.map(color => (
          <li key={color.name}>
            <Link to={`/colors/${color.name.toLowerCase()}`}>{color.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/colors/new">Add a new color</Link>
    </div>
  );
}

export default ColorList;