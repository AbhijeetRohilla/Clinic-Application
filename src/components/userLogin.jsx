import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Card, CardBody, Form, Input, Button} from 'reactstrap'

function UserLogin(){
    const initialValue=({id:"",password:""});
    const [formData,setFormData]=useState(initialValue);

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setFormData({...formData,[name]: value});
    }
    function handleSubmit(e){
        
    }

    return(
        <>
        <Card>
            <CardBody>
                <h2>Login as a User</h2>
                <Form onSubmit={handleSubmit}>
                    <Input type='text' onFocus={handleFocus} placeholder='Coach id' name="id" value={formData.id} onChange={handleChange}></Input><br/>
                    <Input type='password' placeholder='Password'  name="password" value={formData.password} onChange={handleChange}></Input><br/>
                    <Button type='submit'>Login</Button>
                </Form>
            </CardBody>
        </Card>

        </>
    )
}
export default UserLogin;