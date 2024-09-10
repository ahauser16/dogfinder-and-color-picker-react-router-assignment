import React from 'react';

function DogDetails({ dog }) {
  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={`/${dog.src}.jpg`} alt={dog.name} />
      <h2>Age: {dog.age}</h2>
      <ul>
        {dog.facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;