import Home from "./pages/home"
import {BrowserRouter,Route,Routes,Link} from "react-router-dom"
import About from "./pages/about"
import { Footer } from "./comp/footer";
import { Navbar } from "./comp/navbar"
function App() {


  return (
   <>
   <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/about" element={<About/>}/>
        <Route
          path="/services"
          element={() => {
            window.location.href = "/route.html";
            return null;
          }}
        />

    </Routes>
    <Footer/>
   </BrowserRouter>

   </>
  )
}

export default App
