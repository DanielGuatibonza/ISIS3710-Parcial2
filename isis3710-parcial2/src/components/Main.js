import { useEffect, useState } from "react";
import Espacios from "./Espacios";
import Habitaciones from "./Habitaciones";

function Main(props) {
  let [espacios, setEspacios] = useState([]);
  let [habitaciones, setHabitaciones] = useState([]);
  let [id_espacios_actual, setIdEspacioActual] = useState("");

  useEffect(() => {
    let url_espacios =
      "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
    fetch(url_espacios)
      .then((res) => res.json())
      .then((res) => {
        setEspacios(res);
      });

    let url_habitaciones =
      "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
    fetch(url_habitaciones)
      .then((res) => res.json())
      .then((res) => {
        setHabitaciones(res);
      });
  }, []);
  return (
    <div>
      <h1>My spaces</h1>
      <Espacios data={espacios} setIdActual={setIdEspacioActual} />
      {id_espacios_actual !== "" && (
        <div>
          <h2>My rooms</h2>
          <Habitaciones data={habitaciones} idEspacio={id_espacios_actual} />
        </div>
      )}
    </div>
  );
}

export default Main;
