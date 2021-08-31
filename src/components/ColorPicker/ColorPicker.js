import style from './ColorPicker.module.css';
import { ChevronDown } from 'react-feather';

function ColorPicker(props) {
  return (
    <div className={style.Container}>
      <div className={style.Menu}>
        <div className={style.Number}>номер</div>
        <div className={style.Square}>
          <div className={style.SquareColor}></div>
        </div>
        <div className={style.Arrow}>
          <ChevronDown className={style.Icon} />
        </div>
      </div>
    </div>
  );
}
export default ColorPicker;
