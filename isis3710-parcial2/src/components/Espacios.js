import FilaEspacios from "./FilaEspacios";
import { FormattedMessage } from "react-intl";

function Espacios(props) {
  let espacios = [];
  let espacios_actual = [];
  for (let i = 0; i < props.data.length; i++) {
    espacios_actual.push(props.data[i]);
    if (i % 4 === 3) {
      espacios.push(espacios_actual);
      espacios_actual = [];
    }
  }
  if (espacios_actual !== []) {
    espacios.push(espacios_actual);
  }

  return (
    <div>
      {props.conexion &&
        espacios.map((datos_fila, i) => (
          <FilaEspacios
            key={i}
            data={datos_fila}
            setIdActual={props.setIdActual}
          />
        ))}
      {!props.conexion && (
        <h2>
          <FormattedMessage id="No conection" />
        </h2>
      )}
    </div>
  );
}

export default Espacios;
