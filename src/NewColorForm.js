import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewColorForm({ addColor }) {
  const [name, setName] = useState('');
  const [value, setValue] = useState('#000000');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ name, value });
    navigate('/colors');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Color Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="value">Color Value:</label>
        <input
          type="color"
          id="value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button type="submit">Add Color</button>
    </form>
  );
}

export default NewColorForm;