import React, { useState } from 'react';
import style from './ModalChooseColor.module.css';
import { LightnessSlider } from 'react-slider-color-picker';
import convert from 'color-convert';

function ModalChooseColor() {
  const [redColor, setRedColor] = useState({ h: 0, s: 100, l: 50, a: 1 });
  const [hexRedColor, setHexRedColor] = useState('ff0000');
  const [greenColor, setGreenColor] = useState({ h: 120, s: 100, l: 50, a: 1 });
  const [hexGreenColor, setHexGreenColor] = useState('00ff00');
  const [blueColor, setBlueColor] = useState({ h: 240, s: 100, l: 50, a: 1 });
  const [hexBlueColor, setHexBlueColor] = useState('0000ff');
  const [chosenColor, setChosenColor] = useState();

  function updatedColorToString(newColor) {
    return [newColor.h, newColor.s, newColor.l];
  }

  function mixChosenColors() {
    console.log('hex red mix', hexRedColor);
    let r = hexRedColor.slice(0, 2);
    console.log('hex green mix', hexGreenColor);
    let g = hexGreenColor.slice(2, 4);
    console.log('hex blue mix', hexBlueColor);
    let b = hexBlueColor.slice(4);
    console.log('chosenColor', `${r}${g}${b}`);
    return setChosenColor(`${r}${g}${b}`);
  }

  const handleChangeRedColor = newColor => {
    setRedColor(newColor);
    let updatedColor = updatedColorToString(newColor);
    setHexRedColor(convert.hsl.hex(updatedColor));
    mixChosenColors();
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

  return (
    <div className={style.Container}>
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
      <div></div>
    </div>
  );
}

export default ModalChooseColor;
