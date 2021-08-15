import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider
    domain={process.env.REACT_APP_AUTHO_DOAMIN}
    clientId={process.env.REACT_APP_AUTHO_CLIENTID}
    redirectUri='http://localhost:3000'
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);