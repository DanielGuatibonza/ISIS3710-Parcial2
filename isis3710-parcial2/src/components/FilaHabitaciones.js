import CardHabitacion from "./CardHabitacion";

function FilaHabitaciones(props) {
  return (
    <div className="row">
      {props.data.map((habitacion, i) => (
        <CardHabitacion
          key={i}
          habitacion={habitacion}
          setHabitacion={props.setHabitacion}
        />
      ))}
    </div>
  );
}

export default FilaHabitaciones;
