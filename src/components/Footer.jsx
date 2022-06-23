import styled from 'styled-components';
import { MailOutline, Phone, Room } from '@material-ui/icons';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;

  ${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: '#eee' })}
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Link to={'/'} style={{ textDecoration: 'none', visited: 'none' }}>
          {' '}
          <Logo>E-COMMERCE</Logo>
        </Link>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sint eos
          commodi, ad quae non voluptate fugit dicta iure, iste quos. Aperiam
          sequi alias nisi reprehenderit neque? Modi, magnam commodi!
        </Desc>
      </Left>
      <Center></Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} /> Strada Toamnei 31040, Brasov,
          Romania
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} />
          (+40)722 222 222
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} />
          contact@ecommerce.ro
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
