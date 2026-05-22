import { NavLink } from "react-router-dom"
export default function AppFooter() {
    return (
        <footer className="text-white pt-5 mt-5 w-100 ">
            <hr />
            <div className=" d-flex justify-content-around mt-5">

                <ul className="list-unstyled">
                    <li><p><small>POSSIAMO AIUTARTI?</small></p></li>
                    <li><NavLink to="/prodotti">Prodotti</NavLink></li>
                    <li><NavLink to="/chi-siamo">Chi Siamo</NavLink></li>
                    <li><NavLink to="#">Contatti</NavLink></li>
                    <li><NavLink to="#">Il mio ordine</NavLink></li>
                    <li><NavLink to="#">Domande Frequenti</NavLink></li>
                    <li><NavLink to="#">Disiscrizione NewsLetter</NavLink></li>
                    <li><NavLink to="#">Garanzia legale</NavLink></li>
                    <li><NavLink to="#">Diritto di Recesso</NavLink></li>
                </ul>

                <ul>
                    <p> <small>I NOSTRI SOCIAL</small></p>
                    <ul className="list-unstyled">
                        <li><i className="bi bi-whatsapp"></i></li>
                        <li><i className="bi bi-instagram"></i></li>
                        <li><i className="bi bi-facebook"></i></li>
                        <li><i className="bi bi-twitter-x"></i></li>
                        <li><i className="bi bi-youtube"></i></li>

                    </ul>
                </ul >
                <ul>

                    <ul>
                        <ul className="list-unstyled">
                            <li><p><small>INFORMAZIONI AZIENDALI</small></p></li>
                            <li><NavLink to="#">Codice Etico</NavLink></li>
                            <li><NavLink to="#">Lavora con noi </NavLink></li>
                            <li><NavLink to="#">Area Legale</NavLink></li>
                            <li><NavLink to="#">Informativa sulla Privacy</NavLink></li>
                        </ul>

                    </ul>
                </ul>
            </div>
            <div className=" d-flex justify-content-around mt-5">

                <ul className="list-unstyled">
                    <li><p><small>SERVIZI INCLUSI</small></p></li>
                    <li><NavLink to="/prodotti">Scopri i Nostri Servizi</NavLink></li>
                    <li><NavLink to="/chi-siamo">Prenota un Appuntamento</NavLink></li>
                    <li><NavLink to="#">Ritiro in Negozio</NavLink></li>
                </ul>

                <ul className="list-unstyled">
                    <li><p><small>IMPOSTAZIONI COOKIE</small></p></li>
                    <li><NavLink to="#"> Informazioni Societarie</NavLink></li>
                    <li><NavLink to="#"> Accessibilità</NavLink></li>
                </ul>


                <ul>
                    <p><small>RESTA CONNESSO</small></p>
                    <ul className="list-unstyled">
                        <li>Copyright © 2026 ... Inc. Tutti i diritti riservati.</li>

                    </ul>
                </ul>
            </div>

        </footer >
    )
}