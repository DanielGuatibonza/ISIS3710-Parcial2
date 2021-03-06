function CardHabitacion(props) {
  let imagen = "assets/sala.jpg";
  if (props.habitacion.type === "kitcken") {
    imagen = "assets/cocina.png";
  }

  return (
    <div
      className="col-4 mb-4 d-flex align-items-stretch"
      onClick={() => props.setHabitacion(props.habitacion)}
    >
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.habitacion.name}</h5>
        </div>
        <img src={imagen} className="card-img-top" alt="..." />
      </div>
    </div>
  );
}

export default CardHabitacion;
