import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  flex: 1;
  margin-top: 5px;
  padding: 20px;
  height: 3vh;
  position: relative;
  padding-left: 50px;
`;
const Title = styled.h1`
  text-align: left;
  color: black;
  ${mobile({ fontSize: '20px' })}
`;

export const CategoryTitle = () => {
  return (
    <Container>
      <Title>CATEGORII</Title>
    </Container>
  );
};
