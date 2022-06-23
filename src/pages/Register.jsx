import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    center;
  background-size: cover;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  background-color: black;
  padding: 20px;
  background-color: #f8f2f4;
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  font-size: 30px;
  border: none;
  margin-top: 50px;
  background-color: #cfb5e6;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Creeaza un cont</Title>
        <Form>
          <Input placeholder="prenume" />
          <Input placeholder="nume" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="parola" />
          <Input placeholder="confirma parola" />
          <Agreement>
            Prin crearea unui cont, sunt de acord cu prelucrarea datelor mele în
            conformitate cu <b>POLITICA DE CONFIDENȚIALITATE</b>
          </Agreement>

          <Button>CREEAZA</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
