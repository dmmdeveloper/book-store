import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import books from "../../public/books.json"
import { Link } from 'react-router-dom'

export default function Courses() {
  return (<>
  <Navbar/>
{/*  */}

<div className="min-h-screen  w-[90%] m-auto  mt-[100px] ">
<Course/>
</div>

<Footer/>

</>  )
}



function Course(params) {

  return(<>
<section >

<h1 className='mt-9 text-[30px] text-center ' >We're delighted to have you <span className='text-pink-500 font-bold' >Here :)</span></h1>

<p  className='text-center mt-9' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam unde excepturi, nostrum ipsum perspiciatis aspernatur tempora omnis optio? Harum doloremque tempora accusamus facere consectetur dolor sapiente fugiat! Quis, quod eveniet?</p>

<div className='mt-7'>
<center><Link to={"/"} className='bg-pink-500 mt-10 text-white py-2 px-4 rounded-lg' >Back</Link></center>
</div>

{/* Cards Grid  */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 ">

{
  books.map((book) =>{
    return(<>
    
    <div className=" h-[370px] rounded-lg shadow-lg  hover:scale-105 duration-200">
<figure>
  <img className='h-[250px] w-full rounded-tr-lg rounded-tl-lg' src={book.image} alt="" />
</figure>

<div className="p-3">
<h1 className='font-bold' >{book.name} <span className={`border-pink-500  text-pink-500 border px-2 rounded-xl ${book.category==="Free"?"bg-pink-500 text-white":""} `} >{book.category}</span> </h1>
<p className='text-[13px]' >{book.title}</p>

<div className='flex justify-between items-center mt-3' >
<h2 className='border border-[black] px-2 rounded-xl' >${book.price}</h2>

<button className='bg-pink-500 text-white px-2 rounded-xl' >
  {
    book.category ==="Free"? "Add":"Buy"
  }
</button>

</div>



</div>


    </div>
    
    </>)
  })
}

</div>



  </section>
  
  </>)
  
}