import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetailsWrapper from './DogDetailsWrapper';
import ColorList from './ColorList';
import ColorDetails from './ColorDetails';
import NewColorForm from './NewColorForm';
import './App.css';

function App({ dogs }) {
  const [colors, setColors] = useState([
    { name: 'Red', value: '#FF0000' },
    { name: 'Green', value: '#00FF00' },
    { name: 'Blue', value: '#0000FF' }
  ]);

  const addColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  return (
    <Router>
      <div className="App">
        <Nav dogs={dogs} />
        <Routes>
          <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="/dogs/:name" element={<DogDetailsWrapper dogs={dogs} />} />
          <Route exact path="/colors" element={<ColorList colors={colors} />} />
          <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
          <Route path="/colors/:color" element={<ColorDetails colors={colors} />} />
          <Route path="*" element={<Navigate to="/colors" />} />
        </Routes>
      </div>
    </Router>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "duke",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "perry",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "tubby",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
};

export default App;