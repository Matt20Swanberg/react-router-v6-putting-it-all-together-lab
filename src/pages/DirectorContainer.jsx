import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from "react-router-dom"

/**
 * Parent route for all director-related pages.
 *
 * Fetches and stores director data and provides it to
 * child routes through Outlet context.
 */
const DirectorContainer = () => {
    const [directors, setDirectors] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/directors")
            .then(r => {
                if (!r.ok) { throw new Error("failed to fetch directors") }
                return r.json()
            })
            .then(setDirectors)
            .catch(console.log)
    }, [])

    return (
        <>
            <NavBar />
            <main>
                <h1>Welcome to the Director's Directory!</h1>

                {/* Provide director data to nested movie routes */}
                <Outlet context={{ directors, setDirectors }} />
            </main>
        </>
    );
}

export default DirectorContainer;
