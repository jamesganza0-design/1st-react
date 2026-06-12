
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Component/Layout"
import Home from "./Component/Home"
import Catalog from "./Component/catalog"
import Blog from "./Component/Blog"
import AboutUs from "./Component/About Us"





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />}/>
          <Route path="/Blog" element={<Blog />}/>
          <Route path="/AboutUs" element={<AboutUs />}/>
          
        </Route>
        
      </Routes>
    </BrowserRouter>



  )
}

export default App
