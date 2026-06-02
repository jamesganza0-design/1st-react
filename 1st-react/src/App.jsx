
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Component/Layout"
import Home from "./Component/Home"
import Catalog from "./Component/catalog"
import Pages from "./Component/Pages"





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />}/>
          <Route path="/Pages" element={<Pages />}/>

          
        </Route>
        
      </Routes>
    </BrowserRouter>



  )
}

export default App
