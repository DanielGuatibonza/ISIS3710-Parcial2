function CardEspacio(props) {
  return (
    <div
      className="col-3 mb-3 d-flex align-items-stretch"
      onClick={() => props.setIdActual(props.espacio.id)}
    >
      <div className="card">
        <img src="../../assets/casa.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.espacio.name}</h5>
          <p className="card-text">{props.espacio.address}</p>
        </div>
      </div>
    </div>
  );
}

export default CardEspacio;
