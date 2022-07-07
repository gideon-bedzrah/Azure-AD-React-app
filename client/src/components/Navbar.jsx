import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button";
// import { SignOutButton } from "./SignOutButton";
import { useIsAuthenticated } from "@azure/msal-react";
import { useMsal } from "@azure/msal-react";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar(props) {
    const { instance, accounts, inProgress } = useMsal();

    const name = accounts[0] && accounts[0].name;

    const isAuthenticated = useIsAuthenticated();

    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{zIndex: "1046", position: "static", left: 0, right: 0, top: 0}}>
            <Container>
                <Navbar.Brand href="/" style={{fontSize: "15px"}}>
                    Microsoft OAuth 2 demo</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Gideon Bedzrah</a>
          </Navbar.Text>
          <Button className="ms-3" variant="secondary" size="sm">Sign out</Button>
        </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}