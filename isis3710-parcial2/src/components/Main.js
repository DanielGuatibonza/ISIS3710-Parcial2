import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Espacios from "./Espacios";
import Grafica from "./Grafica";
import Habitaciones from "./Habitaciones";

function Main(props) {
  let [espacios, setEspacios] = useState([]);
  let [habitaciones, setHabitaciones] = useState([]);
  let [id_espacios_actual, setIdEspacioActual] = useState("");
  let [conexion, setConexion] = useState(true);

  useEffect(() => {
    if (navigator.onLine) {
      setConexion(true);
      let url_espacios =
        "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
      fetch(url_espacios)
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem("espacios", JSON.stringify(res));
          setEspacios(res);
        });

      let url_habitaciones =
        "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
      fetch(url_habitaciones)
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem("habitaciones", JSON.stringify(res));
          setHabitaciones(res);
        });
    } else {
      let espacios = localStorage.getItem("espacios");
      let habitaciones = localStorage.getItem("habitaciones");
      if (espacios && habitaciones) {
        setConexion(true);
        setEspacios(JSON.parse(espacios));
        setHabitaciones(JSON.parse(habitaciones));
      } else {
        setConexion(false);
      }
    }
  }, []);

  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-10">
        <h1>
          <FormattedMessage id="My spaces" />
        </h1>
        <Espacios
          data={espacios}
          setIdActual={setIdEspacioActual}
          conexion={conexion}
        />
        {id_espacios_actual !== "" && (
          <div>
            <h1>
              <FormattedMessage id="My rooms" />
            </h1>
            <Habitaciones data={habitaciones} idEspacio={id_espacios_actual} />
            <h1>
              <FormattedMessage id="Stats" />
            </h1>
            <div className="container">
              <h2>
                <FormattedMessage id="Graph title" />
              </h2>
              <Grafica data={habitaciones} idEspacio={id_espacios_actual} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
