import { MovieDetails } from "./pages/MovieDetails";
import styles from "./styles/App.module.css"
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    Navigate
} from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";


export default function App() {
    return (
    <Router>
        <header>
            <Link to="/">
                <h1 className={styles.title}>Movies</h1>
            </Link>
        </header>
        <main>
           <Routes>
                <Route path="/movies/:movieId" element={ <MovieDetails/> } />
                <Route path="/" element={ <LandingPage/> } />
                <Route path="*" element={ <Navigate replace to="/"/> } />
           </Routes>
        </main>
    </Router>
    )
}
