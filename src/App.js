import Register from "./pages/registration";
import Login from "./pages/login";
import Home from "./pages/Home";
import './App.css';
import {BrowserRouter,Switch,Route,Routes} from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from "./components/Base";
import Services from "./pages/Services";
import CreateAccount from "./pages/createaccount";
import PinChange from "./pages/pinchange";
import BalanceView from "./pages/balanceview";
import Withdraw from "./pages/withdraw";
import Deposit from "./pages/deposit";
import TransactionList from "./pages/transactionlist";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Table from "./pages/table";

function App() {
  return (

       <Base> 
       <BrowserRouter>
       <ToastContainer position = "bottom-center"/>
       <Routes>
          <Route path="/" element = {<Home/>} /> 
          <Route path="/login" element = {<Login/>} /> 
          <Route path="/signup" element = {<Register/>} /> 
          <Route path="/services" element = {<Services/>} />
          <Route path="/create-account" element = {<CreateAccount/>} />
          <Route path="/pin-change" element = {<PinChange/>} />
          <Route path="/balance-view" element = {<BalanceView/>} />
          <Route path="/withdraw-money" element = {<Withdraw/>} />
          <Route path="/deposit-money" element = {<Deposit/>} />
          <Route path="/list-of-transaction" element = {<TransactionList/>} />
          <Route path="/table" element = {<Table/>} />
      </Routes>
    </BrowserRouter>
       </Base>
  )
  
}

export default App;