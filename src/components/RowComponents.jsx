import { useEffect, useState } from "react";
import PokemonComponents from "./PokemonComponents";
import Pokemon from "../Models/Pokemon";
import "./RowComponents.css";
import ReactPaginate from "react-paginate";

const RowComponents = () => {
  const [pokemonData, setPokemonData] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 10;
  const maxPokemon = 150;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${
            currentPage * perPage
          }}`
        );
        const data = await response.json();
        const parseData = data.results.map((pokemon, index) => {
          return new Pokemon(
            currentPage * perPage + index + 1,
            pokemon.name,
            0,
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              currentPage * perPage + index + 1
            }.png`,
            pokemon.url,
            0,
            0,
            ""
          );
        });
        setPokemonData(parseData);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row">
      <div className="row-components">
        {pokemonData.map((data) => (
          <PokemonComponents key={data.getId} pokemon={data} />
        ))}
      </div>
      <div className="paginator">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={Math.ceil(maxPokemon / perPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={({ selected }) => setCurrentPage(selected)}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};

export default RowComponents;
