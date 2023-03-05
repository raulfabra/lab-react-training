import { useState } from "react";

function LikeButton(){
   // let arreglo = ['purple','blue','green','yellow','orange','red']

    const [count, setCount] = useState(0)
    //const [colors, setColors] = useState(arreglo);

    const countHandler = () => {
        setCount(count + 1);
    }


    return(
        <div>
            <button onClick={countHandler} style={{width:"300px", margin:"10px"}} ><h2>{count}</h2>Likes</button>
        </div>

    )
}

export default LikeButton;