import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../Context/AppContext'
import Login from './Login'

export default function SignUp() {
    // const {showLogin , setShowLogin} = useAppContext() 

    const [showLogin ,setShowLogin]   =useState(false)


  return (<>

  <div className="h-screen w-full  flex items-center justify-center ">


<form className="min-h-[250px] h-auto w-[400px] bg-white rounded p-5 absolute shadow-2xl ">

<Link to={"/"} className=' absolute right-2 top-3 flex justify-center items-center cursor-pointer bg-[#00000021] p-1 h-[25px] w-[25px] rounded' ><i class="fa-solid fa-xmark"></i></Link>

<h1 className='mt-2 font-bold ' >Sign Up</h1>

<div className="mt-3"> 
<label className='text-[#000000b6]' htmlFor="">Name</label> <br />
<input className='w-[70%] p-1 border outline-none rounded-md' type="text" placeholder='youremail@gmail.com' />
</div>


<div className="mt-3"> 
<label className='text-[#000000b6]' htmlFor="">Email</label> <br />
<input className='w-[70%] p-1 border outline-none rounded-md' type="text" placeholder='youremail@gmail.com' />
</div>

<div className="mt-2">
<label className='text-[#000000b6]' htmlFor="">Password</label> <br />
<input className='w-[70%] p-1 border outline-none rounded-md placeholder:text-[40px] ' type="password" placeholder='.........' />
</div>

<div className=" flex justify-between mt-4 ">

<button className='bg-pink-500 text-white py-1 px-3 rounded-md' >Sign Up</button>
<p>Are Registered? <Link onClick={()=>setShowLogin(true)} className='text-pink-500' >Log in</Link></p>

</div>






</form>
</div>
  
  {
    showLogin
    ? <Login setShowLogin={ setShowLogin} /> :null
  }
  </>
  )
}
