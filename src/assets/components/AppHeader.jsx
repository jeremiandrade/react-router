import { NavLink } from "react-router-dom"
export default function AppHeader() {
    return (
        <header>

            <nav className="nav-bar">

                <ul className="nav justify-content-center">
                    {/* <li><img src="" alt="" /></li> */}
                    <li className="link">
                        <NavLink className=" nav-item nav-link " aria-current="page" to="/homepage">Homepage</NavLink>
                    </li>
                    <li className="link">
                        <NavLink className="nav-item nav-link" to="/prodotti">Prodotti</NavLink>
                    </li>
                    <li className="link">
                        <NavLink className="nav-item nav-link" to="/Chi-siamo">Chi Siamo</NavLink>
                    </li>
                </ul>
            </nav>
            <hr />
        </header>

    )
}