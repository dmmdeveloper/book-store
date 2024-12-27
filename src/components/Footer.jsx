import React from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from './Navbar'
export default function Footer() {
return (<>
<hr />
<footer className='h-[150px] w-full p-10' >

<div className="w-[100%]  flex justify-center items-center gap-4">
{
    navLinks.map((l)=>{
        return(<>
        <Link key={l.id} className='text-[#0000008b] hover:text-pink-500 ' >{l.text}</Link>
        </>)
    })
}


</div>

<div className=" w-full flex items-center justify-center gap-10 mt-6 text-[25px] ">
<i class="fa-brands fa-twitter cursor-pointer hover:text-pink-500"></i>
<i class="fa-brands fa-youtube cursor-pointer hover:text-pink-500"></i>
<i class="fa-brands fa-facebook-f cursor-pointer hover:text-pink-500"></i>
</div>


<p className='text-center mt-6 text-[#0000009d]' >Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
</footer>
</>  )
}
