function NumbersTable({limit}) {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <div className="mx-auto">
        <div className="row mx-auto" style={{width:"23%"}}>
            {numbers.map(number => {
                if(number % 2 === 0) return <p className="border border-2 border-secondary p-2" style={{ width: "75px", height: "75px", backgroundColor:"red" }} >{number}</p>
                else return <p className="border border-2 border-secondary p-2" style={{ width: "75px", height: "75px" }} >{number}</p>
            })}
        </div>
        </div>
    )
}

export default NumbersTable;