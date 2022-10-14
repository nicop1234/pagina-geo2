/** @format */

import { Nombres } from "../profile";
import { useState } from "react";
import React from "react";
import { Nav, Navbar, Container, Row, Collapse, Button } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
const header = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        className='pb-2'
        sticky='top'
      >
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>
                <h1 className='text-white fuente'>
                  Div<span className='text-info'>Geek</span>
                </h1>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='/' className='text-white fuente'>
                Inicio
              </Nav.Link>
              <Nav.Link
                target='_blank'
                href='https://nosotros-q0clom4pi-faure1.vercel.app'
                className='text-white fuente'
              >
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}

      <div className='d-flex bg-dark text-white'>
        <Container>
          <Row>
            <div className='d-flex mx-3 titulo mt-3 mb-3'>
              <div className=' d-flex justify-content-center'>
                <div>
                  <Button
                  onClick={() => setOpen(!open)}
                  aria-controls='example-collapse-text'
                  aria-expanded={open}
                  id='Boton-integrntes'
                  variant="dark"
                >
                  Integrantes <IoIosArrowDown></IoIosArrowDown>
                </Button>
                </div>
              </div>
            </div>
          </Row>
          <Row>
          <div >
                  <Collapse in={open}>
                    <div id='example-collapse-text'>
                      <div className='d-flex justify-content-center pt-2 '>
                        <Container className='d-flex d-flex justify-content-center'>
                          <Row className='justify-content-center'>
                            {Nombres.map(({ nombre }, i) => (
                              <div className='col-5 col-lg-1 col-md-3 ms-3'>
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
            <div className='d-flex justify-content-center'>
              <p>
                <span> © </span> DivGeeks Industries / From SFN
              </p>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default header;
