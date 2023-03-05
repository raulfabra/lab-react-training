import { useEffect, useState } from "react";
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

import dice_empty from '../assets/images/dice-empty.png';


function Dice (){
    let dicePos = [dice1, dice2, dice3, dice4, dice5, dice6]
    let randomPos = dicePos[Math.floor(Math.random()* (dicePos.length))]
    //console.log(randomPos)
    const [dice, setDice] = useState(randomPos);
    const [loading, setLoading] = useState(false)

    
    const dealerHandler = () => {
        setDice(dice_empty)
        setTimeout(() => {
            setLoading(!loading)
        },1000)
    }
    
    useEffect(()=> {
        
        if(loading) {
            setDice(randomPos)
            setLoading(!loading)
        }
    },[loading])

    return(
        <div>
            <img onClick={dealerHandler} src={dice} width="100" alt="dice"/>
        </div>
    )
}

export default Dice;