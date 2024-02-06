import { useState } from "react";
import StartGame from "./GamePage/StartGame";
import GamePlay from "./GamePage/GamePlay";

const GameMain = () => {


    const [isGamePlay,setIsGamePlay]=useState(true)
    const toggleGamePlay = ()=>{
        console.log(isGamePlay)
     setIsGamePlay(!isGamePlay)
    }


  return (
    <div>
      {isGamePlay?<GamePlay/>:<StartGame toggleGamePlay={toggleGamePlay} />  }    
    </div>
  );
};

export default GameMain;
