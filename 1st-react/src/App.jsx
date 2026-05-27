
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Layout from "./Component/Layout"
import Home from "./Component/Home"
import Footer from "./Component/Footer"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route index element={<Footer/>}/>

        </Route>
      </Routes>
    </BrowserRouter>



  )
}

export default App
