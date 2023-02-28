function IdCard({lastName, firstName, gender, height, birth, picture}) {
    return (
        <picture>
            <img src={picture} alt='Photo_profile' />
            <ul className='cards'>
                <li><strong>First name: </strong>{firstName}</li>
                <li><strong>Last name: </strong>{lastName}</li>
                <li><strong>Gender: </strong>{gender}</li>
                <li><strong>Height: </strong>{height}</li>
                <li><strong>Birth: </strong></li>
            </ul>
        </picture>
    )

}

export default IdCard;