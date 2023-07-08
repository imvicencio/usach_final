import Pokemon from "../Models/Pokemon";

const PokemonComponents = ({ pokemon }) => {
  return (
    <div>
      <h1>My PokemonComponents Component</h1>
      <div>
        <h4>
          {pokemon.getName} {pokemon.getExperience} {pokemon.getImage}
        </h4>
        <img src={pokemon.getImage} alt={pokemon.getName} />
      </div>
    </div>
  );
};

PokemonComponents.propTypes = {
  pokemon: Pokemon,
};

export default PokemonComponents;
