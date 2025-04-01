
import { Hero } from "./components/hero"
import { Navbar } from "./components/navbar"
import {Card} from "./components/card";
import { Feed } from "./components/feed";
import { Features } from "./components/features";
import { Benefits } from "./components/benefits";
import { Footer } from "./components/footer";

function App() {


  return (
    <div className="overflow-y-auto">
    <Navbar/>
    <Hero/>
    <Features/>
    <Benefits/>
    <Feed/>
    <Footer/>
    </div>
  )
}

export default App
