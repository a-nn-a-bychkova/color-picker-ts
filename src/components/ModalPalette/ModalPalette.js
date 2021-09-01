import { useEffect } from 'react';
import style from './ModalPalette.module.css';
import { X } from 'react-feather';
import { v4 as uuidv4 } from 'uuid';

function ModalPalette({ toggleModalPalette, selectedColors }) {
  useEffect(() => {
    function handleMouseUp(e) {
      if (!e.target.classList.contains('ModalPalette_Container__V101Q')) {
        toggleModalPalette();
      }
    }
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);
  // const deleteColor = key => {
  //   console.log(key);
  // };

  return (
    <div className={style.Container}>
      <h2 className={style.Text}>Your color collection</h2>
      {selectedColors && (
        <ul className={style.List}>
          {selectedColors.map(color => (
            <li key={uuidv4()} className={style.Item}>
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
