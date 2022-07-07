# OAUTH 2.0 with Azure AD in REACT frontend and node js backend

This project demonstrations how to add microsoft OAuth 2.0 authentication to a React Frontend and a node js backend.

## Brief
### Prerequisite
1. An Azure account with a subscription
2. An app registeration for Client and an app registration for APIs
3. Obtained configuration info i.e. Tentant ID, Client ID, Scope etc.

### Objectives
1. Sign in to your Azure active directory from the frontend
2. Protect backend APIs
3. Get token from Client to API header


## Frontend
cd client
Run: 
### `npm install`

### Modules (Dependencies)

1. @azure/msal-browser
2. @azure/msal-react
3. axios
4. bootstrap
5. react-bootstrap

### Steps:

Open authConfig.js file in '/client/src/' directory

Replace client ID, authority and redirect URI with credentials obtained from your Azure App registration for your client.

## Backend
Run: 
### `npm install`

### Modules (Dependencies)

1. passport
2. passport-azure-ad
3. morgan
4. express
5. path
6. mongoose
7. dotenv
8. cors


    
    
    
    
    
    
    


