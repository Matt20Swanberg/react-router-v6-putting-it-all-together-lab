import { Link, Outlet, useOutletContext, useParams } from "react-router-dom"

/**
 * Displays details for a single director.
 *
 * Uses the route parameter to locate the selected director
 * and provides that director to nested movie routes.
 */
function DirectorCard() {

    const { directors, setDirectors } = useOutletContext();

    // Retrieve the director id from the URL
    const { id } = useParams();
    const director = directors.find(director => director.id === id)

    if (!director) {
        return <h2>Director not found.</h2>
    }

    return (
        <div>
            <h2>{director.name}</h2>
            <p>{director.bio}</p>
            <h3>Movies:</h3>
            <ul>
                {director.movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to={`movies/new`}>Add New Movie</Link>

            {/* Provide director data to nested movie routes */}
            <Outlet context={{ director, setDirectors }} />
        </div>
    )
}

export default DirectorCard
