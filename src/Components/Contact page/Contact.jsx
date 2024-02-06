import { MdOutlineMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import FormPage from "./FormPage";



const Contact = () => {

const userData =(data)=>{
   
    console.log(data)
}
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <img src="/assets/img2/logo.png" />
      </div>

      <div className="p-20 max-w-7xl mx-auto">
        <div>
          <h2 className="text-6xl mb-3 font-bold">CONTACT US</h2>
          <p className="text-lg text-gray-600 font-semibold">
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-2 gap-x-16 mt-10 py-5 ">
          <div className="space-y-10 order-2 lg:order-1">
            <div className="flex flex-col gap-2 sm:flex-row justify-center items-center md:justify-between  font-semibold">
              <a>
                <button className="bg-black text-white px-10 py-2 uppercase flex  items-center gap-2">
                <MdOutlineMessage />
                  Via Support Chat
                </button>
              </a>
              <a>
                <button className="bg-black text-white w-52 justify-center py-2 uppercase flex items-center gap-2">
                <IoIosCall />
                  Via call
                </button>
              </a>
            </div>

            <div>
              <button className="uppercase font-bold py-1 w-full border border-black flex items-center gap-2 justify-center">
              <MdOutlineMessage />
                Via email form
              </button>
            </div>
           
          
           <FormPage userData={userData}/>

          </div>


          <div className="order-1 my-4 lg:my-0">
         <img src="/assets/img2/contact.jpg" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
