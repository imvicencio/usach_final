import { useEffect, useState } from "react";
import Modal from "react-modal";
import Pokemon from "../Models/Pokemon";
import "./PokemonDetailsComponents.css";

const PokemonDetailsComponents = ({ isOpen, closeModal, pokemonId }) => {
  const [pokemonDetailsData, setPokemonDetailsData] = useState(0);
  const [modalBackground, setModalBackground] = useState("black"); 

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

          setModalBackground(getBackgroundColorForType(data.types[0].type.name));
        } catch (error) {
          console.error("Error fetching Pokemon data:", error);
        }
      };

      fetchData();
    }
  }, [isOpen, pokemonId]);

 
  const getBackgroundColorForType = (type) => {
    switch (type) {
      case "normal":
        return "#A8A77A";
      case "fighting":
        return "#C22E28";
      case "flying":
        return "#A98FF3";
      case "poison":
        return "#A33EA1";
      case "ground":
        return "#E2BF65";
      case "rock":
        return "#B6A136";
      case "bug":
        return "#A6B91A";
      case "ghost":
        return "#735797";
      case "steel":
        return "#B7B7CE";
      case "fire":
        return "#EE8130";
      case "water":
        return "#6390F0";
      case "grass":
        return "#7AC74C";
      case "electric":
        return "#F7D02C";
      case "psychic":
        return "#F95587";
      case "ice":
        return "#96D9D6";
      case "dragon":
        return "#6F35FC";
      case "dark":
        return "#705746";
      case "fairy":
        return "#D685AD";
      case "unknown":
        return "#68A090";
      case "shadow":
        return "#4D4656"; 
      default:
        return "black";
    }
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      backgroundColor: modalBackground, 
      border: "solid white",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Pokémon Modal"
    >
      <h2 className="">{pokemonDetailsData.getName}</h2>
      <img src={pokemonDetailsData.getImage} alt={pokemonDetailsData.getName} />
      <p> Pokemon Experience: {pokemonDetailsData.getExperience} </p>
      <p> Pokemon Height: {pokemonDetailsData.getHeight} </p>
      <p> Pokemon Weight: {pokemonDetailsData.getWeight} </p>
      <p> Pokemon Type: {pokemonDetailsData.getTypes} </p>
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
