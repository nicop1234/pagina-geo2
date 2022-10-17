/** @format */

/** @format */

import React from "react";
import Image from "next/image";
import { Container, Row } from "react-bootstrap";

const Bootstrap1 = ({ direccion, titulo, contedido }) => {
  return (
    <Container>
      <Row>
        <div className='col-12 col-lg-6 d-flex align-items-center mb-5'>
          <Container>
            <Row>
              <div>
                <h4 className='text-center fuente'>{titulo}</h4>
              </div>
            </Row>
            <div>
              <p className='text-center la-pesca fuente'>{contedido}</p>
            </div>
          </Container>
        </div>
        <div className=' col-12 col-lg-6 d-flex align-items-center mb-5'>
          <Image
            width={1920}
            height={1159}
            layout='intrinsic'
            src={direccion}
            alt={titulo}
          />
        </div>
      </Row>
    </Container>
  );
};

export default Bootstrap1;