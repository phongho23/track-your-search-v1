import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div
  `.navbar { background-color: #282828; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: white;
    font-weight: bold;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: white;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  .navbar-toggler-icon {
      background-color: white;
  }
  `;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" style={{ backgroundImage: `url("https://i.imgur.com/mULMwTn.jpg")` }}>
      <Navbar.Brand href="/home">TrackYourSearch</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/home/add-week">Add Week</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/home/add-job">Add Job</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

