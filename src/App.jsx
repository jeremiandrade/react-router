import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./assets/pages/HomePage";
import AppProdotti from "./assets/pages/AppProdotti";
import ChiSiamo from "./assets/pages/ChiSiamo";
import Iscriviti from "./assets/pages/Inscriviti";
import PageId from "./assets/pages/PageId";
import ErrorPage from "./assets/pages/ErrorPage";
import BudgetContext from "./contexts/BudgetContext";
function App() {



  // MILESTONE 1


  // Deve contenere uno stato budgetMode di tipo booleano (true/false)
  // Deve fornire anche la funzione per modificarlo (setBudgetMode)
  // Wrappiamo l’intera applicazione con il BudgetProvider

  // MILESTONE 2

  // Create un componente Navbar.jsx (se non lo avete già)

  // Inseritelo in App.jsx (oppure nel vostro componente di layout se avete organizzato l’app in questo modo)
  // All’interno della Navbar aggiungete un bottone “Modalità Budget” che attiva/disattiva budgetMode con un click
  // Il bottone deve cambiare etichetta in base allo stato (Attiva Modalità Budget / Disattiva Modalità Budget)
  // MILESTONE 3

  // Modificate la pagina dei prodotti:

  // Recuperate il valore budgetMode usando il context
  // Se budgetMode === true, mostrate solo i prodotti con price <= 30
  // Altrimenti, mostrare tutti i prodotti normalmente

  // BONUS

  //  Trasformare la modalità budget in un vero e proprio filtro:

  // Trasformate il booleano budgetMode in un valore numerico maxPrice (es.30, 50ecc). Il valore di partenza deve essere null .
  // Nel componente navbar al posto del bottone inserite un campo input di tipo number. Questo campo deve essere legato al valore maxPrice del context
  // Nella pagina prodotti, verranno mostrati soltanto i prodotti con price <= maxPrice
  // ‼️Se max price è null o comunque non è settato, devono essere visualizzati tutti i prodotti


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/prodotti" element={<AppProdotti />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/Inscriviti" element={<Iscriviti />} />
          <Route path="/pageid/:id" element={<PageId />} />
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}


export default App
