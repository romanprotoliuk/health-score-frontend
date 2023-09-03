import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./components/common/AuthProvider";
import { UserProfileProvider } from "./context/UserProfile";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <UserProfileProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserProfileProvider>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>
);
reportWebVitals();
