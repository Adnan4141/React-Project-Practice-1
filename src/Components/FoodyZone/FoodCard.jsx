

const FoodCard = (props) => {
  const {name,price,text,image} =props.food

  return (
    <div className="flex border py-2 rounded-lg backdrop-blur-7xl bg-white/10">
     <div ><img className="h-[163px] w-[283px]"   src={image} alt="" /></div>
     <div className="text-white">
      <h2 className="font-bold text-xl">{name}</h2>
       <p>{text} </p>
    <div className="w-full flex justify-end px-5 py-3"><button className="px-2 py-1 bg-[#FF4343] text-white rounded-lg">${price}.00</button></div>
     </div>
     
     </div>
  )
}

export default FoodCard






