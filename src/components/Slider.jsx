import styled from 'styled-components';
import { ArrowBackOutlined, ArrowForwardOutlined } from '@material-ui/icons';
import { useState } from 'react';
import { sliderItems } from '../data';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: beige;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
`;

const Arrow = styled.div`
  weight: 100px;
  height: 100px;
  background-color: ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '40px'};
  right: ${(props) => props.direction === 'right' && '40px'};
  margin: auto;
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translatex(${(props) => props.slideIndex * -100}vw);
  transition: all 1s ease;
`;

const SliderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImageContainter = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const Slider = () => {
  return (
    <Container>
      <Wrapper>
        {sliderItems.map((item) => (
          <SliderContainer bg={item.bg} key={item.id}>
            <ImageContainter>
              <Image src={item.img} />
            </ImageContainter>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Link to={'/products'}>
                <Button>CUMPARA ACUM</Button>
              </Link>
            </InfoContainer>
          </SliderContainer>
        ))}
      </Wrapper>
    </Container>
  );
};
