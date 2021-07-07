// import { BrowserRouter as Router, Route } from "react-router-dom"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                <h1>Hackflix</h1>
                            </Link>
                        </li>

                        <li>
                            <Link to="/tv-shows">
                                Tv-Shows
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="/movies">
                                Movies
                            </Link>
                        </li>

                        <li>
                            <Link to="/my-list">
                                My List
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
    )

    
}

export default Navbar