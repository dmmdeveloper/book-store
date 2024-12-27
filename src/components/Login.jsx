import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login({setShowLogin}) {

const navigate = useNavigate()


    const goSignUp = async ()=>{
       await  setShowLogin(false)
        await navigate("/signup")

    }



  return (<>

<div className="h-screen w-full fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.1)] z-40 flex items-center justify-center ">

<form className="h-[250px] w-[400px] bg-white rounded my-popo-upp p-5 absolute ">


<div  onClick={()=>setShowLogin(false)} className=' absolute right-2 top-3 flex justify-center items-center cursor-pointer bg-[#00000021] p-1 h-[25px] w-[25px] rounded' ><i class="fa-solid fa-xmark"></i></div>

<h1 className='mt-2 font-bold ' >Login</h1>
<div className="mt-3">
<label className='text-[#000000b6]' htmlFor="">Email</label> <br />
<input className='w-[70%] p-1 border outline-none rounded-md' type="text" placeholder='youremail@gmail.com' />
</div>

<div className="mt-2">
<label className='text-[#000000b6]' htmlFor="">Password</label> <br />
<input className='w-[70%] p-1 border outline-none rounded-md placeholder:text-[40px] ' type="password" placeholder='.........' />
</div>

<div className=" flex justify-between mt-4 ">

<button className='bg-pink-500 text-white py-1 px-3 rounded-md' >Login</button>
<p>Not Registered? <Link onClick={goSignUp} className='text-pink-500'>Signup</Link></p>
</div>

</form>
</div>



</>  )
}
