import Navbar from "./Navbar"


const BrandPage = () => {
  return (
    <div className="py-4">
   <Navbar/>

    <div className="grid md:grid-cols-2 grid-cols-1 gap-1 max-w-7xl p-10 mx-auto h-96">
    
    <div className="flex flex-col gap-10 order-2 md:order-1">
       <h3 className="text-5xl md:text-8xl uppercase font-bold">You feet deserve the best</h3>
       <div className="md:mr-32 md:pr-32 flex flex-wrap">
       <p className="font-semibold text-gray-500">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

       </div>
     <div className="flex gap-5">
        <button className="bg-red-700 font-semibold text-white px-6 py-1 h-10">Shop Now</button>
        <button className="px-6 py-1 h-10 border border-2 border-black font-semibold  text-xl text-gray-500">Category</button>
     </div>
  <div className="flex items-center md:items-start  flex-col">
  <p className="capitalize text-gray-500">Also available on</p>
    <div className="flex">
    <img src="/assets/img/flipkart.png"/>
     <img src="/assets/img/amazon.png"/>
    </div>
  </div>
    </div>
 

   <div className="flex justify-center items-center order-1 md:order-2">
    <img className="w-[530px]" src="/assets/img/shoe_imageshoe.png" />
   </div>





    </div>


    </div>
  )
}

export default BrandPage