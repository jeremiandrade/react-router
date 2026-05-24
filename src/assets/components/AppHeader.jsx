import { NavLink } from "react-router-dom"
import { useBudget } from "../../contexts/BudgetContext"
export default function AppHeader() {



    // All’interno della Navbar aggiungete un bottone “Modalità Budget” che attiva/disattiva budgetMode con un click
    // Il bottone deve cambiare etichetta in base allo stato (Attiva Modalità Budget / Disattiva Modalità Budget)
    // MILESTONE 3

    // Modificate la pagina dei prodotti:

    // Recuperate il valore budgetMode usando il context
    // Se budgetMode === true, mostrate solo i prodotti con price <= 30
    // Altrimenti, mostrare tutti i prodotti normalmente

    const { budgetMode, setBudgetMode } = useBudget();


    function btnChange() {
        setBudgetMode(!budgetMode)


    }


    return (
        <header>

            <nav className="nav-bar mt-4">

                <ul className="nav  d-flex justify-content-center align-items-center ms-4" >

                    <li className="link">
                        <NavLink className=" nav-item nav-link text-white" aria-current="page" to="/homepage"><small>HOMEPAGE</small></NavLink>
                    </li>
                    <li className="link">
                        <NavLink className="nav-item nav-link text-white" to="/prodotti"><small>PRODOTTI</small></NavLink>
                    </li>
                    <li className="link">
                        <NavLink className="nav-item nav-link text-white" to="/Chi-siamo"><small>CHI SIAMO</small></NavLink>
                    </li>
                    <li>
                        <button className="btn btn-warning text-white" onClick={btnChange} >{budgetMode ? " Budget Mode on" : " Budget Mode off"}</button>
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