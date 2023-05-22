import React, { useState } from 'react';
import { 
    FaFilter,
    FaAngleDown,
    FaAngleUp,
    FaWallet,
    FaMusic,
    FaVideo,
    FaImages,
    FaUserAlt,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";


import Style from './Filter.module.css'

const Filter = () => {

  const [filter, setFilter] = useState(true);
  const [image, setImage] = useState(true);
  const [video, setVideo] = useState(true);
  const [music, setMusic] = useState(true);


  return (
    <div className={Style.filter}>
      <div className={Style.filter_box}>
        <div className={Style.filter_box_left}>
          <button onClick={() => {}}> NFT </button>
          <button onClick={() => {}}> ARTS </button>
          <button onClick={() => {}}> MUSICS </button>
          <button onClick={() => {}}> SPORTS </button>
          <button onClick={() => {}}> PHOTOGRAPHY </button>
        </div>

        <div className={Style.filter_box_right}>
          <div className={Style.filter_box_right_box}>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter