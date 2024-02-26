// App.tsx
import { PokemonFetcher } from './components/PokemonFetcher';
import { PokemonCardComponent } from './components/PokemonCardDisplay';

function App() {
  const pokemonCard = PokemonFetcher();

  return (
    <div className="container mx-auto px-4">
      <PokemonCardComponent pokemonCard={pokemonCard} />
    </div>
  );
}

export default App;
