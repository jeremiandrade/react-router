import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter";

export default function Iscriviti() {
    const listaStati = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua e Barbuda", "Arabia Saudita", "Argentina", "Armenia", "Australia", "Austria", "Azerbaigian",
        "Bahamas", "Bahrein", "Bangladesh", "Barbados", "Belgio", "Belize", "Benin", "Bhutan", "Bielorussia", "Bolivia", "Bosnia ed Erzegovina", "Botswana", "Brasile", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
        "Cambogia", "Camerun", "Canada", "Capo Verde", "Ciad", "Cile", "Cina", "Cipro", "Città del Vaticano", "Colombia", "Comore", "Corea del Nord", "Corea del Sud", "Costa d'Avorio", "Costa Rica", "Croazia", "Cuba",
        "Danimarca", "Dominica",
        "Ecuador", "Egitto", "El Salvador", "Emirati Arabi Uniti", "Eritrea", "Estonia", "Eswatini", "Etiopia",
        "Fiji", "Filippine", "Finlandia", "Francia",
        "Gabon", "Gambia", "Georgia", "Germania", "Ghana", "Giamaica", "Giappone", "Gibilterra", "Gibuti", "Giordania", "Grecia", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guinea Equatoriale", "Guyana",
        "Haiti", "Honduras",
        "India", "Indonesia", "Iran", "Iraq", "Irlanda", "Islanda", "Isole Marshall", "Isole Salomone", "Israele", "Italia",
        "Kazakistan", "Kenya", "Kirghizistan", "Kiribati", "Kuwait",
        "Laos", "Lesotho", "Lettonia", "Libano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Lussemburgo",
        "Macedonia del Nord", "Madagascar", "Malawi", "Malesia", "Maldive", "Mali", "Malta", "Marocco", "Mauritania", "Mauritius", "Messico", "Micronesia", "Moldavia", "Monaco", "Mongolia", "Montenegro", "Mozambico", "Myanmar",
        "Namibia", "Nauru", "Nepal", "Nicaragua", "Niger", "Nigeria", "Norvegia", "Nuova Zelanda",
        "Oman",
        "Paesi Bassi", "Pakistan", "Palau", "Palestina", "Panama", "Papua Nuova Guinea", "Paraguay", "Perù", "Polonia", "Portogallo",
        "Qatar",
        "Regno Unito", "Repubblica Ceca", "Repubblica Centrafricana", "Repubblica del Congo", "Repubblica Democratica del Congo", "Repubblica Dominicana", "Romania", "Ruanda", "Russia",
        "Saint Kitts e Nevis", "Saint Lucia", "Saint Vincent e Grenadine", "Samoa", "San Marino", "São Tomé e Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Siria", "Slovacchia", "Slovenia", "Somalia", "Spagna", "Sri Lanka", "Stati Uniti d'America", "Sudafrica", "Sudan", "Sudan del Sud", "Suriname", "Svezia", "Svizzera",
        "Tagikistan", "Taiwan", "Tanzania", "Thailandia", "Timor Est", "Togo", "Tonga", "Trinidad e Tobago", "Tunisia", "Turchia", "Turkmenistan", "Tuvalu",
        "Ucraina", "Uganda", "Ungheria", "Uruguay", "Uzbekistan",
        "Vanuatu", "Venezuela", "Vietnam",
        "Yemen",
        "Zambia", "Zimbabwe"
    ];

    return (
        <>
            <AppHeader />

            <main className="container text-white pt-5">
                <form className="row g-3 mt-2">
                    <div className="col-md-6">
                        <label className="form-label">Name</label>

                        <input type="email" className="form-control" id="inputEmail4" placeholder="Name" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input type="password" className="form-control" placeholder="Last Name" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Email</label>

                        <input type="email" className="form-control" placeholder="email" />
                    </div>

                    <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="password" />
                    </div>


                    <div className="col-12">
                        <label className="form-label">Indirizzo</label>
                        <input type="text" className="form-control" placeholder="Via n." />
                    </div>

                    <div className="col-12">
                        <label className="form-label">Telefono</label>
                        <input type="text" className="form-control" placeholder="+39" />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">Citta</label>
                        <input type="text" className="form-control" placeholder="..." />
                    </div>

                    <div className="col-md-4">
                        <label className="form-label">Stato</label>
                        <select id="inputState" className="form-select">
                            <option defaultValue>...</option>
                            {
                                listaStati.map((item, index) => (
                                    <option key={index}>{item}</option>
                                ))
                            }

                        </select>
                    </div>

                    <div className="col-md-2">
                        <label className="form-label">Cap</label>
                        <input type="text" className="form-control" placeholder="..." />
                    </div>

                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">

                            </label>
                        </div>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Inscriviti</button>
                    </div>
                </form>
            </main>

            <AppFooter />
        </>

    )
}