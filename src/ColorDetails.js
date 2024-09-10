import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

function ColorDetails({ colors }) {
  const { color } = useParams();
  const selectedColor = colors.find(c => c.name.toLowerCase() === color.toLowerCase());

  if (!selectedColor) return <Navigate to="/colors" />;

  return (
    <div>
      <h1>{selectedColor.name}</h1>
      <div style={{ backgroundColor: selectedColor.value, height: '100px', width: '100px' }}></div>
    </div>
  );
}

export default ColorDetails;