import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SignInMicrosoft from "../images/SignInMicrosoft";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

export default function SignInModal(props) {

    const { instance } = useMsal();

    function handleLogin(instance) {
        instance.loginRedirect(loginRequest).catch(e => {
            console.error(e);
        });
    }


    return(
        <div>
            <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="mx-auto">
            {/* <img src={require("../images/multiply---filled(96x96)@2x.png")} width="20" className="me-3" alt="" /> */}
            Sign in
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{textAlign: "center"}}>
        You are currently not signed in. <br /> To use this application kindly sign in below
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button 
        onClick={() => handleLogin(instance)}
        className="mx-auto" variant="none"><SignInMicrosoft /></Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}