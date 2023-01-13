import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;

p{
  font-size:14px;
  color:#1A1A1A;
  line-height:18px;
  font-weight:400;
  padding:0 54px 0 56px;
}

`
const Img = styled.img`
width:198px;
height:198px;
margin:45px 0 15px 0;


`
const Buttons = styled.div`
margin:52px auto 44px auto ;
`

const Form = () => {
  return (
    <Container>
      <Img src = {logo} alt ="logo" />
      <p>Please fill some the below details to login vuifh uihicn iuicghniu ughmciuernh iugcniuh</p>
      <Buttons>
        <Link to = "/" ><button className = "btn">Login</button></Link>
        <Link to = "/signup" ><button className = "btn">Signup</button></Link>
      </Buttons> 
      
    </Container>
  )
}

export default Form