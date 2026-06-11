import { Link, useOutletContext } from "react-router-dom";

const DirectorList = () => {
    // Replace me
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
