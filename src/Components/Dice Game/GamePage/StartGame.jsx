


const StartGame = ({toggleGamePlay}) => {



  return (
    <div className="max-w-7xl min-h-screen mx-auto flex items-center justify-center">
    
    <div className="grid grid-lg-3 md:grid-cols-6">
    
    <div className="col-span-3">
      <img src="../../../../assets/Dice Game/dices 1.png" alt="" />
    </div>

    <div className="col-span-3 flex flex-col items-center lg:items-end justify-center gap-6">
      <h2 className='text-8xl font-bold'>DICE GAME</h2>
      <div className="">
        <button onClick={toggleGamePlay}  className="px-16 py-2 bg-black text-white rounded-lg hover:border-black border hover:text-black hover:bg-transparent"
        >Play Now</button>
      </div>
    </div>


    </div>

    </div>
  )
}

export default StartGame