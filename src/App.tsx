import { Outlet } from "react-router-dom"
import Navbar from "./components/shared/Navbar/Navbar"
import Footer from "./components/shared/Footer/Footer"
import ScrollTopToButton from "./components/shared/ScrollTopToButton/ScrollTopToButton"


function App() {
  
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      <ScrollTopToButton/>
    </>
  )
}

export default App
