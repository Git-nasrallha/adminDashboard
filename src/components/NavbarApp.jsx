import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useSelector } from 'react-redux';



const NavbarApp = () => {
  const {isAuthontecated ,admin} = useSelector(state=>state.Auth);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link to="/"> Dashboard</Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <div className="user-action">
             {
              isAuthontecated? <>
                <span>Welcome {admin.firstName}</span>
                <button>Logout</button>
              </> : <>
                <Link to="/users/login" className="mx-3">
                  Login
                </Link>
                <Link to="/users/register" className="mx-3">
                  Register
                </Link>
              </>
             }
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarApp;
