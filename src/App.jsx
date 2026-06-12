import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DirectorContainer from "./pages/DirectorContainer";
import DirectorList from "./pages/DirectorList";
import DirectorCard from "./pages/DirectorCard";
import DirectorForm from "./pages/DirectorForm";
import MovieCard from "./pages/MovieCard";
import MovieForm from "./pages/MovieForm";

/**
 * Root application component.
 *
 * Defines all client-side routes for the Movie Directory app,
 * including nested director and movie routes.
 */
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                <Route path="/directors" element={<DirectorContainer />}>
                    <Route index element={<DirectorList />} />
                    <Route path="new" element={<DirectorForm />} />
                    <Route path=":id" element={<DirectorCard />}>
                        <Route path="movies/new" element={<MovieForm />} />
                        <Route path="movies/:movieId" element={<MovieCard />} />
                    </Route>
                </Route>
            </Routes >
        </BrowserRouter>
    )
}

export default App