import { useState, useEffect } from 'react';
import style from './ColorPicker.module.css';
import { ChevronDown } from 'react-feather';

function ColorPicker({ color, toggleModalChoose, toggleModalPalette }) {
  useEffect(() => {}, []);

  const s = {
    backgroundColor: color,
    width: '15px',
    height: '15px',
    marginTop: '7px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  const handleSquareClick = event => {
    //при клике на кнопку все значения сбрасываются
    event.preventDefault();
    toggleModalChoose();
  };

  const handleArrowClick = event => {
    event.preventDefault();
    toggleModalPalette();
  };

  return (
    <div className={style.Container}>
      <div className={style.Menu}>
        <div className={style.Number}>{color}</div>
        <div className={style.Square} onClick={handleSquareClick}>
          <div style={s}></div>
        </div>
        <div className={style.Arrow} onClick={handleArrowClick}>
          <ChevronDown className={style.Icon} />
        </div>
      </div>
    </div>
  );
}
export default ColorPicker;
