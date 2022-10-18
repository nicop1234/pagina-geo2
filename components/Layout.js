/** @format */
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
import Footer from "./Footer.js";
import React from "react";
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
      <Footer></Footer>
    </>
  );
};
export default header;
