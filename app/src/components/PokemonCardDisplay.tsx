import { PokemonCard } from './types/PokemonCard';

interface PokemonCardComponentProps {
  pokemonCard: PokemonCard | null;
}

function PokemonCardComponent({ pokemonCard }: PokemonCardComponentProps) {
  return pokemonCard ? (
    <div>
      <h1 className="text-3xl font-bold underline">{pokemonCard.name}</h1>
      <br />
      <img src={pokemonCard.images.small} alt={pokemonCard.name} />
      {/* Display other properties of the card as needed */}
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export { PokemonCardComponent };