function CardHabitacion(props) {
  return (
    <div
      className="col-4 mb-3 d-flex align-items-stretch"
      onClick={() => props.setHabitacion(props.habitacion)}
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.habitacion.name}</h5>
        </div>
        <img src="../../assets/casa.jpg" className="card-img-top" alt="..." />
      </div>
    </div>
  );
}

export default CardHabitacion;
