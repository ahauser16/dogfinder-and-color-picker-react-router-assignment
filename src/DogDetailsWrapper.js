// src/DogDetailsWrapper.js
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import DogDetails from './DogDetails';

function DogDetailsWrapper({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());

  if (!dog) return <Navigate to="/dogs" />;

  return <DogDetails dog={dog} />;
}

export default DogDetailsWrapper;