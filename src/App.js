import Navbar from "./navbar"
import Home from "./home"
import Sociallinks from "./sociallinks"
import About from "./about"
import Experience from"./experience"
import Contact from "./contact"
import Projects from "./projects"
// import Gallery from "./gallery"
export default function App() {
  return (
   
    <div>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Experience></Experience>
    <Sociallinks></Sociallinks>
    <Projects></Projects>
    {/* <Gallery></Gallery> */}
    <Contact></Contact>
    </div>
  )
}
