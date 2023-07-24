import { useEffect, useState } from "react";
import Modal from "react-modal";
import Pokemon from "../Models/Pokemon";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
};

const PokemonDetailsComponents = ({ isOpen, closeModal, pokemonId }) => {
  const [pokemonDetailsData, setPokemonDetailsData] = useState(0);
  useEffect(() => {

    if (isOpen && pokemonId) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
          );
          const data = await response.json();
          const parseData = new Pokemon(
            data.id,
            data.name,
            data.base_experience,
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
            `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
            data.weight,
            data.height,
            data.types[0].type.name
          );
          setPokemonDetailsData(parseData);
        } catch (error) {
          console.error("Error fetching Pokemon data:", error);
        }
      };

      fetchData();
    }
  }, [isOpen, pokemonId]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <h2>{pokemonDetailsData.getName}</h2>
      <img src={pokemonDetailsData.getImage} alt={pokemonDetailsData.getName} />
      <p> Pokemon experience: {pokemonDetailsData.getExperience} </p>
      <p> Pokemon height: {pokemonDetailsData.getHeight} </p>
      <p> Pokemon weight: {pokemonDetailsData.getWeight} </p>
      <p> Pokemon type: {pokemonDetailsData.getTypes} </p>
      <button onClick={closeModal}>Close Modal</button>
    </Modal>
  );
};

PokemonDetailsComponents.propTypes = {
  pokemonId: Number,
  closeModal: Function,
  pokemonDetailsData: Pokemon,
};

export default PokemonDetailsComponents;
