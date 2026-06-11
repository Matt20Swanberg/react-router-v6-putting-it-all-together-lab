import { useOutletContext, useParams } from "react-router-dom";

/**
 * Displays details for a single movie.
 *
 * Uses route parameters and outlet context to locate
 * the selected movie belonging to the current director.
 */
function MovieCard() {

  const { director } = useOutletContext();
  const { movieId } = useParams();

  const movie = director.movies.find(
    movie => movie.id === movieId
  )

  if (!director) return <h2>Director not found.</h2>

  if (!movie) return <h2>Movie not found.</h2>

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>⏱️ Duration: {movie.time} minutes</p>
      <p>🎬 Genres: {movie.genres.join(", ")}</p>
    </div>
  )
}

export default MovieCard
