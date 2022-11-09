import "./App.css";
import React, { useState } from "react";

import { moviesData } from "./Data";
import { Movielist } from "./Movielist";

function App() {
  const [MovieData, setMovieData] = useState(moviesData);
  // ici on va debuter les fonctions
  const handledelete = (ID) => {
    setMovieData(MovieData.filter((e) => e.id !== ID));
  };
  return (
    <div className="App">
      <Movielist MovieData={MovieData} handledelete={handledelete} />
    </div>
  );
}

export default App;