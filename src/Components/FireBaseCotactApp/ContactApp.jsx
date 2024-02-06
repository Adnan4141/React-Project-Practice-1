import { createContext, useEffect, useState } from "react"
import ContactCard from "./ContactCard"
import Navbar from "./Navbar"
import {addDoc, collection, deleteDoc, doc,  onSnapshot} from "firebase/firestore";
import { db } from "../../config/firebase";
import AddText from "./AddText";


export const contactDiv = createContext();

 const ContactApp = () => {
 
  const [searchValue,SetSearchValue] = useState("")
  const [contacts,setContacts]= useState([]);
   const [addBtnToggle,setAddBtnToggle]=useState(false)
   const [updateBtnContact,setUpdateBtnContact]=useState(false)
   const [userId,setUserId]=useState(null)
   const [updateUser,setUpdateUser]= useState(null)

  const deleteContact = async(id) => {
    try {
      await deleteDoc(doc(db,"contacts",id));
    } catch (error) {
      console.log(error);
    }
  };

  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(()=>{
    const getContacts = async()=>{
        try {
          const contactsRef = collection(db,"contacts")
       
          onSnapshot(contactsRef,(snapshot)=>{
            const contactLists = snapshot.docs.map((doc)=>{
              return{
                id:doc.id,
              ...doc.data()
              }
            });
            setContacts(contactLists)
            return contactLists
          })
        } 
        catch (error) {
          console.log(error)
          console.log("Data Loading Failed")
        }
      } 
    getContacts();
  },[])
   
  return (
 <contactDiv.Provider value={{searchValue,SetSearchValue,contacts,setContacts,deleteContact,addBtnToggle,setAddBtnToggle,addContact,
 updateBtnContact,setUpdateBtnContact,userId,setUserId,updateUser,setUpdateUser}}>
   <div className="bg-dark-gray min-h-screen relative ">
    <Navbar/>

<div className="flex flex-col gap-2">
{  
  contacts.map(user=>{
    if(searchValue==="")
    return  <ContactCard user={user} key={user.id}/>
   else if(user.name.toLowerCase().includes(searchValue)||user.email.toLowerCase().includes(searchValue))
    return  <ContactCard user={user} key={user.id}/>
  })

}
</div>

<div className="">
{(addBtnToggle  || updateBtnContact)? <AddText/>:""}     
</div>
   
    </div>
 </contactDiv.Provider>
  )
}

export default ContactApp