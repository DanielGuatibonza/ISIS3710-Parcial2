import FilaEspacios from "./FilaEspacios";

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
      {espacios.map((datos_fila, i) => (
        <FilaEspacios
          key={i}
          data={datos_fila}
          setIdActual={props.setIdActual}
        />
      ))}
    </div>
  );
}

export default Espacios;
