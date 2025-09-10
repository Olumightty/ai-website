import Brands from "./components/Brands"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"


function App() {
  return(
    <div className="bg-[#040C18] px-20 py-10">
       <NavBar/>
       <Hero/>
       <Brands/>
    </div>
  )
}

export default App
