import { NavLink } from "react-router-dom"
export default function AppFooter() {
    return (
        <footer>
            <div className=" d-flex justify-content-around mt-5">

                <ul>
                    <li><p><small>POSSIAMO AIUTARTI</small></p></li>
                    <li></li>
                    <li></li>
                    <li><NavLink to="#">Contatti</NavLink></li>

                </ul>

                <ul>
                    <p><small>I NOSTRI SOCIAL</small></p>
                    <ul>
                        <li><i className="bi bi-whatsapp"></i></li>
                        <li><i className="bi bi-instagram"></i></li>
                        <li><i className="bi bi-facebook"></i></li>
                        <li><i className="bi bi-twitter-x"></i></li>
                        <li><i className="bi bi-youtube"></i></li>

                    </ul>
                </ul>
                <ul>
                    <p><small>RESTA CONNESSO</small></p>
                    <ul>
                        <li>Copyright © 2026 ... Inc. Tutti i diritti riservati.</li>

                    </ul>
                </ul>
            </div>
            <div className=" d-flex justify-content-around mt-5">

                <ul>
                    <li><p><small>POSSIAMO AIUTARTI</small></p></li>
                    <li><NavLink to="/prodotti">Prodotti</NavLink></li>
                    <li><NavLink to="/chi-siamo">Chi Siamo</NavLink></li>
                    <li><NavLink to="#">Contatti</NavLink></li>

                </ul>

                <ul>
                    <p><small>I NOSTRI SOCIAL</small></p>
                    <ul>
                        <li><i className="bi bi-whatsapp"></i></li>
                        <li><i className="bi bi-instagram"></i></li>
                        <li><i className="bi bi-facebook"></i></li>
                        <li><i className="bi bi-twitter-x"></i></li>
                        <li><i className="bi bi-youtube"></i></li>

                    </ul>
                </ul>
                <ul>
                    <p><small>RESTA CONNESSO</small></p>
                    <ul>
                        <li>Copyright © 2026 ... Inc. Tutti i diritti riservati.</li>

                    </ul>
                </ul>
            </div>

            {/* <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                    </div>
                    <img src="Name " alt="" />
                </div> */}
        </footer >
    )
}