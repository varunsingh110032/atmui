import axios from "axios";
import { useState } from "react";
import "../components/registration.css";
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Container, Form, FormGroup,Label, Input, Row, Col, Button} from "reactstrap"
import { toast } from "react-toastify";
import {loginUser} from "../services/user-service";

function Login()
{
   const [loginDetail,setLoginDetail] = useState({
    userId:'',
    password:''
   })



   const handleChange=(event,property)=> {

    let actualValue=event.target.value
    // dynamic setting the values
    setLoginDetail({...loginDetail,[property]:actualValue})
   }

   //resetting the form
   const handleReset=()=>{
    setLoginDetail({
        userId:'',
        password:'',
       })
   }

   const [resp, setResp] = useState('');


   function PrintMessage(){
    // console.log("hello world") 
    // if(error==='') {
    //   return '';
    // }
    // console.log(error)
    return resp;
  }

   //submitting the form
   const handleFormSubmit=(event)=>{
    event.preventDefault()

    // if(error.isError){
    //     toast.error("Form Data is Invalid")
    //     setError({...error,isError:false})
    //     return;
    // }

    console.log(loginDetail);

    //data validate

    if(loginDetail.userId.trim()=='' || loginDetail.password.trim()==''){
        toast.error("UserId or Password is required")
        return;
    }
    //call server api for sending data
    loginUser(loginDetail).then((resp)=>{
        console.log(resp)
        console.log("Success log")
        setResp(resp.user[0])
        if(resp.user[0] === "Successfully logged in " ){
            console.log("if statement works")
            toast.success(resp.user[0])
          }else{        
        toast.error(resp.user[0])
          }
        
        
        setLoginDetail({
        userId:'',
        password:'',
        })

    }).catch((error)=>{
        console.log(error)
        console.log("Error log")
        
        

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
         <h4>User Login</h4>
         <h6>Fill in the Credentials Below</h6>
         </CardHeader>

        <CardBody>    
 
        <Form onSubmit={handleFormSubmit}>             

        <FormGroup>
        {/* <h6>{resp}</h6> */}
        <Label>Enter UserId</Label>
            <Input type="text" 
            name="userId" 
            placeholder="Enter here" 
            onChange={(e) =>handleChange(e,'userId')}
            value={loginDetail.userId}
            />
        </FormGroup>


        <FormGroup>
        <Label>Enter Password</Label>
            <Input type="text" 
            name="password"
            placeholder="Enter here"
            onChange={(e) =>handleChange(e,'password')}   
            value={loginDetail.password}      
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

export default Login;