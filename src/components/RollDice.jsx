import { useState } from "react";
import styled from "styled-components";

const RollDice = ({rollDice, currentDice}) => {

 

  return (
    <DiceConatiner>
        <div className="dice"
        onClick={rollDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt="dice1" />
        </div>
        <p> Click on the dice to roll </p>

    </DiceConatiner>
  )
}

export default RollDice;

const DiceConatiner = styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;

p{
  font-size: 24px;
}

.dice{
 cursor: pointer;
}
`