import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { Button, Card, CardBody } from 'reactstrap';

function UserLoginHome(){
    const [myData,setMyData]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:4000/coaches").then((res)=>{
            setMyData(res.data);
        })
    },[])
    return(
        <><h2>Hiii Working???</h2>
        {
            myData.map(item=>{
                const{name,id,mobileNumber}=item;
                return(
                    <Card key={id}>
                        <CardBody>
                            <h3>Name:{name}</h3>
                            <h3>Id:{id}</h3>
                            <h3>Mobile Number: {mobileNumber}</h3>
                        </CardBody>
                        <Button type='submit'>Book an appointment</Button>
                    </Card>
                )
            })
        }

        </>
    )
}
export default UserLoginHome;