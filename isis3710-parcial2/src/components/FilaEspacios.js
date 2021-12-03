import CardEspacio from "./CardEspacio";

function FilaEspacios(props) {
  return (
    <div className="row">
      {props.data.map((espacio, i) => (
        <CardEspacio
          key={i}
          espacio={espacio}
          setIdActual={props.setIdActual}
        />
      ))}
    </div>
  );
}

export default FilaEspacios;
