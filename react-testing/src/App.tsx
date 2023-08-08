import React, { useState } from 'react';
import './App.css';

interface FormBoxProps {
  labelText: React.ReactNode;
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

function FormBox ({labelText, value, onChange} : FormBoxProps) {
  return (
    <div className="form-box">
      <label htmlFor='search'>{labelText}</label>
      <br />
      <input id="search" type="text" value = {value} onChange={onChange} />
    </div>
  )
}
function App() {
  const [color, setColor] = useState("");

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value)
  }

  return (
    <div className="centered-container">
      <FormBox 
    labelText={"Add your favourite color"} 
    value={color} 
    onChange={handleColorChange} />
    </div>
  );
}

export default App;
