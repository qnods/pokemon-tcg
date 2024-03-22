interface Card {
    id: number;
    name: string;
    images: {
        small: string;
        large: string;
    };
    tcgplayer: {
        updatedAt: string;
        prices: {
            averageSellPrice: number;
            holofoil: {
                low: number;
                mid: number;
                high: number;
                market: number;
                directLow: number;
            };
            reverseHolofoil: {
                low: number;
                mid: number;
                high: number;
                market: number;
                directLow: number;
            };
        };
    };
  }

export type {Card};