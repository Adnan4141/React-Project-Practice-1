import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { contactDiv } from "./ContactApp";



const AddText = () => {
    const {setAddBtnToggle,addContact,updateBtnContact,setUpdateBtnContact,updateUser} = useContext(contactDiv);

  const handleAddForm = (newUser) => {
    addContact(newUser);
    setAddBtnToggle(false)
  };
       
  const updateContact = async (contact,id) => {
    console.log(id)
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
    setUpdateBtnContact(false)
  };




  return (
   <div className="absolute h-screen w-full place-content-center top-0 right-0 py-[50%] backdrop-blur-xl">
     <div className="bg-white mx-3 rounded-lg place-items-center ">
      <div className="flex justify-end pt-5 pr-6 text-3xl">
        <IoMdClose className="cursor-pointer" onClick={()=>
       { setAddBtnToggle(false);  setUpdateBtnContact(false)}} />
      </div>
      <form
        onSubmit={(e)=>{ 
          e.preventDefault();
            const newUser ={name:e.target.name.value,email:e.target.email.value} 
          updateBtnContact?updateContact(newUser,updateUser[0].id):handleAddForm(newUser) 
       
        }}
        className="flex flex-col px-3 py-5"
        action=""
      >
        <label className="text-2xl" htmlFor="name">
          Name  
        </label>
        <input
          className="border py-2 text-2xl "
          type="text"
          name="name"
          id="name"
          defaultValue={updateBtnContact?updateUser[0].name:""}
        
        />
        <label className="text-2xl mt-6" htmlFor="email">
          Email
        </label>
        <input className="border py-2 text-2xl " type="email" name="email" defaultValue={updateBtnContact?updateUser[0].email:""}/>

        <div className="flex justify-end pt-3 mt-3">
          <button className="text-2xl bg-dark-yellow px-5 py-2 rounded-lg">
          {updateBtnContact?"Update Contact":"Add Contact"}  
          </button>

        </div>
      </form>
    </div>
   </div>
  );
};

export default AddText;
