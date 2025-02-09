import AppBanner from "./components/AppBanner/AppBanner"
import Hero from "./components/hero/Hero"
import Footer from "./components/Footer/Footer"
import Services from "./components/services/Services"
import WhereToBuy from "./components/whereToBuy/WhereToBuy"


function App() {


  return (
    <div className=" overflow-x-hidden  ">
      <Hero/>
      <Services/>
      <WhereToBuy/>
      <AppBanner/>
      <Footer/>
    </div>
  )
}

export default App
