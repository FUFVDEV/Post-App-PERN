import { Link } from "react-router-dom";
import { RollbackOutlined } from "@ant-design/icons";

import error404 from "assets/svg/error404.svg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="error404">
      <div className="error404__text">
        <h1 className="error404__title">
          Ooops... <br />
          No hay nada por aquí
        </h1>

        <p className="error404__paragraph">¡La página que estás buscando, no existe!</p>

        <Link to="/">
          <RollbackOutlined /> Volver
        </Link>
      </div>
      <div className="error404__img">
        <img src={error404} alt="Imagen 404" />
      </div>
    </div>
  );
};

export default NotFound;
