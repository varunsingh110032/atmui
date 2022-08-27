import axios from "axios";
import { useEffect, useState } from "react";
import "../components/registration.css";
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Container, Form, FormGroup,Label, Input, Row, Col, Button, FormFeedback,} from "reactstrap"
import {createaccount} from "../services/user-service"
import {toast} from 'react-toastify';

function CreateAccount()
{
   const [accountDetail,setAccountDetail] = useState({
    bankName:'',
    pin:'',
    userId:'',
    totalMoney:'',
    accountType:'',
   })


   const [error, setError] = useState('');
   const [resp, setResp] = useState('');
   const [isred, setIsred] = useState(false);

   // handle change
   const handleChange=(event,property)=> {

    // dynamic setting the values
    setAccountDetail({...accountDetail,[property]:event.target.value})
   }

   //resetting the form
   const resetAccountDetail=()=>{
    setAccountDetail({
        bankName:'',
        pin:'',
        userId:'',
        totalMoney:'',
        accountType:'',
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

    console.log(accountDetail);

    //data validate
    if(accountDetail.bankName.trim()=='' || accountDetail.pin.trim()=='' || accountDetail.userId.trim()=='' || accountDetail.totalMoney.trim()=='' || accountDetail.accountType.trim()==''){
        toast.error("Pls check for empty Fields")
        return;
    }

    //call server api for sending data
    createaccount(accountDetail).then((resp)=>{
        console.log(resp)
        console.log("Success log")
        setResp(resp.user[0])
        if(resp.user[0] === "Account created successfully"){
            toast.success(resp.user[0])
        }
        //else{
        // toast.error(resp.user[0])
        // }
        setAccountDetail({
            bankName:'',
            pin:'',
            userId:'',
            totalMoney:'',
            accountType:'',
        })

    })
    .catch((error)=>{
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

                {/* {JSON.stringify(data)} */}
                <Col sm={{size:6,offset:3}}>


                <Card>
             
             <CardHeader>
             <br></br>  
             <h4>Create Account</h4>
             <h6>Fill in the Information Below</h6>
             </CardHeader>

            <CardBody>    
     
            <Form onSubmit={submitForm}>               
            
            <FormGroup>
                {/* <h6 style={{ color: isred ? 'green' : 'red' }}>{error}</h6> */}
            <Label>Enter Bank Name</Label>
            <Input type="text"
            name="bankName"
            placeholder="Enter here"
                     
             onChange={(e) =>handleChange(e,'bankName')}
             value={accountDetail.bankName}
            //  invalid={error.response? true: false}
            />

            
            </FormGroup>

            <FormGroup>

            <Label>Enter UserId</Label>
            <Input type="text" 
            name="userId" 
            placeholder="Enter here" 
            onChange={(e) =>handleChange(e,'userId')}
            value={accountDetail.userId}
            />
            </FormGroup>


             <FormGroup>
            <Label>Enter a 4 digit Pin</Label>
            <Input type="text" 
            name="pin"
            placeholder="Enter here"
            onChange={(e) =>handleChange(e,'pin')}   
            value={accountDetail.pin}      
            />
            </FormGroup>

            <FormGroup>
           <Label>Enter Account Type(Saving/Current)</Label>
           <Input type="text" 
            name="accountType" 
            placeholder="Enter here"
            onChange={(e) =>handleChange(e,'accountType')}   
            value={accountDetail.accountType}     
            />
            </FormGroup>

            <FormGroup>
            <Label>Enter Total Money</Label>  
            <Input type="text" 
            name="totalMoney" 
            placeholder="Enter here"
            onChange={(e) =>handleChange(e,'totalMoney')} 
            value={accountDetail.totalMoney}        
            />
            </FormGroup>

    
            <Container className="text-center">
                <Button color="dark"> Create Account </Button>
                <Button onClick={resetAccountDetail} color= "secondary" type="reset" className="ms-2"> Reset </Button>
            </Container>

    
            </Form>   

            </CardBody>  

     
            </Card>
                
                
                </Col>
            </Row>
        </Container>
    )
}

export default CreateAccount;