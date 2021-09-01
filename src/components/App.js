import { useState, useEffect, useContext } from 'react';
import './App.css';
import ColorPicker from './ColorPicker';
import ModalChooseColor from './ModalChooseColor';
import ModalPalette from './ModalPalette';
import Context from '../contexts/context';

function App() {
  const [selectedColors, setSelectedColors] = useState([]);
  const [showModalChoose, setShowModalChoose] = useState(false);
  const [showModalPalette, setShowModalPalette] = useState(false);

  function toggleModalChoose() {
    if (showModalPalette) {
      setShowModalPalette(false);
    }
    setShowModalChoose(!showModalChoose);
  }

  function toggleModalPalette() {
    if (showModalChoose) {
      setShowModalChoose(false);
    }
    setShowModalPalette(!showModalPalette);
  }

  function addSelectedColor(chosenColor) {
    console.log('chosenColor in add function', chosenColor);
    if (chosenColor) {
      setSelectedColors([...selectedColors, chosenColor]);
      console.log('selectedColorsArray', selectedColors);
    } else {
      return;
    }
  }
  return (
    <div className="App">
      <ColorPicker
        toggleModalChoose={toggleModalChoose}
        toggleModalPalette={toggleModalPalette}
      />
      {showModalChoose && (
        <ModalChooseColor
          toggleModalChoose={toggleModalChoose}
          addSelectedColor={addSelectedColor}
        />
      )}
      {showModalPalette && (
        <ModalPalette
          toggleModalPalette={toggleModalPalette}
          selectedColors={selectedColors}
        />
      )}
    </div>
  );
}

export default App;
