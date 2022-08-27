import axios from "axios";
import { useState } from "react";
import "../components/registration.css";
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Container, Form, FormGroup,Label, Input, Row, Col} from "reactstrap"

function Register()
{
   const [name, setName] = useState("");
   const [userId, setUserId] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const [age, setAge] = useState("");
   const [phoneNo, setPhoneNo] = useState("");


   const [error, setError] = useState({
    errors :{},
    isError : false
   })

   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/signUp", 
        {
        name: name,
        userId: userId,
        password : password,
        email : email,
        age : age,
        phoneNo :phoneNo 
        });
          alert("User Registation Successfully");
          setName("");
          setUserId("");
          setPassword("");
          setEmail("");
          setAge("");
          setPhoneNo("");
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    return (
        <Container>
            <Row className= "mt-3">
                <Col sm={{size:6,offset:3}}>


                <Card onSubmit={handleSubmit}>
             
             <CardHeader>
             <br></br>  
             <h4>User Registration</h4>
             <h6>Fill in the Information Below</h6>
             </CardHeader>

            <CardBody>    
     
            <Form>               
            
            <FormGroup>
            <Label>Enter Name</Label>
            <Input type="text"
            name="name"
            placeholder="Enter here"
                     
             onChange={(event) =>
              {
                  setName(event.target.value);       
              }}
            />
            </FormGroup>

            <FormGroup>

            <Label>Enter UserId</Label>
            <Input type="text" 
            name="userId" 
            placeholder="Enter here" 
            onChange={(event) =>
                {
                    setUserId(event.target.value);       
                }}
            />
            </FormGroup>


             <FormGroup>
            <Label>Enter Password</Label>
            <Input type="text" 
            name="password"
            placeholder="Enter here"
            onChange={(event) =>
                {
                    setPassword(event.target.value);       
                }}           
            />
            </FormGroup>

            <FormGroup>
           <Label>Enter Email</Label>
           <Input type="text" 
            name="email" 
            placeholder="Enter here"
            onChange={(event) =>
                {
                    setEmail(event.target.value);       
                }}           
            />
            </FormGroup>

            <FormGroup>
            <Label>Enter Age</Label>  
            <Input type="text" 
            name="age" 
            placeholder="Enter here"
            onChange={(event) =>
                {
                    setAge(event.target.value);       
                }}           
            />
            </FormGroup>

            <FormGroup>
            <Label>Enter Phone Number</Label>
            <Input type="text" 
            name="phoneNo" 
            placeholder="Enter here"
            onChange={(event) =>
                {
                    setPhoneNo(event.target.value);       
                }}           
            />
            </FormGroup>

    

            <button type="submit">Register</button>

    
            </Form>   

            </CardBody>  

     
            </Card>
                
                
                </Col>
            </Row>
        </Container>
    )
}
