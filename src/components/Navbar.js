import { Link } from "react-router-dom"
import Search from "./Search"

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
                                TV Shows
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
                    <div>
                        {/* <Search /> */}
                    </div>
                </nav>
            </header>
    )

    
}

export default Navbar