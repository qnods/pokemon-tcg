interface PokemonCard {
  id: string;
  name: string;
  images: {
    small: string;
  };
}

export type { PokemonCard };