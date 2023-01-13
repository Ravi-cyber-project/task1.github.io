import React from 'react'
import google from '../assets/google14.svg';
import facebook from '../assets/facebook22.svg';
import twitter from '../assets/twitter22.svg';
import styled from 'styled-components';


const Img1 = styled.img`
height:22px;
width:22px;
`

const Img2 = styled.img`
height:20px;
width:22px;
`

const Img3 = styled.img`
height:19.25px;
width:22px;
`

const Div = styled.div`
border:1px solid #E6E6E6;
border-radius:50%;
height:50px;
width:50px;
display:flex;
align-items:center;
justify-content :center;
`

const ImgContainer = styled.div`
display:flex;
justify-content:center;
gap:25px;
margin-top:21px;
`

const Paragraph = styled.p`
  text-align:center;
  margin-top:23px;
  font-size:12px;
  font-weight:400;
  line-height:17px;
`

const Container = styled.div`
  padding-bottom:58px;
`


const Footer = () => {
  return (
  <Container>
    <Paragraph style ={{color:"#9D9D9D"}}>or login with</Paragraph>
    <ImgContainer>
    <Div>
     <Img1 src = {google} alt = "google" />
    </Div>
    <Div>
     <Img2 src = {facebook} alt = "facebook" />
    </Div>
    <Div>
      <Img3 src = {twitter} alt = "twitter" />
    </Div>  
    </ImgContainer>
    <Paragraph>Don't have account? <span style = {{color:"#E70B89"}}>Create new now!</span></Paragraph>
    <Paragraph style={{marginTop:"24px"}}>By signing up, you are agree with our <span style = {{color:"#E70B89", textDecoration:"underline" }}>Terms & Conditions</span></Paragraph>
   
  </Container>
    
  )
}

export default Footer