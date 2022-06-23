import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Announcement } from '../components/Announcement';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import { mobile } from '../responsive';

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 20px;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0px' })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })}
`;
const Option = styled.option``;

export const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtru:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Culoare</Option>
            <Option>alb</Option>
            <Option>negru</Option>
            <Option>rosu</Option>
            <Option>albastru</Option>
            <Option>gri</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Marime</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sorteaza produsele:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Cel mai nou</Option>
            <Option value="asc">Pret (cresc)</Option>
            <Option value="desc">Pret (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </Container>
  );
};

export default ProductList;
