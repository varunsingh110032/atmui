import axios from "axios";
import { useState } from "react";
import "../components/registration.css";
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Container, Form, FormGroup,Label, Input, Row, Col, Button} from "reactstrap"
import { toast } from "react-toastify";
import {deposit} from "../services/user-service";

function Deposit()
{
   const [accountDetail,setAccountDetail] = useState({
    debitCardNo:'',
    pin:'',
    money:'',
   })



   const handleChange=(event,property)=> {

    let actualValue=event.target.value
    // dynamic setting the values
    setAccountDetail({...accountDetail,[property]:actualValue})
   }

   //resetting the form
   const handleReset=()=>{
    setAccountDetail({
        debitCardNo:'',
        pin:'',
        money:'',
       })
   }

   const [resp, setResp] = useState('');
   const [error, setError] = useState('');


   //submitting the form
   const handleFormSubmit=(event)=>{
    event.preventDefault()



    console.log(accountDetail);

    //data validate

    if(accountDetail.debitCardNo.trim()=='' || accountDetail.pin.trim()=='' || accountDetail.money.trim()==''){
        toast.error("Pls check for empty Fields")
        return;
    }
    // //call server api for sending data
    deposit(accountDetail).then((resp)=>{
         console.log(resp)
         console.log("Success log")
        setResp(resp.user[0])
        if(resp.user[0] === "Debit Successful" ){
            toast.success(resp.user[0])
          }else{        
        toast.error(resp.user[0])
          }
        
        
        setAccountDetail({
            debitCardNo:'',
            pin:'',
            money:'',
        })

     }).catch((error)=>{
         console.log(error)
         console.log("Error log")
         if(typeof error.response.data == "string") {
            console.log("no user error")
            setError(error.response.data)
            toast.error(error.response.data)
            }else{
           console.log("user error")
            setError(error.response.data.user)
            toast.error(error.response.data.user[0])
       
            }

     })


     ;

   }

   
    return (
        <Container>
            <Row className= "mt-3">
                <Col sm={{size:6,offset:3}}>
        <Card>
         
         <CardHeader>
         <br></br>  
         <h4>Deposit Money</h4>
         <h6>Fill in the Credentials Below</h6>
         </CardHeader>

        <CardBody>    
 
        <Form onSubmit={handleFormSubmit}>             

        <FormGroup>
        {/* <h6>{resp}</h6> */}
        <Label>Enter Debit Card Number</Label>
            <Input type="text" 
            name="debitCardNo" 
            placeholder="Enter here" 
            onChange={(e) =>handleChange(e,'debitCardNo')}
            value={accountDetail.debitCardNo}
            />
        </FormGroup>


        <FormGroup>
        <Label>Enter Pin</Label>
            <Input type="text" 
            name="pin"
            placeholder="Enter here"
            onChange={(e) =>handleChange(e,'pin')}   
            value={accountDetail.pin}      
            />

          </FormGroup>

          
        <FormGroup>
        <Label>Enter Amount</Label>
            <Input type="text" 
            name="money"
            placeholder="Enter here"
            onChange={(e) =>handleChange(e,'money')}   
            value={accountDetail.money}      
            />

          </FormGroup>

               

          <Container className="text-center">
                <Button color="dark"> Login </Button>
                <Button onClick={handleReset} color= "secondary" type="reset" className="ms-2"> Reset </Button>
            </Container>

    


            </Form> 
            </CardBody>  

     
</Card>
</Col>
            </Row>
</Container>
    )

}

export default Deposit;