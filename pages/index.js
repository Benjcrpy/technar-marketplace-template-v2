import React from 'react';


import Style from '../styles/index.module.css';
import { 
  HeroSection, 
  Service, 
  BigNFTSlider, 
  Subscribe,
  Title,
  Category,
  Filter,
  } from '../components/Componentsindex';

const Home = () => {
  return (
   <div className={Style.homepage}>
      <HeroSection/>
      <BigNFTSlider/>
      <Service/>
      <Subscribe/>
      <Filter/>
      <Title 
      heading="Browse by Category"
      paragraph="Explore the NFT's in the most featured categories"/>
      <Category/>
   </div>
  );
};

export default Home