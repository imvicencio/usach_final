import Pokemon from "../Models/Pokemon";
import "./PokemonComponents.css";

const PokemonComponents = ({ pokemon }) => {
  return (
    <div className="card">
      <img src={pokemon.getImage} alt={pokemon.getName} />
      <div>
        <h4>
          {pokemon.getName} {pokemon.getExperience}
        </h4>
      </div>
    </div>
  );
};

PokemonComponents.propTypes = {
  pokemon: Pokemon,
};

export default PokemonComponents;
