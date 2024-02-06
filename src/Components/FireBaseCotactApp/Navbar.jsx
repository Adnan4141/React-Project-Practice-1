import { IoMdSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { useContext } from "react";
import { contactDiv } from "./ContactApp";

const Navbar = () => {

   const {SetSearchValue,setAddBtnToggle} = useContext(contactDiv)
    
   const handleSearchChange=(e)=>{
     SetSearchValue(e.target.value.toLowerCase())
   }

   

  return (
    <div className="py-1 px-2">
    <div className="flex justify-center mx-1 gap-3 bg-white items-start py-3 my-1 rounded-md"><img src="/assets/Contact-Firebase/logo.png" alt="" />
    <h2 className="text-xl font-medium">Firebase Contact App</h2>
    </div>
    
    <div className="flex items-center">
   <div className="flex w-full relative bg-transparent my-4">
  <span className="absolute text-white top-2.5 left-4 text-2xl"><IoMdSearch /></span>
   <input type="text" id="name" name="name" placeholder="Search Contact"
    onChange={handleSearchChange} className="w-full block py-1 mx-2 pl-10 text-white bg-transparent border border-gray-400 rounded-md placeholder:text-gray-300"/>
    <button onClick={()=>setAddBtnToggle(true)} className="bg-white p-2 mx-1 rounded-full"><FaPlus className="bg-white text-2xl"/></button>
   </div>    
    </div>
    
    
    </div>
  )
}

export default Navbar