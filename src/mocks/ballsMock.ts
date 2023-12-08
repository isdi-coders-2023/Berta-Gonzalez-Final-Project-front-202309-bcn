import { BallsStructure } from "../store/features/balls/types";

export const ballsMock: BallsStructure[] = [
  {
    _id: "656241b0c4ddfcae991f0b13",
    ballName: "Harry Potter crew",
    isAvailable: true,
    collection: "Harry Potter",
    shop: "Etsy",
    yearRelease: 2019,
    price: 15.99,
    imageUrl: "https://i.ibb.co/9nQ7X0R/harry-potter.webp",
    description:
      "Pack of Harry Potter Christmas balls, with the main cast. They are made of plush, filled with foam",
    isTengui: true,
  },
  {
    _id: "656241c6c4ddfcae991f4237",
    ballName: "My neighbor Totoro",
    isAvailable: true,
    collection: "My neighbor Totoro",
    shop: "Ebay",
    yearRelease: 2015,
    price: 20.5,
    imageUrl: "https://i.ibb.co/c1CykR8/totoro.webp",
    description: "My neighbor Totoro main cast glitter balls",
    isTengui: false,
  },
  {
    _id: "65624281c4ddfcae992147f9",
    ballName: "Mario Bros",
    isAvailable: false,
    collection: "Mario Bross",
    shop: "-",
    yearRelease: 2022,
    price: 11.2,
    imageUrl: "https://i.ibb.co/6rZYy4T/mario-bros.webp",
    description: "Mario Bross main cast handmaid balls",
    isTengui: true,
  },
];

export const ballAddMock: BallsStructure[] = [
  ballsMock[0],
  ballsMock[1],
  ballsMock[2],
  {
    _id: "65624190453433ror943",
    ballName: "Gremlins",
    isAvailable: true,
    collection: "Gremlins",
    shop: "Amazon",
    yearRelease: 2020,
    price: 30.99,
    imageUrl: "https://i.ibb.co/bQJ5gkZ/gremlins.webp",
    description: "Gremlins main cast plastic figures",
    isTengui: true,
  },
];
