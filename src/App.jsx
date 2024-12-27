import { BrowserRouter as Router , Routes , Route} from  "react-router-dom"
import Home from "./components/Home"
import Courses from "./components/Courses"
import Contact from "./components/Contact"
import About from "./components/About"
import SignUp from "./components/SignUp"
import { AppContextProvider } from "./Context/AppContext"
import { useState } from "react"


function App() {

  const [showLogin , setLoginShow ]  = useState(false)

  const setShowLogin = (boolean)=>{
setLoginShow(boolean)
  }

  return(<>


<AppContextProvider value={{setShowLogin ,showLogin }} >

<Router>
<Routes>

<Route path="/" element={<Home/>} /> 
<Route path="/courses" element = {<Courses/>} /> 
<Route path ="/contact" element ={<Contact/>} /> 
<Route path="/about" element={<About/>} /> 
<Route path="/signup" element ={<SignUp/>} /> 

{/*404  */}
<Route path="*" element ={<NotFound/>} /> 


</Routes>
</Router>
</AppContextProvider>


  </>)
  
}

export default App



function NotFound(params) {

return(<>
<div className="h-screen w-full flex justify-center items-center ">
<h1 className="text-center text-3xl text-pink-500" >Page Not Found <br /> <span className="text-red-700" >:)</span> </h1>




</div>



</>)
  
}