import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"
import { NavLink } from "react-router-dom"

export default function ErrorPage() {
    return (
        <>
            <AppHeader />

            <main>
                <div className="error">



                    <div className="404">
                        <h1> 404</h1>
                        <h3>Page Not Found</h3>
                        <p>alternatively you can visit <NavLink to="/prodotti">our Products</NavLink> or return to the <NavLink to="/">Homepage</NavLink></p>
                    </div>
                </div>
            </main>


            <AppFooter />
        </>
    )
}