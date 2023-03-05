function Carousel({images}) {
    return (
        <div id="carouselExample" className="carousel slide bg-dark">
            <div className="carousel-inner mx-auto w-25">
                <div className="carousel-item active">
                    <img src={images[0]} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={images[1]} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={images[2]} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={images[3]} className="d-block w-100" alt="..." />
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel;

