import { NavLink } from "react-router-dom"
export default function AppHeader() {
    return (
        <header>

            <nav className="nav-bar mt-4">

                <ul className="nav  d-flex justify-content-center align-items-center ms-4" >
                    {/* <li><img src="" alt="" /></li> */}
                    <li className="link">
                        <NavLink className=" nav-item nav-link text-white" aria-current="page" to="/homepage"><small>HOMEPAGE</small></NavLink>
                    </li>
                    <li className="link">
                        <NavLink className="nav-item nav-link text-white" to="/prodotti"><small>PRODOTTI</small></NavLink>
                    </li>
                    <li className="link">
                        <NavLink className="nav-item nav-link text-white" to="/Chi-siamo"><small>CHI SIAMO</small></NavLink>
                    </li>

                    <li className="nav-item d-flex gap-3 text-white ms-3">
                        <i className="bi bi-heart" style={{ cursor: 'pointer' }} title="Preferiti"></i>
                        <i className="bi bi-bag" style={{ cursor: 'pointer' }} title="Borsa"></i>
                        <i className="bi bi-cart3" style={{ cursor: 'pointer' }} title="Carrello"></i>
                    </li>
                </ul>




            </nav>
            <hr />
        </header>

    )
}