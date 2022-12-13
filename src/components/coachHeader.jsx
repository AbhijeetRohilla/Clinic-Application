import React from 'react'
import { Navbar, NavbarBrand, NavItem, NavLink,Nav } from 'reactstrap'


function CoachHeader(){
    return(
        <>
        <Navbar>
            <NavbarBrand href="/">WeCare</NavbarBrand>
            <Nav>
            <NavItem>
                <NavLink to='/coachhome'>View Profile</NavLink>
            </NavItem>
                <NavItem>
                    <NavLink href='/coachschedule'>My Schedule</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
            
        </>
    )
}
export default CoachHeader;