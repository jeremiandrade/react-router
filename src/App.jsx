import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./assets/pages/HomePage";
import AppProdotti from "./assets/pages/AppProdotti";
import ChiSiamo from "./assets/pages/ChiSiamo";
function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/prodotti" element={<AppProdotti />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}


export default App
