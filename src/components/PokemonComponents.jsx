import Pokemon from "../Models/Pokemon";
import "./PokemonComponents.css";
import { useState } from "react";
import PokemonDetailsComponents from "./PokemonDetailsComponents";

const PokemonComponents = ({ pokemon }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pokemonId, setPokemonId] = useState("");

  const openModal = (id) => {
    setPokemonId(id);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <img
        src={pokemon.getImage}
        alt={pokemon.getName}
        onClick={() => openModal(pokemon.getId)}
      />
      <div>
        <h4>
          {pokemon.getName} {pokemon.getId}
        </h4>
      </div>
      <PokemonDetailsComponents
        isOpen={modalIsOpen}
        closeModal={closeModal}
        pokemonId={pokemonId}
      />
    </div>
  );
};

PokemonComponents.propTypes = {
  pokemon: Pokemon,
};

export default PokemonComponents;
