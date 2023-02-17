import Benifits from "./benifits/benifits"
import Header from "./header/header"
import Popular from "./popular/popular"
import Sectio1 from "./section1/section"
import Service from "./service/service"
import {Popular as Popular2} from "./popular2/popular"
import FAQ from "./FAQ/FAQ"
function App() {

  return (
   <>
   <Header/>
   <Sectio1/>
   <Popular/>
   <Service/>
   <Benifits/>
   <Popular2/>
   <FAQ/>
   </>
  )
}

export default App
