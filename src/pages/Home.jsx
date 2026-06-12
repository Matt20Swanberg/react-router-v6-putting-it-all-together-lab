import NavBar from "../components/NavBar"
import { Link } from "react-router-dom"

/**
 * Landing page for the Movie Directory application.
 *
 * Provides users with navigation to key application sections.
 */
function Home() {
  return (
    <>
      <NavBar />
      <main>
        <h1>🎬 Welcome to the Movie Directory 🎥</h1>
        <p>
          Explore a collection of famous directors and their iconic movies. Click
          below to start exploring!
        </p>
        <nav>
          {/* add links for directors page and about page */}
          <Link to={`directors`}>View Directors</Link> |{" "}
          <Link to={`about`}>Learn More About This App</Link>
        </nav>
      </main>
    </>
  )
}

export default Home
