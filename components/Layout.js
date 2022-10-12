/** @format */

import { Nombres } from "../profile";
import React from "react";
import { Nav, Navbar, Container, Row } from "react-bootstrap";

const header = ({ children }) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        className='pb-2'
        sticky='top'>
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
                className='text-white fuente'>
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {children}
      <div className='text-white d-flex justify-content-center bg-dark'>
        <Container>
          <Row className='mb-3'>
            <h6 className='mt-3 mb-3 fuente titulo'>Hecho por</h6>
            <div className='d-flex'>
              <Container className='d-flex justify-content-center'>
                {Nombres.map(({ nombre }, i) => (
                  <div className='d-flex col-md-3 col-lg-1 col-xl-1 col-sm-4 col-4 ms-1'>
                    <ul>
                      <li className='fuente nombres-estilo'>{nombre}</li>
                    </ul>
                  </div>
                ))}
              </Container>
            </div>
          </Row>
          <Row>
            <div className='text-center'>
              <p>
                <span className='text-center'> © </span> DivGeeks Industries/
                From SFN
              </p>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default header;
