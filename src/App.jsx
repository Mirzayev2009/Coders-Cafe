import AppBanner from "./components/AppBanner/AppBanner"
import Hero from "./components/hero/Hero"
import Services from "./components/services/Services"
import WhereToBuy from "./components/whereToBuy/WhereToBuy"


function App() {


  return (
    <div className=" overflow-x-hidden  ">
      <Hero/>
      <Services/>
      <WhereToBuy/>
      <AppBanner/>
    </div>
  )
}

export default App
