import React from 'react';
import { Announcement } from '../components/Announcement';
import Categories from '../components/Categories';
import { CategoryTitle } from '../components/CategoryTitle';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import { ProductsTitle } from '../components/ProductsTitle';
import { Slider } from '../components/Slider';

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />

      <Categories />
      <Slider />
      <ProductsTitle />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
