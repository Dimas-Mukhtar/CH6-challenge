import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import CarsPage from "./pages/Cars"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cars" element={<CarsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
