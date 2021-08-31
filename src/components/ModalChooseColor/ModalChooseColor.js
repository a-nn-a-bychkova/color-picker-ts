import { useState } from 'react';
import style from './ModalChooseColor.module.css';
import { AlphaPicker, SketchPicker } from 'react-color';

function ModalChooseColor() {
  const [color, setColor] = useState('#ff0000');
  const [green, setGeen] = useState('#ff0000');
  const [blue, setBlue] = useState('#ff0000');
  // const handleChangeComplete = (color, event) => {
  //   return setColor(color.hex);
  // };
  return (
    <div className={style.Container}>
      <AlphaPicker
        color={'#ff0000'}
        height={'15px'}
        width={'140px'}
        onChangeComplete={color => {
          setColor(color.hex);
        }}
      />
    </div>
  );
}
export default ModalChooseColor;
