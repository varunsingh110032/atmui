import axios from "axios";
import { useState } from "react";
import "../components/registration.css";
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Container, Form, FormGroup,Label, Input, Row, Col, Button} from "reactstrap"
import { toast } from "react-toastify";
import {transaction} from "../services/user-service";
import { render } from "@testing-library/react";

function TransactionList()
{
   const [accountDetail,setAccountDetail] = useState({
    accountId:'',
    transactionType:'',
   })



   const handleChange=(event,property)=> {

    let actualValue=event.target.value
    // dynamic setting the values
    setAccountDetail({...accountDetail,[property]:actualValue})
   }

   //resetting the form
   const handleReset=()=>{
    setAccountDetail({
        accountId:'',
        transactionType:'',
       })
   }

   const [resp, setResp] = useState('');
   const [error, setError] = useState('');

   class transactions extends Component{
    constructor(props) {
        super(props)
        this.state = {
            transactions : []
        }
    }
}


   //submitting the form
   const handleFormSubmit=(event)=>{
    event.preventDefault()

    // if(error.isError){
    //     toast.error("Form Data is Invalid")
    //     setError({...error,isError:false})
    //     return;
    // }

    console.log(accountDetail);

    //data validate

    if(accountDetail.accountId.trim()=='' || accountDetail.transactionType.trim()==''){
        toast.error("Pls check for empty Fields")
        return;
    }
    // //call server api for sending data
    transaction(accountDetail).then((resp)=>{
         console.log(resp)
         console.log("Success log")
         this.setState({
            transactions:resp,

            render(){
                const {transactions} = this.state
                    return (
                        <div>
                            <h2> List of Transaction</h2>
                            <table>
                              <thead>
                                <tr>
                                 <td>transactionID</td>
                                 <td>transactionType</td>
                                 <td>amount</td>
                                 <td>dateOfCreation</td>
                                 <td>accountId</td>
                                 <td>userId</td>
                                 </tr>
                              </thead>
        
                              <tbody>
                            {
                                transactions.map(function (transaction){
                                   return <tr>
                                    <td>{transaction.transactionID}</td>
                                    <td>{transaction.transactionType}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.dateOfCreation}</td>
                                    <td>{transaction.accountId}</td>
                                    <td>{transaction.userId}</td>
                                    </tr>
                                })
                            }
        
                              </tbody>
                            </table>
                        </div>
                    );
                 }
         })
        // setResp(resp.user[0])
        // if(resp.user[0].charAt(0) === "Y" ){
        //     toast.info(resp.user[0])
        //   }else{        
        // toast.error(resp.user[0])
        //   }

        
        
        
        // setAccountDetail({
        //     accountId:'',
        //     transactionType:'',
        // })

     })
     .catch((error)=>{
         console.log(error)
         console.log("Error log")
        //  if(typeof error.response.data == "string") {
        //     console.log("no user error")
        //     setError(error.response.data)
        //     toast.error(error.response.data)
        //     }else{
        //    console.log("user error")
        //     setError(error.response.data.user)
        //     toast.error(error.response.data.user[0])
        //     }
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
         <h4>Transaction List</h4>
         <h6>Fill in the Credentials Below</h6>
         </CardHeader>

        <CardBody>    
 
        <Form onSubmit={handleFormSubmit}>             

        <FormGroup>
        {/* <h6>{resp}</h6> */}
        <Label>Enter your Account ID</Label>
            <Input type="text" 
            name="accountId" 
            placeholder="Enter here" 
            onChange={(e) =>handleChange(e,'accountId')}
            value={accountDetail.accountId}
            />
        </FormGroup>


        <FormGroup>
        <Label>Enter Transaction Type (Withdraw/Deposit/Both)</Label>
            <Input type="text" 
            name="transactionType"
            placeholder="Enter here"
            onChange={(e) =>handleChange(e,'transactionType')}   
            value={accountDetail.transactionType}      
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