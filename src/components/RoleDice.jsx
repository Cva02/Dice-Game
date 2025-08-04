import styled, { keyframes } from "styled-components";
import { useState } from "react";
import dice1 from "../assets/dice_1.png";
import dice2 from "../assets/dice_2.png";
import dice3 from "../assets/dice_3.png";
import dice4 from "../assets/dice_4.png";
import dice5 from "../assets/dice_5.png";
import dice6 from "../assets/dice_6.png";

const diceImages = {
  1: dice1,
  2: dice2,
  3: dice3,
  4: dice4,
  5: dice5,
  6: dice6,
};

const RoleDice = ({ currentDice, roleDice }) => {
  const [isRolling, setIsRolling] = useState(false);

  const handleDiceClick = () => {
    if (isRolling) return;
    setIsRolling(true);
    setTimeout(() => {
      roleDice();
      setIsRolling(false);
    }, 800);
  };

  return (
    <DiceContainer>
      <div className={`dice ${isRolling ? "rolling" : ""}`} onClick={handleDiceClick}>
        <img src={diceImages[currentDice]} alt={`dice ${currentDice}`} />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RoleDice;


const shake = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  50% { transform: rotate(-15deg); }
  75% { transform: rotate(15deg); }
  100% { transform: rotate(0deg); }
`;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .dice {
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &.rolling {
      animation: ${shake} 0.8s ease;
    }
  }

  p {
    font-size: 24px;
  }
`;
