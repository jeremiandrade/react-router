
import { useState, useEffect } from "react"
export default function Homepage() {



    const api_url = ('https://fakestoreapi.com/products')
    const [Prodotti, setProdotti] = useState([])

    useEffect(() => {

        fetch(api_url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProdotti(data)
            })
    }, [])
    return (
        <>
            <header>

                <nav className="nav-bar">

                    <ul className="nav justify-content-center">
                        <li><img src="" alt="" /></li>
                        <li className="link">
                            <a className=" nav-item nav-link active" aria-current="page" href="/homepage">Homepage</a>
                        </li>
                        <li className="link">
                            <a className="nav-item nav-link" href="/prodotti">Prodotti</a>
                        </li>
                        <li className="link">
                            <a className="nav-item nav-link" href="/Chi-siamo">Chi Siamo</a>
                        </li>
                    </ul>
                </nav>
                <hr />
            </header>

            {/* main */}
            <main>
                <div className="d-flex m-5">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {Prodotti.map(item => (
                            <div className="col" key={item.id}>
                                <div className="card">
                                    <img src="" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>

                        ))

                        }

                    </div>
                </div>

            </main>

            {/* footer */}
            <footer>
                <div className="d-flex">

                    <ul>
                        <li><p>POSSIAMO AIUTARTI</p></li>
                        <li><a href="/prodotti">Prodotti</a></li>
                        <li><a href="/chi siamo">Chi Siamo</a></li>
                        <li><a href="#">Contatti</a></li>

                    </ul>

                    <ul>
                        <p>I NOSTRI SOCIAL</p>
                        <ul>
                            <li><i className="bi bi-whatsapp"></i></li>
                            <li><i className="bi bi-instagram"></i></li>
                            <li><i className="bi bi-facebook"></i></li>
                            <li><i className="bi bi-twitter-x"></i></li>
                            <li><i className="bi bi-youtube"></i></li>
                        </ul>
                    </ul>
                    <ul>
                        <p>RESTA CONNESSO</p>
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










        </>
    )

}