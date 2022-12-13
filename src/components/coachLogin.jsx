import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, Form, Input } from 'reactstrap';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import CoachHome from './coachHome';

function CoachLogin(){
    //Constants
    const initialValue={id:"", password:""};
    const [formValue,setFormValue]=useState(initialValue);
    const [err1,setErr1]=useState(false);
    const [err2,setErr2]=useState(false);
    const [data,setData]=useState({name:"", id:"",mobileNumber:"",speciality:"",password:""});
    const [flag, setFlag]=useState(false);
    

    //Functions
    const handleChange=(e)=>{
        const{name,value}=e.target;
        if(formValue.id.length==0){
            setErr1(true);
        }
        else{
            setErr1(false)
        }
        if(formValue.password.length<5 || formValue.password.length>10){
            setErr2(true);
        }
        else{
            setErr2(false);
        }
        setFormValue({...formValue, [name]:value})
        console.log(formValue);
        
       }
       const getId=async()=>{
        const idVal=formValue.id;
        await axios.get(`http://localhost:4000/coaches/${idVal}`).then(
           (res)=>{setData(res.data)}
        );
        if(formValue.password==data.password){
         setFlag(!flag);
        }
        else{
            alert("Invalid Credential")
        }
       }

       const handleSubmit= (e)=>{
        e.preventDefault();
        // if(err1==false&&err2==false){
            getId();
             
        // }
       }
    
    
    return(
        <>{
            !flag &&
        
        <Card>
            <CardBody>
                <h2>Login as Life Coach</h2>
                <Form onSubmit={handleSubmit}>
                    <Input type='text' name='id' placeholder='Coach id' value={formValue.id}
                    onChange={handleChange} ></Input><br/>
                       {err1 ? <span className='error'>Id Field is Required</span>:""}
                    <br/>
                    <Input type='password' name='password' placeholder='Password' value={formValue.password}
                    onChange={handleChange}></Input><br/>
                       {err2? <span className='error'>Password should have 5 to 10 character</span>:""}
                    <br/>
                    <Button type='submit'>Login</Button>
                </Form>
            </CardBody>
        </Card>}
        {flag &&
        <CoachHome data={data}/>
        }
        </>
    )
}
export default CoachLogin;