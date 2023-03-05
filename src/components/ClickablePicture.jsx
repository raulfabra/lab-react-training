import { useState } from "react";

function ClickablePicture (props) {
    const [picture, setPicture] = useState(props.img);

    const pictureHandler = () => {
        if (picture === props.img) setPicture (props.imgClicked);
        else setPicture(props.img)
        
    }
    return (
        <>
            <div>
                <img onClick={pictureHandler} src={picture} alt="Maxence" />
            </div>
        </>
    )
}

export default ClickablePicture;