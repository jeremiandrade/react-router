import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./assets/pages/HomePage";
import AppProdotti from "./assets/pages/AppProdotti";
import ChiSiamo from "./assets/pages/ChiSiamo";
import Iscriviti from "./assets/pages/Inscriviti";
import PageId from "./assets/pages/PageId";
import ErrorPage from "./assets/pages/ErrorPage";
import { BudgetProvider } from "./contexts/BudgetContext";
function App() {



  // BONUS

  //  Trasformare la modalità budget in un vero e proprio filtro:

  // Trasformate il booleano budgetMode in un valore numerico maxPrice (es.30, 50ecc). Il valore di partenza deve essere null .
  // Nel componente navbar al posto del bottone inserite un campo input di tipo number. Questo campo deve essere legato al valore maxPrice del context
  // Nella pagina prodotti, verranno mostrati soltanto i prodotti con price <= maxPrice
  // ‼️Se max price è null o comunque non è settato, devono essere visualizzati tutti i prodotti


  return (
    <>
      <BudgetProvider>

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
      </BudgetProvider>

    </>
  )
}


export default App
