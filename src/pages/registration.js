import axios from "axios";
import { useEffect, useState } from "react";
import "../components/registration.css";
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Container, Form, FormGroup,Label, Input, Row, Col, Button, FormFeedback,} from "reactstrap"
import {signUp} from "../services/user-service";
import {toast} from 'react-toastify';

function Register()
{
   const [data,setData] = useState({
    name:'',
    userId:'',
    password:'',
    email:'',
    age:'',
    phoneNo:'',
   })


   const [error, setError] = useState('');
   const [resp, setResp] = useState('');
   const [isred, setIsred] = useState(false);

   // handle change
   const handleChange=(event,property)=> {

    // dynamic setting the values
    setData({...data,[property]:event.target.value})
   }

   //resetting the form
   const resetData=()=>{
    setData({
        name:'',
        userId:'',
        password:'',
        email:'',
        age:'',
        phoneNo:'',
       })
   }

   //submitting the form
   const submitForm=(event)=>{
    event.preventDefault()

    // if(error.isError){
    //     toast.error("Form Data is Invalid")
    //     setError({...error,isError:false})
    //     return;
    // }

    console.log(data);

    //data validate

    //call server api for sending data
    signUp(data).then((resp)=>{
        console.log(resp)
        console.log("Success log")
        setResp(resp.user[0])
        if(resp.user[0] === "Successfully Registered"){
            toast.success(resp.user[0])
        }else{
        toast.error(resp.user[0])
        }
        setData({
        name:'',
        userId:'',
        password:'',
        email:'',
        age:'',
        phoneNo:'', 
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
        //   if(error.response.data.user === "Successfully Registered" ){
        //     setIsred(true)
        //   }else{
        //   setIsred(false)
        //   }
          }

    })


    ;

   }

   
    return (
        <Container>
            <Row className= "mt-3">

                {/* {JSON.stringify(data)} */}
                <Col sm={{size:6,offset:3}}>


                <Card>
             
             <CardHeader>
             <br></br>  
             <h4>User Registration</h4>
             <h6>Fill in the Information Below</h6>
             </CardHeader>

            <CardBody>    
     
            <Form onSubmit={submitForm}>               
            
            <FormGroup>
                {/* <h6 style={{ color: isred ? 'green' : 'red' }}>{error}</h6> */}
            <Label>Enter Name</Label>
            <Input type="text"
            name="name"
            placeholder="Enter here"
                     
             onChange={(e) =>handleChange(e,'name')}
             value={data.name}
            //  invalid={error.response? true: false}
            />

            
            </FormGroup>

            <FormGroup>

            <Label>Enter UserId</Label>
            <Input type="text" 
            name="userId" 
            placeholder="Enter here" 
            onChange={(e) =>handleChange(e,'userId')}
            value={data.userId}
            />
            </FormGroup>


             <FormGroup>
            <Label>Enter Password</Label>
            <Input type="text" 
            name="password"
            placeholder="Enter here"
            onChange={(e) =>handleChange(e,'password')}   
            value={data.password}      
            />
            </FormGroup>

            <FormGroup>
           <Label>Enter Email</Label>
           <Input type="text" 
            name="email" 
            placeholder="Enter here"
            onChange={(e) =>handleChange(e,'email')}   
            value={data.email}     
            />
            </FormGroup>

            <FormGroup>
            <Label>Enter Age</Label>  
            <Input type="text" 
            name="age" 
            placeholder="Enter here"
            onChange={(e) =>handleChange(e,'age')} 
            value={data.age}        
            />
            </FormGroup>

            <FormGroup>
            <Label>Enter Phone Number</Label>
            <Input type="text" 
            name="phoneNo" 
            placeholder="Enter here"
            onChange={(e) =>handleChange(e,'phoneNo')} 
            value={data.phoneNo}        
            />
            </FormGroup>

    
            <Container className="text-center">
                <Button color="dark"> Register </Button>
                <Button onClick={resetData} color= "secondary" type="reset" className="ms-2"> Reset </Button>
            </Container>

    
            </Form>   

            </CardBody>  

     
            </Card>
                
                
                </Col>
            </Row>
        </Container>
    )
}

export default Register;