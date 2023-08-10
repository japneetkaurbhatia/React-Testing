import React, { useEffect, useState } from 'react';
import './App.css';
import { getUser, User } from './getUser';



interface FormBoxProps {
  labelText: React.ReactNode;
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

function FormBox ({labelText, value, onChange} : FormBoxProps) {
  return (
    <div className="form-box">
      <label htmlFor='search'>{labelText}</label>
      <input placeholder='color' id="search" type="text" value = {value} onChange={onChange} />
    </div>
  )
}
function App() {
  const [color, setColor] = useState("");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value)
  }

  return (
    <div className="centered-container">
      {user ? <p>Username: {user.name}</p> : null}
      <FormBox 
    labelText={"Add your favourite color:"} 
    value={color} 
    onChange={handleColorChange} />
    <h2>Your favorite color is: {color}</h2>
    </div>

    
  );
}

export default App;
