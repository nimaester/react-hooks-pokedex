import React from 'react';
const Topbar = ({getKantoPokemon, getHoennPokemon, getJohtoPokemon, getSinnohPokemon}) => {

  return (
    <div className="main-header">
      <div className="header">
        <div className="red-line"></div>
        <ul>
        <li><img className="pokeball2" src="Pokeball-PNG-Image.png" alt=""/></li>
          <li><img className="pokeball1" src="Pokeball-PNG-Image.png" alt=""/></li>
          <li className="kanto-button" onClick={getKantoPokemon}>Kanto Region</li>
          <li className="johto-button" onClick={getJohtoPokemon}>Johto Region</li>
          <li className="hoenn-button" onClick={getHoennPokemon}>Hoenn Region</li>
          <li className="sinnoh-button" onClick={getSinnohPokemon}>Sinnoh Region</li>
          <li><img className="pokeball2" src="Pokeball-PNG-Image.png" alt=""/></li>
          <li><img className="pokeball2" src="Pokeball-PNG-Image.png" alt=""/></li>
        </ul>
      </div>
      <div className="white-line"></div>
    </div>
  );
}

export default Topbar;