
import { Hero } from "../comp/hero"
import {Card} from "../comp/card";
import { Feed } from "../comp/feed";
import { Features } from "../comp/features";
import { Benefits } from "../comp/benefits";
import { Footer } from "../comp/footer";
import { Navbar } from "../comp/navbar"

function Home() {


  return (
    <div className="overflow-y-auto">
    <Hero/>
    <Features/>
    <Benefits/>
    <Feed/>
  
    </div>
  )
}

export default Home
