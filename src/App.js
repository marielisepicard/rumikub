import React, { useState, useEffect } from "react";
import "./App.css";
import { createTiles } from "./utils";

function App() {
  const [tiles, setTiles] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // initialize tiles when app is launched.
    setTiles(createTiles());
  }, []);

  return (
    <div className="App">
      {tiles.map((tile, index) => (
        <div
          key={index}
          className={`Tile ${tile.color ? tile.color : "joker"}`}
        >
          {tile.number ? tile.number : "joker"}
        </div>
      ))}
    </div>
  );
}

export default App;
