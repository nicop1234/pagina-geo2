import React from "react";
import Link from "next/link";
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

const Footer = ({hrn1, hrn2, hrn3, n1, n2, n3, hrn4, hrn5, hrn6, hrn7, n4, n5, n6, n7}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className='text-center d-felx justify-content-center'>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls='example-collapse-text'
        aria-expanded={open} >
        Guia
      </Button>
      <div style={{ minHeight: "150px" }}>
        <Collapse in={open} >
          <div id='example-collapse-text'>
            <div className='d-flex justify-content-center pt-2 '>
              <Card body style={{ width: "50%" }} >
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Link href={hrn1}>
                      <a className='anclas text-dark'>{n1}</a>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link href={hrn2}>
                      <a className='anclas text-dark'>{n2}</a>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link href={hrn3}>
                      <a className='anclas text-dark'>{n3}</a>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link href={hrn4}>
                      <a className='anclas text-dark'>{n4}</a>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link href={hrn5}>
                      <a className='anclas text-dark'>{n5}</a>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link href={hrn6}>
                      <a className='anclas text-dark'>{n6}</a>
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Link href={hrn7}>
                      <a className='anclas text-dark'>{n7}</a>
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Footer;
