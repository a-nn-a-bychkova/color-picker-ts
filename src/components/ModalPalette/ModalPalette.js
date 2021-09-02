import { useEffect, useContext } from 'react';
import Context from '../../contexts/context';
import style from './ModalPalette.module.css';
import { X } from 'react-feather';
import { v4 as uuidv4 } from 'uuid';

function ModalPalette({ toggleModalPalette, selectedColors }) {
  const { chosenColor, setChosenColor } = useContext(Context);
  useEffect(() => {
    function handleMouseUp(e) {
      if (e.target.classList.contains('ColorPicker_Container__K1kK3')) {
        toggleModalPalette();
      } else if (e.target.classList.contains('App')) {
        toggleModalPalette();
      }
      // console.log(e.target.classList);
    }
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  // const deleteColor = key => {
  //   console.log(key);
  // };
  const handleClickChooseColor = event => {
    console.log('this is inner text', event.target.innerText);
    setChosenColor(event.target.innerText);
    localStorage.setItem('currenColor', event.target.innerText);
    toggleModalPalette();
  };

  return (
    <div className={style.Container}>
      <h2 className={style.Text}>Your color collection</h2>
      {selectedColors && (
        <ul className={style.List}>
          {selectedColors.map(color => (
            <li
              key={uuidv4()}
              className={style.Item}
              onClick={handleClickChooseColor}
            >
              <h2 className={style.ItemText}>{color}</h2>
              <div
                style={{
                  width: '15px',
                  height: '15px',
                  backgroundColor: color,
                  border: '1px solid #b6b6b4',
                }}
              ></div>
              {/* <X onClick={deleteColor(key)} /> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default ModalPalette;
