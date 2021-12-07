function CardEspacio(props) {
  let imagen = "assets/casa.jpg";
  if (props.espacio.type === "loft") {
    imagen = "assets/edificio.jpg";
  }

  return (
    <div
      className="col-3 mb-3 d-flex align-items-stretch"
      onClick={() => props.setIdActual(props.espacio.id)}
    >
      <div className="card">
        <img src={imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.espacio.name}</h5>
          <p className="card-text">{props.espacio.address}</p>
        </div>
      </div>
    </div>
  );
}

export default CardEspacio;
