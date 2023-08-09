import React, { useEffect, useState } from 'react';
import './App.css';

export interface User {
  id: string;
  name: string;
}

export function getUser(): Promise<User> {
  return Promise.resolve({ id: '1', name: 'Japneet' });
}

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
    <h1>Your favorite color is: {color}</h1>
    </div>

    
  );
}

export default App;
