import React  from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import CoachHome from "./components/coachHome";
import CoachLogin from "./components/coachLogin";
import CoachSignup from "./components/coachSignup";
import Home from "./components/home";
import UserLogin from "./components/userLogin";
import UserSignup from "./components/userSignup";

function AppRoutes(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="home" element={<Home/>}></Route>
                <Route path='coachsignup' element={<CoachSignup/>}></Route>
                <Route path="coachlogin" element={<CoachLogin/>}></Route>
                <Route path="usersignup" element={<UserSignup/>}></Route>
                <Route path="userlogin" element={<UserLogin/>}></Route>
                <Route path="coachhome" element={<CoachHome/>}></Route>
            </Routes>
        </BrowserRouter>

        </>
    )
}
export default AppRoutes;