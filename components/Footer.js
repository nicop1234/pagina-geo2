

import { Nombres } from "../profile";
import Head from "next/head";
import {
  Button,
  Collapse,
  ListGroup,
  Card,
  Nav,
  Navbar,
  Row,
  Container,
} from "react-bootstrap";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import React from 'react'

const Footer = () => {
    const [useOpen, setOpen] = useState(false);
    const [useOpen2, setOpen2] = useState(false);
  return (
    <>
       <div className='d-flex bg-dark text-white'>
        <Container>
          <Row>
            <div className='d-flex mx-3 titulo mt-3 mb-2'>
              <div className=' d-flex justify-content-center'>
                <div>
                  <Button
                    onClick={() => setOpen(!useOpen)}
                    aria-controls='example-collapse-text'
                    aria-expanded={useOpen}
                    id='Boton-integrntes'
                    variant='dark'>
                    Integrantes <IoIosArrowDown></IoIosArrowDown>
                  </Button>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div>
              <Collapse in={useOpen}>
                <div id='example-collapse-text'>
                  <div className='d-flex justify-content-center pt-2 '>
                    <Container className='d-flex d-flex justify-content-center'>
                      <Row className='justify-content-center'>
                        {Nombres.map(({ nombre }, i) => (
                          <div key={i} className='col-5 col-lg-1 col-md-3 ms-3'>
                            <ul>
                              <li className='fuente nombres-estilo'>
                                {nombre}
                              </li>
                            </ul>
                          </div>
                        ))}
                      </Row>
                    </Container>
                  </div>
                </div>
              </Collapse>
            </div>
          </Row>
          <Row>
            <div className='d-flex mx-3 '>
              <div className=' d-flex justify-content-center'>
                <div>
                  <Button
                    onClick={() => setOpen2(!useOpen2)}
                    aria-controls='example-collapse-text'
                    aria-expanded={useOpen2}
                    id='Boton-integrntes'
                    variant='dark'>
                    Bibliografia <IoIosArrowDown></IoIosArrowDown>
                  </Button>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div>
              <Collapse in={useOpen2}>
                <div id='example-collapse-text'>
                  <div className=' pt-2 '>
                    <div className='mx-5'>
                      <p>
                        {" "}
                        <span>- </span> https://www.argentina.gob.ar/inidep
                      </p>
                      <p>
                        {" "}
                        <span>- </span> https://www.pampazul.gob.ar/investigacion-y-desarrollo/desarrollo-tecnologico/pesqueras/
                      </p>
                      <p>
                        {" "}
                        <span>- </span> https://www.nauticaydeportes.com/noticias/embarcaciones-perfectas-pesca/#:~:text=Barco%20cabinado%20pequeño.&text=Este%20tipo%20de%20embarcación%20se,y%20nos%20garantiza%20estar%20estables.
                      </p>
                      <p>
                        {" "}
                        <span>- </span> https://www.cosasdebarcos.com/blog/mercado/tipos-de-barcos-de-pesca/#Barco-cabinado-pequeño
                      </p>
                      <p>
                        {" "}
                        <span>- </span> https://sustainablefisheries-uw.org/seafood-101-es/metodos-de-pesca-comercial/
                      </p>
                      <p>
                        {" "}
                        <span>- </span> https://www.lanacion.com.ar/seguridad/el-juego-del-calamar-en-el-atlantico-sur-nid16122021/#:~:text=%E2%80%9CM%C3%A1s%20all%C3%A1%20de%20que%20a,199%20o%20201%E2%80%B3%2C%20afirma
                      </p>{" "}
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </Row>
          <Row>
            <div className='d-flex justify-content-center'>
              <p>
                <span> © </span> DivGeeks Industries / From SFN
              </p>
            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Footer