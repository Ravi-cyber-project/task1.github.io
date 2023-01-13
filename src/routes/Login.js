import styled from "styled-components"

const Inputs = styled.input`
  height:50px;
  font-size:16px;
  border:1px solid black;
  padding:0 25px;
  border-radius:26px;
  color:#1A1A1A;
`
const Button = styled.button`
  height:50px;
  margin-top:17px;
  font-size:16px;
  border-radius:26px;
  background-color:#E70B89;
  border:none;
  color:white;
  font-weight:700;
  margin-top:15px;
`
const Form = styled.form`
 width:300px;
 margin:auto;
  display:flex;
  flex-direction:column;
  gap: 20px;

  p{
    text-align:right;
    line-height:17px;
    color:#E70B89;
    font-size:14px;
    font-weight:400;
    margin-top:-5px;
  }
`
const Login = () => {
  return (
    <Form>
      <Inputs type = "email" name = "email" placeholder = "Email Address"/>
      <Inputs type = "password" name = "password" placeholder = "Password" />
      <Button type = "submit">Login</Button>
      <p>Forgot Password?</p>
    </Form>
   
  )
}

export default Login