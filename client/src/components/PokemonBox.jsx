import React, {useState} from 'react';

const PokemonBox = ({popUp, pokemon, assignCurrentPokemon, setDescription, setMeasurements}) => {


  const getData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`)
    .then((res) => res.json())
    .then((res) => setDescription(res.flavor_text_entries[1].flavor_text))
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}/`)
    .then((res) => res.json())
    .then((res) => setMeasurements({height: res.height, weight: res.weight}))
  }

  const handleSubmit = () => {
    assignCurrentPokemon(pokemon.id)
    getData();
    popUp();
  }

  return (
    <div onClick={handleSubmit} className="pokemon-box">
      <img
        src={`https://ntpokedextotal.s3-us-west-1.amazonaws.com/pokedex${pokemon.id}.png`}
        alt={pokemon.name.english}
        className="pokemon-image"
      />
      <br />
      <div className="pokemon-names">
        <span>
          #{pokemon.id} {pokemon.name.english}
        </span>
        <br />
      </div>

      <div className="typebox">
        {pokemon.type.map((type, index) => (
          <span className={`background-${type} type`} key={index}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}

export default PokemonBox;

// https://ntpokedextotal.s3-us-west-1.amazonaws.com/${pokemon.id}.png
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg

