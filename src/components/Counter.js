import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Increament } from '../redux/type';

const Counter = () => {

  const dispatch = useDispatch();
    const counter = useSelector(state =>state.counter);



  const increaseCounter = () =>{
    dispatch({type : Increament})
  }

  return (
    <Container >
        <h3>{counter}</h3>
        <button onClick = {increaseCounter}>Increase Counter</button>
    </Container>
  )
}


const Container = styled.div`

width:50%;
margin:0 auto;
display:flex;
justify-content:center;
flex-direction:column;
padding:20px;
border:3px solid blue;
background:yellow;
button{
  color:white;
  background:green;
  padding:1rem
}
button:hover{
  color:gray;
  background:pink;
}

`

export default Counter;