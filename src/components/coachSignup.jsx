import React, { useState } from 'react'
import { Card, CardBody, CardHeader, Form, Row ,Col, Label, Input, Button } from 'reactstrap';
import {FiUserCheck} from 'react-icons/fi';
import pic from '../assets/coach.jpg';
import {Link} from 'react'
import axios from 'axios';


function CoachSignup(){
    const posting_URL="http://localhost:4000/coaches";
    const [completedSignup, setCompletedSignup]=useState(false);
    const initialValue={id:"",name:"", password:"",gender:"",dateOfBirth:"",mobileNumber:"",speciality:""};
    const [formValue,setFormValue]=useState(initialValue);
    const [error,setError]=useState({})


    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormValue({...formValue,[name]:value});
        
        

    }
    const Validation=(formValue)=>{
        let error={};
        if(formValue.name.length<3 || formValue.name.length>50 ){
            error.name="Name should have 3 to 50 characters"
        }
        if(formValue.password.length<5 || formValue.password.length>10){
            error.password="Password should have 5 to 10 characters"
        }
        if(formValue.mobileNumber.length>10){
            error.mobileNumber="Mobile Number should have 10 digits"
        }
        if(formValue.speciality.length<10 || formValue.speciality.length>50){
            error.speciality="Speciality should have 10 to 50 characters"
        }
        return error;

    }
    
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setError(Validation(formValue));
    let res=await axios.post(posting_URL,formValue);
    if(res){
        alert("Saved Successfully!")
        setFormValue(initialValue);
    }
    else{
        alert("Something went wrong!")
    }
  }


    return (
        <>
       {!completedSignup&&
        <div className='container'>
            <Card>
                <CardHeader>
                    Life Coach Profile&nbsp;&nbsp; {<FiUserCheck/>}
                </CardHeader>
                <CardBody>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Label>Name</Label>
                                <Input type='text' name='name' placeholder='Enter your Name' autoComplete='off' 
                                value={formValue.name} onChange={handleChange} ></Input>
                                {error.name && <p className='error'>{error.name}</p>}
                            </Col>
                            <Col>
                                <Label>Password</Label>
                                <Input type='password' name='password' placeholder='Enter your password' autoComplete='off'
                                value={formValue.password} onChange={handleChange} ></Input>
                                {error.password && <p className='error'>{error.password}</p>}
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col>
                                <Label>Date of Birth</Label>
                                <Input type='date' name='dateOfBirth'
                                 value={formValue.dateOfBirth} onChange={handleChange} ></Input>
                            </Col>
                            <Col>
                                <Label>Gender</Label><br/>
                                <input type="radio" id="male" name="gender" value='M'
                                onChange={handleChange} ></input>
  <label htmlFor="male">Male</label>
  <input type="radio" id="female" name="gender" value='F'
onChange={handleChange}></input>
  <label htmlFor="female">Female</label>
                            </Col>
                        </Row><br/>
                        <Row>
                            <Col>
                                <Label>Mobile Number</Label>
                                <Input type='number' name='mobileNumber' placeholder='Enter your Number'
                                value={formValue.mobileNumber} onChange={handleChange} ></Input>
                                {error.mobileNumber && <p className='error'>{error.mobileNumber}</p>}
                            </Col>
                            <Col>
                                <Label>Speciality</Label>
                                <Input type='text' name='speciality' placeholder='Enter your Speciality'
                                value={formValue.speciality} onChange={handleChange} ></Input>
                                 {error.speciality && <p className='error'>{error.speciality}</p>}
                            </Col>
                        </Row><br/>
                        <Row style={{marginLeft:'40%'}}sm={4}>
                            <Button type='submit'>Submit</Button>
                        </Row>
                    </Form>
                </CardBody>
            </Card>
        </div>}
        {completedSignup&&
        <div className='signupcompleted'>
            <img src={pic}></img>
            <h2>You are a coach now!</h2>
            <h5>Your coach id is {formValue.id}</h5>
            <Button>Login Now</Button>
        </div>}

        </>
    )
}
export default CoachSignup;