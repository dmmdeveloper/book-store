import React from 'react'
import books from "../../public/books.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";









export default function FreeBooks() {
    const freebooks = books.filter((book) => book.category ==="Free")


    var settings = {
        
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:false
            }
          }
        ]
      };
  return (
<>
<div className="max-w-screen-2xl h-auto container mx-auto md:px-20 px-4">
    
<h2><b>free offered courses</b></h2>
<p className='text-[15px] text-[#000000b3]' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptatum exercitationem doloribus aperiam eaque similique qui magni, eveniet, officiis, illo distinctio repellendus. Reiciendis corrupti labore aliquid suscipit dolores, quis tempore?</p>


{/* Slider */}

<div className='mt-6 mb-6 ' >
<Slider {...settings}>


{
    freebooks.map((book)=>{
        return(<>
        <div key={book.id} >
            <Cards name ={book.name}  title = {book.title} price = {book.price} category ={book.category}  />
        </div>
        </>)
    })
}


</Slider>
</div>

</div>

</>  )
}


function Cards({name , title , price , category}) {
  return (<>

<div className="h-[350px] mr-3 mb-2 w-[340px] shadow-lg rounded-lg hover:scale-105 hover:shadow-2xl cursor-pointer duration-200 ">

<img className='h-[230px] rounded-tr-lg rounded-tl-lg w-full  ' src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?t=st=1735229090~exp=1735232690~hmac=b861b81ad0e1a17a69aae4fc66877b805dfb97dc7eaf76262bbc323a8788763d&w=740" alt="" />

<div className="p-5">
<h1 className='font-bold' >{name} <span className='font-normal ml-2 bg-pink-500 text-white px-3 rounded-xl' >Free</span> </h1>
<p className='text-[12px] mt-1' >{title}</p>

<div className="flex justify-between items-center mt-1 ">
    <div className='border border-[black] px-2 rounded-xl py-0' >${price}</div>
    <button className='border border-[black] px-2 rounded-xl py-0 hover:bg-pink-500 hover:text-white hover:border-pink-500 duration-200' >Buy</button>
</div>

</div>

</div>


</>  )
}
