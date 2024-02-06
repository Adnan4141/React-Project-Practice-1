import { useContext } from "react";
import { gameContext } from "./GameContext";

const NumSelector = () => {

    const arrayNum =[1,2,3,4,5,6]
    const{selectNumber,setSelectNumber,num}=useContext(gameContext)
 
    console.log("SelectNumber",selectNumber)
  return (
     <div className="flex flex-col justify-center items-center my-10 gap-3">
    { (!selectNumber && num) ?
      (<p className="text-red-500 font-medium">Please selecte any number</p>):(<p className="text-blue-950-500 font-medium">{`You Selected the number ${selectNumber}`}</p>)
    }
        <ul className="flex gap-2 cursor-pointer">
         {
        arrayNum.map((value,index)=>(
            <div className={`border h-11 w-11 sm:h-14 sm:w-14  text-xl sm:text-2xl text-center p-2 sm:p-3 ${selectNumber===value?'text-white bg-black':'text-black bg-white'} `}
             onClick={()=>setSelectNumber(value)} key={index} num={value}>{value}
             </div>
        ))
         }
        </ul>
        <p className="text-xl sm:text-2xl font-semibold">Select Number</p>
      </div>
  )
}

export default NumSelector


