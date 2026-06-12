import { Link, useOutletContext } from "react-router-dom";

/**
 * Displays a list of directors.
 *
 * Receives director data from Outlet context and renders
 * links to individual director pages.
 */
const DirectorList = () => {

    const { directors } = useOutletContext()

    const displayDirectors = directors.map((director) => (
        <li key={director.id}>
            <Link to={director.id}>
                {director.name}
            </Link>
        </li>
    ))

    return (
        <ul>
            {displayDirectors}
        </ul>
    );
}

export default DirectorList;
