import "./PokemonComponents.css";

const PokemonDetailsComponents = ({ id }) => {
  return (
    <div className="pokemon-deploy">
      <h1>{id}</h1>
    </div>
  );
};

PokemonDetailsComponents.propTypes = {
  id: Number,
};

export default PokemonDetailsComponents;
