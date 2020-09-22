import React, { useState } from "react";

const SortDex = ({
  popUp,
  pokedex,
  setCurrentPokemon,
  currentPokemon,
  setDescription,
  setMeasurements,
  Pokelist,
}) => {


  const [search, setSearch] = useState("");
  const [pokemonId, setPokemonId] = useState(25);

  const handleChange = (e) => {
    setSearch(event.target.value);
  };

  const getData = () => {
    if (currentPokemon.id !== 0) {
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
        .then((res) => res.json())
        .then((res) => setDescription(res.flavor_text_entries[1].flavor_text));
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        .then((res) => res.json())
        .then((res) =>
          setMeasurements({ height: res.height, weight: res.weight })
        )
    }
  };

  const sneakyChange = () => {
    Pokelist.forEach((pokemon) => {
      if (search.toLowerCase() === pokemon.name.english.toLowerCase()) {
        setPokemonId(pokemon.id);
        setCurrentPokemon(pokemon);
      }
    });
  };

  const handleSubmit = () => {
    event.preventDefault();
    sneakyChange();
    getData();
    popUp();
  };

  // const filterByType = (type) => {
  //   filterPokemon(type)
  // }

  return (
    <div className="sort-dex">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="search-box"
          type="text"
          placeholder=" Search..."
          name="search"
          value={search}
        />
        <input type="submit" className="search-button" />
        <h2>Your Team</h2>
      </form>
    </div>
  );
};

export default SortDex;
