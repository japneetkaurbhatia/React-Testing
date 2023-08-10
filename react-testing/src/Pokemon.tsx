import React, { useState } from 'react';
import axios from 'axios';
import FormBox from './FormBox';

const pokemonApiUrl = 'https://pokeapi.co/api/v2';

type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

function Pokemon() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonAbilities, setPokemonAbilities] = useState<Ability[]>([]);
  const [error, setError] = useState(false);

  async function handleFetch(event: React.MouseEvent) {
    let result;
    try {
      result = await axios.get(`${pokemonApiUrl}/pokemon/${pokemonName}`);
      setPokemonAbilities(result.data.abilities);
    } catch (error) {
      setPokemonAbilities([]);
      setError(true);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPokemonName(event.target.value);
  }

  return (
    <div>
      <FormBox labelText={"Pokemon name:"} value={pokemonName} onChange={handleChange} placeholder={'pokemon'}  />
      <button type="button" onClick={handleFetch}>
        Fetch Pokemon abilities
      </button>
      {error && <span>Something went wrong...</span>}
      <ul>
        {pokemonAbilities.map((ability) => (
          <li key={ability.ability.name}>
            <a href={ability.ability.url}>{ability.ability.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pokemon;