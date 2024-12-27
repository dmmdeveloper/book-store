import React from 'react'
import book from "./books.png"
export default function Banner() {
  return (<>

<div className=" mt-10 flex flex-col md:flex-row items-center max-w-screen-2xl container mx-auto md:px-20 sm:px-4" >

{/* Left Side */}
<div className="h-[100%] w-full md:w-1/2 p-5">


<div className='space-y-8 mt-5' > 


<h1 className='text-black text-2xl md:text-[30px] font-[500] ' >
    Hello Welcomes here to learn <br /> something <span className='text-pink-500' >new everyday!!!</span></h1>
<p className=' text-[13px] text-justify font-[450]' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto temporibus, tempora iure saepe unde earum est laudantium amet magnam necessitatibus, eius minima omnis laborum ratione labore quos! Odio, quidem recusandae.</p>

<div>

<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="enter email for login" />
</label> <br />
<br />
<button className='bg-pink-600 text-white py-2 px-6 rounded-lg' >Login</button>
</div>
</div>
</div>
{/* right Side Div */}

<div className="h-[100%] w-full md:w-1/2 p-5">
<img src={book} alt="" />
</div>




</div>



</>  )
}
