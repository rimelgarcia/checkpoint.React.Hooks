
const MovieCard = ({ movie }) => {
    return (
      <div className="movie-card">
        <img src={movie.posterURL} alt={movie.title} 
         style={{ width: "200px", height: "300px", objectFit: "cover", borderRadius: "8px" }} />
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <span>⭐ {movie.rating}</span>
      </div>
    );
  };
  
  export default MovieCard; // Ensure export is present