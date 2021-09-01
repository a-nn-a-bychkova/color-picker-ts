import { useMemo, useState, useEffect } from 'react';
import Context from './context';
export default function Provider({ children }) {
  const [redColor, setRedColor] = useState({ h: 0, s: 100, l: 50, a: 1 });
  const [greenColor, setGreenColor] = useState({ h: 120, s: 100, l: 50, a: 1 });
  const [blueColor, setBlueColor] = useState({ h: 240, s: 100, l: 50, a: 1 });
  const [chosenColor, setChosenColor] = useState('');
  const [color, setColor] = useState('#ff0000');
  const [selectedColors, setSelectedColors] = useState([]);

  useEffect(() => {}, []);

  const providerValue = useMemo(() => {
    return {
      redColor,
      setRedColor,
      greenColor,
      setGreenColor,
      blueColor,
      setBlueColor,
      chosenColor,
      setChosenColor,
      color,
      setColor,
      selectedColors,
      setSelectedColors,
    };
  }, [
    redColor,
    setRedColor,
    greenColor,
    setGreenColor,
    blueColor,
    setBlueColor,
    chosenColor,
    setChosenColor,
    color,
    setColor,
    selectedColors,
    setSelectedColors,
  ]);
  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}
