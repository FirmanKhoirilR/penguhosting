import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./hooks/StateContext.tsx";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { GoogleOAuthProvider } from "@react-oauth/google";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <QueryClientProvider client={client}>
          <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_CLIENT_ID}>
            <ReactQueryDevtools />
            <App />
          </GoogleOAuthProvider>
        </QueryClientProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
