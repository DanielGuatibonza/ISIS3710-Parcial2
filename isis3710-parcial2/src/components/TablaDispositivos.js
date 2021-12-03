import Dispositivo from "./Dispositivo";

function TablaDispositivos(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Device</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        {props.habitacionSeleccionada.devices.map((datos_dispositivo, i) => (
          <Dispositivo key={i} num={i + 1} dispositivo={datos_dispositivo} />
        ))}
      </tbody>
    </table>
  );
}

export default TablaDispositivos;
