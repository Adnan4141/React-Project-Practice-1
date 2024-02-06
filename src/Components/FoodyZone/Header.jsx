import { useContext } from "react";
import { foodContext } from "./FoodyZoneMain";

const Header = () => {
  const { setSelectMenu, setSearchText,selectMenu} = useContext(foodContext);

  const handleMenu = (e) => {
    setSelectMenu(e.target.innerText.toLowerCase());
  };
  const handleSearchText = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const Lists = ["ALL","Breakfast","Lunch","Dinner"]

  return (
    <div className="py-12 px-10 space-y-5 md:space-y-10 bg-[#5D5A5A]">
      <div className="flex flex-col gap-5 md:gap-0 md:flex-row items-center justify-between">
        <div>
          <img src="/assets/FoodyZone/Foody Zone.svg" alt="FoodyZone" />
        </div>
        <div>
          <input
            onChange={handleSearchText}
            type="text"
            className="border border-[#FF0909] bg-transparent rounded-md px-3 py-1
     placeholder:text-gray-200"
            placeholder="Search Food..."
          />
        </div>
      </div>

      <div className="flex justify-center">
        <ul className="flex gap-3">
        {
         Lists.map((list,index)=>{
          return <li key={index} onClick={handleMenu} className={`px-3  rounded-md ${selectMenu==list.toLowerCase()?"bg-white  text-[#FF4343]":"text-white bg-[#FF4343]"} `}>{list} </li>
         })
        }
        </ul>
      </div>
    </div>
  );
};

export default Header;
