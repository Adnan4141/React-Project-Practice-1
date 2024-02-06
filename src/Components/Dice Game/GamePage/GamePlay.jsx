import { useState } from "react";
import NumSelector from "./NumSelector";
import TotalScore from "./TotalScore";
import Alert from "./Alert";
import { gameContext } from "./GameContext";

const GamePlay = () => {
  const [num, setNum] = useState(1);
  const [score, setScore] = useState(0);
  const [selectNumber, setSelectNumber] = useState();
  const [showRules,setShowRules]= useState(false)

  const GenerateRandom = () => {
    let randomValue =Math.floor(Math.random() * 6 + 1)
    if (selectNumber) setNum(randomValue);
    if (selectNumber === randomValue) {
      setScore((score) => score + randomValue);
    }
    console.log("selectNum",selectNumber)
    setSelectNumber(null);
  };

  const handleReset = () => {
    setScore(0);
    setSelectNumber();
   
    setSelectNumber(null);
  };

  return (
    <gameContext.Provider
      value={{
        score,
        setScore,
        num,
        setSelectNumber,
        selectNumber,
        GenerateRandom
      }}
    >
      <div className="flex items-center justify-between px-2 sm:px-10">
        <TotalScore num={num} />
        <NumSelector />
      </div>

      <main className="flex flex-col justify-center items-center ">
        <div
          className=" justify-center items-center flex flex-col gap-2 cursor-pointer"
          onClick={GenerateRandom}
        >
          <DiceImg imgNum={num} />
          <h2 className="text-2xl font-medium">Click On Dice to roll</h2>
        </div>

        <div className="flex flex-col gap-5 my-5">
          <button
            onClick={handleReset}
            className="border rounded-md border-black px-16 py-2 hover:bg-slate-600  font-medium"
          >
            Reset Score
          </button>
          <button onClick={()=>setShowRules(!showRules)} className="border rounded-md border-black px-16 py-2 bg-black text-white font-medium hover:text-black hover:border-black hover:bg-transparent">
            Show Rules
          </button>
        </div>
      </main>

      {showRules ? <Alert /> : ""}
    </gameContext.Provider>
  );
};

export default GamePlay;

const DiceImg = ({ imgNum }) => {
  return (
    <img
      src={`../../../../assets/Dice Game/dice_${imgNum}.png`}
      alt={`${imgNum}`}
    />
  );
};
