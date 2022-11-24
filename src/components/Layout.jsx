import React from 'react';
import {Container ,Row , Col} from "react-bootstrap";
import NavbarApp from "./NavbarApp";
import SideBar from "./SideBar";

const Layout = (props) => {
  return (
    <>
      <NavbarApp/>
      {
        props.sidebar ? (
          <Container fluid>
            <Row>
              <Col md={2}> <SideBar/> </Col>
              <Col md={10} className="pt-3"> 
                {props.children}
              </Col>
            </Row>
          </Container>

        ) :(
          <>
            <Container fluid>
                {props.children}
            </Container>
          </>
        )
      }
    </>
  )
}

export default Layout
