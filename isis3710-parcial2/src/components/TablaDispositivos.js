import Dispositivo from "./Dispositivo";
import { FormattedMessage } from "react-intl";

function TablaDispositivos(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">
            <FormattedMessage id="Device" />
          </th>
          <th scope="col">
            <FormattedMessage id="Value" />
          </th>
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
