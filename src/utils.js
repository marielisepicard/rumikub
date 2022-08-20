import { sortBy } from "lodash";
import { COLORS } from "./constants";

export const createTiles = () => {
  let i = 1;
  const tiles = [
    { color: null, number: null, joker: true },
    { color: null, number: null, joker: true },
  ];

  while (i < 14) {
    tiles.push({ color: COLORS.BLUE, number: i });
    tiles.push({ color: COLORS.BLACK, number: i });
    tiles.push({ color: COLORS.RED, number: i });
    tiles.push({ color: COLORS.ORANGE, number: i });
    i++;
  }

  return sortBy(tiles, ["color", "number"]);
};
