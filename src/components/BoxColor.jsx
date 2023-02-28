function BoxColor (props){
    const {r, g, b} = props;

    let divColor = {
        backgroundColor : `rgb(${r},${g},${b})`
    }
    return (
        <div className= "" style={divColor}>
            <p>rgb({r}, {g}, {b})</p>

        </div>

    )
}

export default BoxColor;