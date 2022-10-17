import React from "react";
import Collapse1 from "./Collapse1";
import { Nav, Navbar, Container, Row } from "react-bootstrap";

export const Hero = ({
  hrn1,
  hrn2,
  hrn3,
  hrn4,
  hrn5,
  hrn6,
  hrn7,
  n1,
  n2,
  n3,
  n4,
  n5,
  n6,
  n7

}) => {
  return (
    <>
      <div className='hero  d-flex align-items-center col-12 '>
        <Container>
          <Row className='d-flex justify-content-center text-center '>
            <div className='d-flex justify-content-center '>
              <h1 id='maquina-escribir' className=' text-white '>
                Pesca
              </h1>
            </div>
          </Row>

          <Collapse1
            hrn1={hrn1}
            hrn2={hrn2}
            hrn3={hrn3}
            hrn4={hrn4}
            hrn5={hrn5}
            hrn6={hrn6}
            hrn7={hrn7}
            n1={n1}
            n2={n2}
            n3={n3}
            n4={n4}
            n5={n5}
            n6={n6}
            n7={n7}
          />
        </Container>
      </div>
    </>
  );
};
export default Hero;
