import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Footer from './Footer'
import FreeBooks from './FreeBooks'

export default function Home() {
  return (<>

<div className="h-auto"> 
   <Navbar/>
<Banner/>
<FreeBooks/>
<Footer/>

</div>

</>  )
}
