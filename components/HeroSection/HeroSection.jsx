import React from 'react';
import Image from 'next/image';

import Style from './HeroSection.module.css';
import { Button } from '../Componentsindex';
import images from '../../img';

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
        <div className={Style.heroSection_box}>
            <div className={Style.heroSection_box_left}>
                <h1> Discover collect and sell NFTs </h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Consequuntur voluptatem laudantium sint pariatur tempora 
                    cupiditate enim consectetur aliquid debitis dolores! Veniam, 
                    fugit! Aut mollitia eveniet, natus vero veniam libero enim?
                </p>
                <Button btnName='Start your search'/>
            </div>
            <div className={Style.heroSection_box_right}>
                <Image src={images.hero} alt='' width={600} height={600} />
            </div>
        </div>
    </div>
  );
};

export default HeroSection
