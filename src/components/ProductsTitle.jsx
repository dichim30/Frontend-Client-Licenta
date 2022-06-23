import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  flex: 1;
  margin-top: 5px;
  padding: 20px;
  height: 5vh;
  position: relative;
  padding-left: 50px;
`;
const Title = styled.h1`
  text-align: left;
  color: black;
  ${mobile({ fontSize: '20px' })}
`;

export const ProductsTitle = () => {
  return (
    <Container>
      <Title>ALEGE PRODUSUL PREFERAT</Title>
    </Container>
  );
};
