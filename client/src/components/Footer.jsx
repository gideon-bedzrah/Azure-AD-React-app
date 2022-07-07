import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default function Footer() {


    return(

        <Navbar 
        bg="dark" 
        variant="dark" 
        expand="lg"
        style={{zIndex: "1046", position: "fixed", left: 0, right: 0, bottom: 0}}
        >

           <Navbar.Collapse className="justify-content-center">
          <Navbar.Text>
          Made with ❤️ by Gideon Bedzrah
          </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>

    )
}