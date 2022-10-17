import React from "react";

const Card1 = ( {direccion, titulo, contenido, boton} ) => {
  return (
    <div style={{width:300}} class='card'>
      <iframe className="mt-2"
        width='280'
        height='280'
        src={direccion}
        controls
      ></iframe>
      <div class='card-body'>
        <h5 class='card-title'>{titulo}</h5>
        <p class='card-text'>{contenido}
        </p>
        <a href='#' class='btn btn-primary'>
          {boton}
        </a>
      </div>
    </div>
  );
};

export default Card1;
