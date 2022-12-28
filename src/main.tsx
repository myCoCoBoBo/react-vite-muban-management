import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "reset-css";
import App from "./App";
import "@/assets/styles/global.scss";
import { BrowserRouter, Route } from "react-router-dom";
import {Provider} from "react-redux"
import store from "@/store"
//react-dom.development.js:19055 Uncaught Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

 <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}><App /></Suspense>
    </BrowserRouter>
 </Provider>
    
);
