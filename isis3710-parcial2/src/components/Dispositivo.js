function Dispositivo(props) {
  return (
    <tr>
      <th scope="row">{props.num}</th>
      <td>{props.dispositivo.id}</td>
      <td>{props.dispositivo.name}</td>
      <td>{props.dispositivo.desired.value}</td>
    </tr>
  );
}

export default Dispositivo;
