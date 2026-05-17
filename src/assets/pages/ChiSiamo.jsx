import AppFooter from "../components/AppFooter"
import AppHeader from "../components/AppHeader"
AppFooter
export default function ChiSiamo() {
    return (
        <>
            <AppHeader className="bg-dark text-white" />
            <main className="text-center text-white pt-5 mt-3">

                <div className="m-auto px-4 pt-5" style={{ maxWidth: '950px' }}>


                    <p className="update fw-bold  mb-4" style={{ fontSize: '1.2rem', letterSpacing: '2px' }}>
                        REGISTRATI PER RICEVERE AGGIORNAMENTI
                    </p>


                    <h1 className=" mb-5 text-white" style={{ fontSize: '2rem', lineHeight: '1.4', fontWeight: '300' }}>
                        Ricevi aggiornamenti esclusivi sul lancio della collezione, comunicazioni personalizzate e scopri le ultime novità della Maison.
                    </h1>


                    <a href="#" className="btn text-white text-decoration-none " style={{ fontSize: '0.9rem' }}>
                        + Iscriviti
                    </a>

                </div>
            </main>
            <AppFooter />


        </>
    )
}