/** @format */

import React from "react";
import Image from "next/image";

const Card1 = ({ direccion, titulo, contenido, boton,link }) => {
  return (
    <div style={{ width: 325 }} class='card'>
      <Image
        width={1920}
        height={1159}
        layout='intrinsic'
        src= {direccion}
        />
      <div class='card-body'>
        <h5 class='card-title'>{titulo}</h5>
        <p class='card-text'>{contenido}</p>
        <a target="_blank" href= {link} class='btn btn-primary'>
          {boton}
        </a>
      </div>
    </div>
  );
};

export default Card1;
