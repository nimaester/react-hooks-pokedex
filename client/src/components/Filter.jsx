import React from 'react';

const Filter = ({filterPokemon}) => {
  return (
    <div className="filter-pokemon">
      <ul>
        <li className="p-types" onClick={() => { filterPokemon("Normal")}} name="Normal">Normal</li>
        <li className="p-types" onClick={() => { filterPokemon("Fighting")}} name="Fighting">Fighting</li>
        <li className="p-types" onClick={() => { filterPokemon("Flying")}} name="Flying">Flying</li>
        <li className="p-types" onClick={() => { filterPokemon("Poison")}} name="Poison">Poison</li>
        <li className="p-types" onClick={() => { filterPokemon("Ground")}} name="Ground">Ground</li>
        <li className="p-types" onClick={() => { filterPokemon("Rock")}} name="Rock">Rock</li>
        <li className="p-types" onClick={() => { filterPokemon("Bug")}} name="Bug">Bug</li>
        <li className="p-types" onClick={() => { filterPokemon("Ghost")}} name="Ghost">Ghost</li>
        <li className="p-types" onClick={() => { filterPokemon("Steel")}} name="Steel">Steel</li>
        <li className="p-types" onClick={() => { filterPokemon("Fire")}} name="Fire">Fire</li>
        <li className="p-types" onClick={() => { filterPokemon("Water")}} name="Water">Water</li>
        <li className="p-types" onClick={() => { filterPokemon("Grass")}} name="Grass">Grass</li>
        <li className="p-types" onClick={() => { filterPokemon("Electric")}} name="Electric">Electric</li>
        <li className="p-types" onClick={() => { filterPokemon("Psychic")}} name="Psychic">Psychic</li>
        <li className="p-types" onClick={() => { filterPokemon("Ice")}} name="Ice">Ice</li>
        <li className="p-types" onClick={() => { filterPokemon("Dragon")}} name="Dragon">Dragon</li>
        <li className="p-types" onClick={() => { filterPokemon("Dark")}} name="Dark">Dark</li>
        <li className="p-types" onClick={() => { filterPokemon("Fairy")}} name="Fairy">Fairy</li>
      </ul>
    </div>
  );
};

export default Filter;