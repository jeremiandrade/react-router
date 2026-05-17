

import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"

export default function Homepage() {



    return (
        <>

            <AppHeader />

            <main>

                <div className="container my-4">

                    <div className="videoClip">
                        <video
                            src="https://www.pexels.com/download/video/7679830/"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-100 h-80 object-fit-cover"
                        />

                    </div>

                    <div className="p-5 bg-warning text-dark  rounded-3 text-center mt-5">


                        <h1 className=" mb-3">
                            🔥 SCONTO DEL GIORNO -20% 🔥
                        </h1>


                        <p className="lead mb-4">
                            Solo per oggi, ricevi uno sconto speciale del 20% su tutti i prodotti del nostro catalogo!
                        </p>
                        <p className="lead mb-4">
                            Utilizzando il codice <span className="bg-light text-dark border border-white fw-bold px-3 py-1 mx-2 rounded ">
                                SUMMERDAY ⛱️ </span> avrai un ulteriore 10% di sconto al check-out!
                        </p>


                        <a href="/prodotti" className="btn btn-light btn-lg text-danger px-4">
                            Guarda i Prodotti 🛍️
                        </a>

                    </div>
                </div>

                <hr />
            </main>


            <AppFooter />













        </>
    )

}