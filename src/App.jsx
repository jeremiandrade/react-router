import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./assets/pages/HomePage";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/prodotti" element={<h1>prodotti</h1>} />
          <Route path="/chi siamo" element={<h1>chi Siamo</h1>} />
        </Routes>
      </BrowserRouter>




    </>
  )
}

export default App
