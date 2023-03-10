const Card = ({ titulo, ruta, descripcion, descripcionDeImg, habitat, tipoDeVeneno }) => {
    return (
        <div className="contenedor-cards">
            <div className="carta">
                <img src={ruta} alt={descripcionDeImg} className="carta-img" />
                <div className="carta-body">
                    <h3><strong>{titulo}</strong></h3>
                    <p>{descripcion}</p>
                    <p>{habitat}</p>
                    <p>{tipoDeVeneno}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;