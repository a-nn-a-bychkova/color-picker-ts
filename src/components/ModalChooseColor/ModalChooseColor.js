import React, { useState, useEffect, useContext } from 'react';
import Context from '../../contexts/context';
import style from './ModalChooseColor.module.css';
import { LightnessSlider } from 'react-slider-color-picker';
import convert from 'color-convert';

function ModalChooseColor({ toggleModalChoose, addSelectedColor }) {
  const [hexRedColor, setHexRedColor] = useState('ff0000');
  const [hexGreenColor, setHexGreenColor] = useState('00ff00');
  const [hexBlueColor, setHexBlueColor] = useState('0000ff');

  const { redColor, setRedColor } = useContext(Context);
  const { greenColor, setGreenColor } = useContext(Context);
  const { blueColor, setBlueColor } = useContext(Context);
  const { chosenColor, setChosenColor } = useContext(Context);

  useEffect(() => {
    function handleMouseUp(e) {
      if (
        !e.target.classList.contains('ModalChooseColor_Container__213HF') &&
        !e.target.classList.contains('ModalChooseColor_OkButton__2q4sh') &&
        !e.target.classList.contains('ColorPicker_Square__3YcvT') &&
        !e.target.classList.contains('ModalChooseColor_CancelButton__ZQB7p')
      ) {
        toggleModalChoose();
      }
    }
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  function updatedColorToString(newColor) {
    return [newColor.h, newColor.s, newColor.l];
  }

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
