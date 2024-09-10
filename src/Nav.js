import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ dogs }) {
  return (
    <nav>
      <ul>
        {dogs.map(dog => (
          <li key={dog.name}>
            <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
          </li>
        ))}
        <li>
          <Link to="/colors">Colors</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;