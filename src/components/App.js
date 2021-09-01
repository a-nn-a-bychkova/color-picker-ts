import { useState, useEffect } from 'react';
import './App.css';
import ColorPicker from './ColorPicker';
import ModalChooseColor from './ModalChooseColor';
import ModalPalette from './ModalPalette';

function App() {
  const [color, setColor] = useState('#ff0000');
  const [selectedColors, setSelectedColors] = useState([]);
  const [showModalChoose, setShowModalChoose] = useState(false);
  const [showModalPalette, setShowModalPalette] = useState(false);
  useEffect(() => {}, [color]);
  function updateColor(value) {
    setColor(value);
    console.log('this is updateColorFunction', color);
  }

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
        color={color}
        toggleModalChoose={toggleModalChoose}
        toggleModalPalette={toggleModalPalette}
      />
      {showModalChoose && (
        <ModalChooseColor
          updateColor={updateColor}
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
