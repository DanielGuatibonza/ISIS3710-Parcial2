import { useState } from "react";
import FilaHabitaciones from "./FilaHabitaciones";
import TablaDispositivos from "./TablaDispositivos";

function Habitaciones(props) {
  let [habitacionSeleccionada, setHabitacion] = useState("");

  let habitaciones = [];
  let habitaciones_actual = [];
  let contador = 0;
  for (let i = 0; i < props.data.length; i++) {
    if (props.data[i].homeId === props.idEspacio) {
      habitaciones_actual.push(props.data[i]);
      contador = contador + 1;
    }
    if (contador === 3) {
      habitaciones.push(habitaciones_actual);
      habitaciones_actual = [];
      contador = 0;
    }
  }
  if (habitaciones_actual !== []) {
    habitaciones.push(habitaciones_actual);
  }

  return (
    <div className="row">
      <div className="col-6">
        {habitaciones.map((datos_fila, i) => (
          <FilaHabitaciones
            key={i}
            data={datos_fila}
            setHabitacion={setHabitacion}
          />
        ))}
      </div>
      {habitacionSeleccionada !== "" && (
        <div className="col-6">
          <TablaDispositivos habitacionSeleccionada={habitacionSeleccionada} />
        </div>
      )}
    </div>
  );
}

export default Habitaciones;
