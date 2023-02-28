function Random (props){
    const {min, max} = props;
    let number = Math.ceil(Math.random()*(max-min))+min
    return(
        <p> Random value between {min} and {max} = {number}</p>
    )
}

export default Random;