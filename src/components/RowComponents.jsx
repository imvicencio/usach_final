import { useEffect, useState } from "react";
import PokemonComponents from "./PokemonComponents";
import Pokemon from "../Models/Pokemon";
import "./RowComponents.css";

const RowComponents = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        const data = await response.json();
        const parseData = data.results.map((pokemon, index) => {
          return new Pokemon(
            index + 1,
            pokemon.name,
            index + 1,
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
            pokemon.url
          );
        });
        setPokemonData(parseData);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, []);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row-components">
      {pokemonData.map((data) => (
        <PokemonComponents key={data.getId} pokemon={data} />
      ))}
    </div>
  );
};

export default RowComponents;
