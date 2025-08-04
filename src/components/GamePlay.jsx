import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice"
import TotalScore from "./TotalScore"
import styled from "styled-components";
import { useState } from "react";
import { Button, OutlineButton } from "../style/Button";
import Rules from "./Rules";


const GamePlay = () => {
       const [score, setScore] = useState(0);
      const [selectedNumber, setSelectedNumber] = useState();
          const [currentDice,setCurrentDice] = useState(1);
          const [showRules, setShowRules] = useState(false);


            const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const roleDice = () => {
        
        if (!selectedNumber) {
            alert("Please select a number before rolling the dice.");
            return;
        }
        const randomNumber = generateRandomNumber(1, 6);
        setCurrentDice((prev) => randomNumber);


        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber);
        } else {
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(undefined);
    };

    const resetScore = () => {
        setScore(0);
    }
  return (
    <MainContainer>
       <div className="top-section">
         <TotalScore score={score} />
        <NumberSelector selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}/>
       </div>
       <RoleDice currentDice={currentDice} roleDice={roleDice} />
       <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button 
          onClick={() => setShowRules((prev) => !prev)}>{
          showRules ? "Hide" : "Show"
          } Rules</Button>
       </div>

       {showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
padding-top: 70px;
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  
  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   
    gap: 20px;

  }
  `;
