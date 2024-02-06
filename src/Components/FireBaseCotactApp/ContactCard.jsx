import { VscAccount } from "react-icons/vsc";
import { RiEditCircleLine } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { contactDiv } from "./ContactApp";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const ContactCard = ({ user }) => {
  const { deleteContact,setAddBtnToggle,contacts,addBtnToggle,updateBtnContact,setUpdateBtnContact,userId,setUser,updateUser,setUpdateUser} = useContext(contactDiv);


const handleUpdateClick=async(id)=>{
  setUpdateBtnContact(true)
 
  setUpdateUser(contacts.filter(value=>value.id==id))
}



  return (
    <div className="bg-yellow mx-2 rounded-lg py-1 px-2 flex gap-1 items-center justify-between">
      <div className="flex gap-2">
        <div className="text-4xl py-4 px-1 text-orange">
          <VscAccount />
        </div>
        <div className="my-2">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="font-mono">{user.email}</p>
        </div>
      </div>

      <div className="flex text-3xl gap-3 mx-3">
        <button onClick={()=>handleUpdateClick(user.id)}>
          <RiEditCircleLine />
        </button>
        <button onClick={() => deleteContact(user.id)}>
          <FaTrash className="text-[#5F00D9]" />
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
