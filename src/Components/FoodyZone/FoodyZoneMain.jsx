import { Component, createContext, useState } from "react"
import Header from "./Header"
import FoodCard from "./FoodCard";

export const foodContext = createContext()

// Component
const FoodyZone = () => {
 
  const [selectMenu,setSelectMenu] = useState("all")
 const [searchText,setSearchText] = useState("")
  const FoodData = [
    {
      name: "Boilded Egg",
      price: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "../../../assets/FoodyZone/Ellipse 1 (1).png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "../../../assets/FoodyZone/Ellipse 1 (2).png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "../../../assets/FoodyZone/Ellipse 1 (3).png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image:"../../../assets/FoodyZone/Ellipse 1.png" ,
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "../../../assets/FoodyZone/Ellipse 1 (6).png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "../../../assets/FoodyZone/Ellipse 1 (5).png",
      type: "dinner",
    },
  ];

  return (
    <foodContext.Provider value={{setSelectMenu,selectMenu,searchText,setSearchText}}> 
    <div className="min-h-screen overflow-hidden">
    <Header/>
    <div  className="sm:h-[722px]  flex justify-center items-center  object-contain bg-cover " style={{backgroundImage:'url("/assets/FoodyZone/bg.png")'}}>
     
  <div className="grid md:grid-cols-3 py-10 sm:py-0  sm:grid-cols-2 grid-cols-1 gap-10 lg:max-w-7xl lg:mx-auto px-12 ">
  
  {
    FoodData.map((food,index)=>{
      if(selectMenu.includes("all") && searchText=="")
      return <FoodCard key={index} food={food}/> 
     else if(selectMenu.includes("all") && food.name.toLowerCase().includes(searchText))
      return <FoodCard key={index} food={food}/> 
     else if(selectMenu.includes(food.type.toLowerCase()) && searchText=="")
      return <FoodCard key={index} food={food}/> 
     else if(selectMenu.includes(food.type.toLowerCase()) && food.name.toLowerCase().includes(searchText))
      return <FoodCard key={index} food={food}/> 
    
  })
  }
  
  {/* searchText.includes(food.name.toLowerCase()) */}




  </div>

    </div>
    </div>
    </foodContext.Provider>
   
  )
}

export default FoodyZone



