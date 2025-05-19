import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "/images/inception.jpg",
      rating: 9,
    },
    {
      title: "Interstellar",
      description: "A space adventure beyond imagination.",
      posterURL: "/images/interstellar.jpg",
      rating: 8.5,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const applyFilter = (title, rating) => {
    setFilteredMovies(
      movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(title.toLowerCase()) &&
          (rating ? movie.rating >= rating : true)
      )
    );
  };

  const addMovie = () => {
    const newMovie = {
      title: "New Movie",
      description: "Exciting new adventure.",
      posterURL: "/images/new-movie.jpg",
      rating: 7,
    };
    setMovies([...movies, newMovie]);
    setFilteredMovies([...movies, newMovie]); // Updates the filtered list as well
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter applyFilter={applyFilter} />
      <MovieList movies={filteredMovies} />
      <button onClick={addMovie}>Add Movie</button>
    </div>
  );
};

export default App;
