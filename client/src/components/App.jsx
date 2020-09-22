import React, { useState, useEffect } from "react";
import Pokelist from "../../dist/pokedex.json";
import Topbar from "./Topbar.jsx";
import Footer from "./Footer.jsx";
import PokemonList from "./PokemonList.jsx";
import Modal from "./Modal.jsx";
import SortDex from "./SortDex.jsx";
import Header from "./Header.jsx";
import Filter from "./Filter.jsx";
import YourTeam from "./YourTeam.jsx";

const App = () => {
  let [pokedex, setPokedex] = useState([]);
  let [loading, setLoading] = useState(true);
  let [loadMoreButton, setLoadMore] = useState(true);
  let [visible, setVisible] = useState(20);
  let [modal, setModal] = useState(false);
  let [currentPokemon, setCurrentPokemon] = useState(1);
  let [description, setDescription] = useState("");
  let [measurements, setMeasurements] = useState({ height: "", weight: "" });
  let [team, setTeam] = useState([]);


  const getKantoPokemon = () => {
    setPokedex(Pokelist.slice(0, 151));
    setVisible(20);
  };

  const getJohtoPokemon = () => {
    setPokedex(Pokelist.slice(151, 251));
    setVisible(20);
  };

  const getHoennPokemon = () => {
    setPokedex(Pokelist.slice(251, 386));
    setVisible(20);
  };

  const getSinnohPokemon = () => {
    setPokedex(Pokelist.slice(386,493))
  }

  const assignCurrentPokemon = (pokemonId) => {
    pokedex.forEach((pokemon) => {
      if (pokemon.id === pokemonId) {
        setCurrentPokemon(pokemon);
      }
    });
  };

  const filterPokemon = (type) => {
    let filtered = Pokelist.filter((pokemon) => {
      if (pokemon.type.includes(type)) {
        return type;
      }
    })
    setPokedex(filtered);
    setVisible(20);
  }

  useEffect(() => {
    getKantoPokemon();
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer).catch(console.log);
  }, []);

  const popUp = () => {
    setModal(!modal);
  };

  const loadMore = () => {
    setVisible((visible += 20));
  };

  const addToFavorites = (pokemon) => {
    favorites.push(pokemon.id)
  }

  if (loading) {
    return (
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
        <div className="bounce4"></div>
        <div className="bounce5"></div>
        <h1 style={{ color: "blue", marginTop: "5px" }}>LOADING</h1>
      </div>
    );
  }

  if (modal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const getThatPokemon = (pokemonToFind) => {

    pokedex.forEach((pokemon) => {
      if (pokemonToFind.toLowerCase() === pokemon.name.english.toLowerCase()) {
        setCurrentPokemon(pokemon);
      }
    });

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${currentPokemon.id}/`)
      .then((res) => res.json())
      .then((res) => setDescription(res.flavor_text_entries[1].flavor_text));
    fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon.id}/`)
      .then((res) => res.json())
      .then((res) =>
        setMeasurements({ height: res.height, weight: res.weight })
      );
  }

  const getPrevPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${currentPokemon.id - 1}/`)
      .then((res) => res.json())
      .then((res) => setDescription(res.flavor_text_entries[1].flavor_text));
    fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon.id - 1}/`)
      .then((res) => res.json())
      .then((res) =>
        setMeasurements({ height: res.height, weight: res.weight })
      );
      Pokelist.forEach((pokemon) => {
        if (currentPokemon.id - 1 === pokemon.id) {
          setCurrentPokemon(pokemon);
        }
      });
  }

  const getNextPokemon = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${currentPokemon.id + 1}/`)
      .then((res) => res.json())
      .then((res) => setDescription(res.flavor_text_entries[1].flavor_text));
    fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon.id + 1}/`)
      .then((res) => res.json())
      .then((res) =>
        setMeasurements({ height: res.height, weight: res.weight })
      );
    Pokelist.forEach((pokemon) => {
      if (currentPokemon.id + 1 === pokemon.id) {
        setCurrentPokemon(pokemon);
      }
    });
  };

  const makeTeam = (id) => {
    if (!team.includes(id)) {
      let newTeam = [...team, id]
    setTeam(newTeam)
    }
  }

  return (
    <div>
      <Header />
      <Topbar
        getJohtoPokemon={getJohtoPokemon}
        getHoennPokemon={getHoennPokemon}
        getKantoPokemon={getKantoPokemon}
        getSinnohPokemon={getSinnohPokemon}
      />
      <Filter filterPokemon={filterPokemon}/>
      <SortDex
        pokedex={pokedex}
        popUp={popUp}
        setCurrentPokemon={setCurrentPokemon}
        currentPokemon={currentPokemon}
        setDescription={setDescription}
        setMeasurements={setMeasurements}
        getThatPokemon={getThatPokemon}
        Pokelist={Pokelist}
        filterPokemon={filterPokemon}
      />

      <YourTeam team={team}/>

      <PokemonList
        popUp={popUp}
        loadMore={loadMore}
        pokedex={pokedex}
        visible={visible}
        assignCurrentPokemon={assignCurrentPokemon}
        setDescription={setDescription}
        setMeasurements={setMeasurements}
      />

      <div className="button-div">
        {visible < pokedex.length ? (
          <button className="button-load" onClick={loadMore}>
            Load More
          </button>
        ) : null}
      </div>
      {modal ? (
        <React.Fragment>
          <div className="screen">
            <Modal
              makeTeam={makeTeam}
              setTeam={setTeam}
              pokedex={Pokelist}
              className="modal"
              description={description}
              popUp={popUp}
              currentPokemon={currentPokemon}
              measurements={measurements}
              getNextPokemon={getNextPokemon}
              getPrevPokemon={getPrevPokemon}
            />
          </div>
        </React.Fragment>
      ) : null}
      <footer>
        <Footer className="foot" />
      </footer>
    </div>
  );
};
export default App;
