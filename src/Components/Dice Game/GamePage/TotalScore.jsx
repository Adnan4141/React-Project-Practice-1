import { useContext, useEffect} from "react";
import { gameContext } from "./GameContext";

const TotalScore = () => {
   const{score,num, selectNumber} = useContext(gameContext)
  
   useEffect(() => {
       console.log("score",score)
    console.log("selectNumber",selectNumber);
    console.log("num", num);
   
},[selectNumber,num]);

  return (
    <div className="text-center space-y-2">
      <h2 className="text-6xl sm:text-7xl font-semibold">{score}</h2>
      <p className="text-xl font-medium">Total Score</p>
    </div>
  );
};

export default TotalScore;
