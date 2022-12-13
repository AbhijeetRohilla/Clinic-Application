import React from 'react';
import { Card, CardBody, CardHeader, CardText } from 'reactstrap';
import CoachHeader from './coachHeader';

export default function CoachHome({data}){
    return(
        <>
        <CoachHeader/>
            <Card>
            <CardHeader>Coach Id: {data.id} </CardHeader>
                <CardBody>
                <CardText>Coach Name: {data.name}</CardText>
                <CardText>Coach Mobile Number: {data.mobileNumber}</CardText>
                <CardText>Coach Speciality: {data.speciality}</CardText>

                </CardBody>
            </Card>
        </>
    )
}
