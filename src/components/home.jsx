import React from 'react'
import { Card, Row,Col, Button } from 'reactstrap';
import {FaChalkboardTeacher, FaUserAlt} from 'react-icons/fa'
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <>
        <Header/>
        <div className="container">
        <Row>
            <h3 className='heading'>We are the heart of appropriate Care.</h3>
        </Row>
            <Row>
                <Col>
                    <Card className='card'>
                    <h2 className='icon'>{<FaChalkboardTeacher/>}</h2>
                  <Link to='/coachlogin'><Button>Login as a Coach</Button></Link><br/>
                      <Link to='/coachsignup'>  <Button>Join as a Coach</Button></Link>

                    </Card>
                    </Col>
                    <Col>
                        <Card className='card'>
                        <h2 className='icon'>{<FaUserAlt/>}</h2>
                       <Link to='/userlogin'> <Button>Login as a User</Button></Link><br/>
                       <Link to='/usersignup'> <Button>Join as a User</Button></Link>
                       
                        </Card>
                    </Col>
            </Row>
             </div>
             <Footer/>


        </>
    )
}
export default Home;