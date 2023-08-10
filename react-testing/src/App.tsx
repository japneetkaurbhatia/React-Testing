import React, { useEffect, useState } from 'react';
import './App.css';
import { getUser, User } from './getUser';



interface FormBoxProps {
  labelText: React.ReactNode;
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  placeholder: string
}

function FormBox ({labelText, value, onChange, placeholder} : FormBoxProps) {
  return (
    <div className="form-box">
      <label htmlFor='search'>{labelText}</label>
      <input placeholder={placeholder} id="search" type="text" value = {value} onChange={onChange} />
    </div>
  )
}


function App() {
  const [color, setColor] = useState("");
  const [hobby, setHobby] = useState("");
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

  const handleHobbyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHobby(event.target.value)
  }

  return (
    <div className="centered-container">
      {user ? <p>Username: {user.name}</p> : null}
      <FormBox 
    labelText={"Add your favourite color:"} 
    value={color} 
    onChange={handleColorChange}
    placeholder={"color"} />
    <h2>Your favorite color is: {color}</h2>

    <FormBox 
    labelText={"Add your hobby:"} 
    value={hobby} 
    onChange={handleHobbyChange}
    placeholder={"hobby"} />
     <h2>Your hobby is: {hobby}</h2>
     
     <FormBox 
    labelText={"Add your hobby:"} 
    value={hobby} 
    onChange={handleHobbyChange} 
    placeholder={"hobby"}/>
     <h2>Your hobby is: {hobby}</h2>
     
    </div>

    
    
  );
}

export default App;
