import { Badge, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
  }
`;

const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;

  ${mobile({ fontSize: '24px' })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to={'/'} style={{ textDecoration: 'none', visited: 'none' }}>
            {' '}
            <Logo>E-COMMERCE</Logo>
          </Link>
        </Left>

        <Center></Center>
        <Right>
          <Link to={'/register'}>
            <MenuItem>
              <Button>Inregistrare</Button>
            </MenuItem>
          </Link>
          <Link to={'/login'}>
            <MenuItem>
              <Button>Intra in cont</Button>
            </MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="none">
                <ShoppingCart color="action" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
