import React from 'react';


import Style from '../styles/index.module.css';
import { HeroSection, Service, BigNFTSlider } from '../components/Componentsindex';

const Home = () => {
  return (
   <div className={Style.homepage}>
      <HeroSection/>
      <BigNFTSlider/>
      <Service/>
   </div>
  );
};

export default Home