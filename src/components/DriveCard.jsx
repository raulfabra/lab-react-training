function DriveCard(props){
    const {name, rating, img, car} = props
    return(
        <div className="license_car">
            <img id="foto_perfil" src={img} alt="imagen"  />
            <h3>{name}</h3>
            {rating < 4.5 && <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></p>}
            {rating >= 4.5 && <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>}
            <p><strong>{car.model}</strong>{car.licensePlate}</p>

        </div>

    )
}

export default DriveCard;