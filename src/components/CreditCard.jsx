import visa from '../assets/images/visa.png'
import masterdCard from '../assets/images/master-card.svg'

function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    let colores = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }
 

    return (
        <div className = 'targeta' style={colores}>
            {type === 'Visa' ? <div><img id='visa' src={visa} alt='Visa'/> </div>: <div><img id='visa' src={masterdCard} alt='Master Card'/> </div>}
            <span> **** **** **** {number.substring(12, 16)}</span>
            <div>
                {expirationMonth < 10 ? <p>Expire 0{expirationMonth} {expirationYear%100} </p>: <p> Expire {expirationMonth} {expirationYear%100}</p>}
                <span>{bank}</span>
            </div>
            <p>{owner}</p>

        </div>
    )
}

export default CreditCard;