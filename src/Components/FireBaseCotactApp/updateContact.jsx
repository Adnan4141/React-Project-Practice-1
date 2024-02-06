import { useContext } from "react";
import { contactDiv } from "./ContactApp";
import { IoMdClose } from "react-icons/io";


const UpdateContact = ({user}) => {

    const {setAddBtnToggle} = useContext(contactDiv);


  return (
    <div className="bg-white mx-3 rounded-lg">
    <div className="flex justify-end pt-5 pr-6 text-3xl">
        <IoMdClose onClick={()=>setAddBtnToggle(false)} />
      </div>
      <form
        onSubmit={handleAddForm}
        className="flex flex-col px-3 py-10"
        action=""
      >
        <label className="text-2xl" htmlFor="name">
          Name
        </label>
        <input
          className="border py-2 text-2xl "
          type="text"
          name="name"
          defaultValue={user.name}
          id="name"
         
        />
        <label className="text-2xl mt-6" htmlFor="email">
          Email
        </label>
        <input className="border py-2 text-2xl " type="email" name="email" />

        <div className="flex justify-end pt-3 mt-3">
          <button className="text-2xl bg-dark-yellow px-5 py-2 rounded-lg">
            Update Contact
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateContact