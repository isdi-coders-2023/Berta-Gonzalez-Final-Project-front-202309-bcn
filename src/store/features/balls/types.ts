export interface BallsStructure {
  _id: string;
  ballName: string;
  isAvailable: boolean;
  collection: string;
  shop: string;
  yearRelease: number;
  price: number;
  imageUrl: string;
  description: string;
  isTengui: boolean;
}

export type BallWithoutId = Omit<BallsStructure, "_id">;

export interface BallsStateStructure {
  balls: BallsStructure[];
}
