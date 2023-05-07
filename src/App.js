import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [hexcode, setHexcode] = useState(randomColor.randomColor());
  return (
    <div className="App">
      <div
        style={{
          backgroundColor: hexcode,
        }}
      >
        <div>{`Generated Color: ${hexcode}`}</div>
        <br />
        <button onClick={() => setHexcode(randomColor())}>Generate</button>
      </div>
    </div>
  );
}
