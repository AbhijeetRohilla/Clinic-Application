import React, { useState } from 'react'
import { Card, CardBody, Form, Label, Col, Row,Input, Button } from 'reactstrap';
import pic from '../assets/user.jpg';
import {RiUserFill} from 'react-icons/ri'
import axios from 'axios';

function UserSignup(){
    const posting_URL="http://localhost:4000/users"
    const [completedSignup,setCompletedSignup]=useState(false)
    const initialValue={id:"",name:"", password:"",gender:"",dateOfBirth:"", email:"",mobileNumber:"",pincode:"",
city:"",state:"",country:""};
const [formValue,setFormValue]=useState(initialValue);

const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormValue({...formValue,[name]:value})
}
const handleSubmit=async(e)=>{
    e.preventDefault();
    let response= await axios.post(posting_URL,formValue);
    if(response){
        alert("Data Saved Successfully!");
        setFormValue(initialValue);
    }
    else{
        alert("Something went wrong")
    }
}
    return(
        <>
        {!completedSignup &&
        <Card>
        <CardBody>
            <h2>User Profile {<RiUserFill/>}</h2>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Label>Name</Label>
                        <Input type='text' name='name' placeholder='Enter your Name'
                       onChange={handleChange} value={formValue.name} required='required'></Input>
                    </Col>
                    <Col>
                        <Label>Mobile Number</Label>
                        <Input type='number' name='mobileNumber' placeholder='Enter you Mobile Number'
                        onChange={handleChange} value={formValue.mobileNumber} required='required'></Input>
                    </Col>
                    </Row><br/>
                    <Row>
                    <Col>
                        <Label>Date of Birth</Label>
                        <Input type='date' name='dateOfBirth'
                        onChange={handleChange} value={formValue.dateOfBirth} required='required'  ></Input>
                    </Col>
                    <Col>
                        <Label>Pincode</Label>
                        <Input type='number' name='pincode' placeholder='Enter you Pincode'
                        onChange={handleChange} value={formValue.pincode} required='required'></Input>
                    </Col>
                    </Row><br/>
                    <Row>
                    <Col>
                        <Label>State</Label>
                        <Input type='text' name='state' placeholder='Enter state'
                        onChange={handleChange} value={formValue.state} required='required'></Input>
                    </Col>
                <Col>
                        <Label>Password</Label>
                        <Input type='password' name='password' placeholder='Enter your password'
                        onChange={handleChange} value={formValue.password} required='required'></Input>
                    </Col>
                    </Row><br/>
                    <Row>
                    <Col>
                        <Label>Email</Label>
                        <Input type='email' name='email' placeholder='Enter your Email'
                        onChange={handleChange} value={formValue.email} required='required'></Input>
                    </Col>
                    <Col>
                    <Label>Gender</Label><br/>
                                <input type="radio" id="male" name="gender" value='M'
                                onChange={handleChange} ></input>
  <label htmlFor="male">Male</label>
  <input type="radio" id="female" name="gender" value="F"
onChange={handleChange}></input>
  <label htmlFor="female">Female</label>
                    </Col>
                    </Row><br/>
                    <Row>
                    <Col>
                        <Label>City</Label>
                        <Input type='text' name='city' placeholder='City'
                        onChange={handleChange} value={formValue.city} required='required'></Input>
                    </Col>
                    <Col>
                        <Label>Country</Label>
                        <Input type='text' name='country' placeholder='Country'
                        onChange={handleChange} value={formValue.country} required='required'></Input>
                    </Col>
                    </Row><br/>
                
                <Button type='submit'>Register</Button>
            </Form>
            </CardBody>
        </Card>
        }
        {
            completedSignup&&
            <div className='signupcompleted'>
            <img style={{width:'20%',height:"30%"}}src={pic}></img>
            <h2>Account created successfully</h2>
            <h5>Your user id is</h5>
            <Button >Login Now</Button>

            </div>
        }
        </>
    )
}
export default UserSignup;