import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./main.css";
import { BrowserRouter,Routes,Route, Navigate, Outlet } from "react-router-dom";
import Login from "./routes/login";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import SignUp from "./routes/signup";
import { AuthContextProvider } from "./authContext";

const PrivateRoutes = () => {
  let auth = {'token':true}
return (
    auth.token ? <Outlet/> : <Navigate to='/login'/>
  )
}


let rootElement = document.getElementById("root");
ReactDOM.render( 
<BrowserRouter>
  <AuthContextProvider>
    <Routes>
      <Route path= "/" element= {<App />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route element={<PrivateRoutes/>}>
          {/* <Route path="profile" element={<Profile />} > */}
          <Route path="invoices" element={<Invoices />} >
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
        </Route>
        <Route path="*" element={<main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>} />
      </Route>
    </Routes>
  </AuthContextProvider>
</BrowserRouter>, 
rootElement);
