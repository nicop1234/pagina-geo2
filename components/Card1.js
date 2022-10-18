/** @format */

import React from "react";
import Image from "next/image";

const Card1 = ({ direccion, titulo, contenido, boton,link }) => {
  return (
    <div style={{ width: 325 }} class='card'>
      <Image
      alt="a"
        width={1920}
        height={1159}
        layout='intrinsic'
        src= {direccion}
        />
      <div className='card-body'>
        <h5 className='card-title'>{titulo}</h5>
        <p className='card-text'>{contenido}</p>
        <a rel="noopener" href= {link} className='btn btn-primary'>
          {boton}
        </a>
      </div>
    </div>
  );
};

export default Card1;
