import dotenv from "dotenv";
dotenv.config()


export default {
    "tenantID": process.env.TENANT_ID,
    "clientID": process.env.CLIENT_ID,
    "audience": process.env.AUDIENCE,
    "authority": "login.microsoftonline.com",
    "version": "v2.0",
    "discovery": ".well-known/openid-configuration",
    "scope": [process.env.SCP1, process.env.SCP2],
    "validateIssuer": true,
    "passReqToCallback": false,
    "loggingLevel": "info"
}