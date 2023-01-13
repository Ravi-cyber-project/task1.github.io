
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import Form from './components/Form';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Footer from './components/Footer';

function App() {
 
  const Container = styled.div`
  width:428px;
  margin:auto;
  background-color:white;
  `

  return (
   <Container>
   <Form />
   <Routes>
    <Route path = "/" element={<Login />} />
    <Route path = "/signup" element={<Signup />} />
   </Routes>
   <Footer />
   </Container>
  );
}

export default App;
