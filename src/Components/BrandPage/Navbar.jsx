
const Navbar = () => {
  return (
    <div className="flex justify-between py-3 px-32">
      <a>
        <img src="/assets/img/brand_logobrand.png" />
      </a>


     <ul className="flex gap-8 uppercase font-semibold">
      <li>MENU</li>
      <li>Location</li>
      <li>ABOUT</li>
      <li>CONTACT</li>
     </ul>

       
        <button className="px-4 h-7  bg-red-500 text-white">Login</button>
     
    </div>
  );
};

export default Navbar;
