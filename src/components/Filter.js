import { useState } from "react";

const Filter = ({ applyFilter }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Rechercher par titre..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rechercher par note..."
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={() => applyFilter(title, rating)}>Appliquer le filtre</button>
    </div>
  );
};

export default Filter;