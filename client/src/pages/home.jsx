import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import callAPI from "../api/callAPI";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { useMsal } from "@azure/msal-react";
import {protectedResources} from "../authConfig.js"
import { InteractionStatus, InteractionRequiredAuthError } from '@azure/msal-browser';

export default function Home() {

    const isAuthenticated = useIsAuthenticated();
    const { instance, accounts, inProgress } = useMsal();


    const handleCallAPI = () => {

        // check if user is authenticated then acquire token in the background before making API call
        
        isAuthenticated &&
            instance.acquireTokenSilent({
                scopes: protectedResources.basicAccess.scopes,
                account: accounts[0]
            }).then(response => {
                //get accessToken
                // console.log(response.accessToken)
                callAPI(response.accessToken)
            }).catch(error => {
                if (error instanceof InteractionRequiredAuthError) {
                    if (accounts[0] && inProgress === InteractionStatus.None) {
                        instance.acquireTokenPopup({
                            scopes: protectedResources.basicAccess.scopes,
                        }).then(response => {
                            callAPI(response.accessToken)
                        }).catch(error => console.log(error));
                    }
                }
            })
            
    }

    return (
        <div>
            <NavBar />
            <Container>
                <h1 style={{ color: "black", marginTop: "auto" }}>Some custom content visible to only logged in users</h1>
                <p>Click call an API below to call your nodejs API</p>
                <Button
                    onClick={handleCallAPI}
                >Call an API</Button>
            </Container>
            <Footer />
        </div>
    )
}