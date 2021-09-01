import React, { useState, useEffect } from 'react';
import style from './ModalChooseColor.module.css';
import { LightnessSlider } from 'react-slider-color-picker';
import convert from 'color-convert';

function ModalChooseColor({
  updateColor,
  toggleModalChoose,
  addSelectedColor,
}) {
  const [redColor, setRedColor] = useState({ h: 0, s: 100, l: 50, a: 1 });
  const [hexRedColor, setHexRedColor] = useState('#ff0000');
  const [greenColor, setGreenColor] = useState({ h: 120, s: 100, l: 50, a: 1 });
  const [hexGreenColor, setHexGreenColor] = useState('#00ff00');
  const [blueColor, setBlueColor] = useState({ h: 240, s: 100, l: 50, a: 1 });
  const [hexBlueColor, setHexBlueColor] = useState('#0000ff');
  const [chosenColor, setChosenColor] = useState('');

  useEffect(() => {
    updateColor(chosenColor);
  }, [chosenColor]);

  function updatedColorToString(newColor) {
    return [newColor.h, newColor.s, newColor.l];
  }
  //можно было сделать обычные переменные для хекс цветов

  function mixChosenColors() {
    let r = hexRedColor.slice(0, 2);
    let g = hexGreenColor.slice(2, 4);
    let b = hexBlueColor.slice(4);
    return setChosenColor(`#${r}${g}${b}`);
  }

  const handleChangeRedColor = newColor => {
    setRedColor(newColor);
    let updatedColor = updatedColorToString(newColor);
    setHexRedColor(convert.hsl.hex(updatedColor));
    mixChosenColors();
    console.log('localStorageRed', localStorage.setItem('red', newColor));
  };
  const handleChangeGreenColor = newColor => {
    setGreenColor(newColor);
    let updatedColor = updatedColorToString(newColor);
    setHexGreenColor(convert.hsl.hex(updatedColor));
    mixChosenColors();
  };
  const handleChangeBlueColor = newColor => {
    setBlueColor(newColor);
    let updatedColor = updatedColorToString(newColor);
    setHexBlueColor(convert.hsl.hex(updatedColor));
    mixChosenColors();
  };

  const handleCancelBtnClick = event => {
    event.preventDefault();
    toggleModalChoose();
  };
  const handleOKClick = event => {
    event.preventDefault();
    console.log('chosenColor', chosenColor);
    addSelectedColor(chosenColor);
    toggleModalChoose();
  };
  return (
    <div className={style.Container}>
      <div className={style.SliderContainer}>
        <LightnessSlider
          handleChangeColor={handleChangeRedColor}
          color={redColor}
        />
        <LightnessSlider
          handleChangeColor={handleChangeGreenColor}
          color={greenColor}
        />
        <LightnessSlider
          handleChangeColor={handleChangeBlueColor}
          color={blueColor}
        />
      </div>
      <div className={style.ButtonContainer}>
        <button
          type="button"
          onClick={handleCancelBtnClick}
          className={style.CancelButton}
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleOKClick}
          className={style.OkButton}
        >
          Ok
        </button>
      </div>
    </div>
  );
}

export default ModalChooseColor;
