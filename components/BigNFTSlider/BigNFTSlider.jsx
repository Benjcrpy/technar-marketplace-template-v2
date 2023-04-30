import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

//INTERNAL IMPORT
import Style from "./BigNFTSlider.module.css";
import images from "../../img";
import Button from "../Button/Button";

const BigNFTSlider = () => {

  const [days, setDays] = useState(0)
  const [days1, setDays1] = useState(0)
  const [days2, setDays2] = useState(0)
  const [days3, setDays3] = useState(0)

  const [hours, setHours] = useState(0)
 

  const [minutes, setMinutes] = useState(0)


  const [seconds, setSeconds] = useState(0)

  

useEffect(() => {

  const target = new Date("11/31/2023 23:59:59")


  const interval = setInterval(() =>{
  const now = new Date()
  const difference = target.getTime() - now.getTime()

  const d = Math.floor(difference / (1000 * 60 * 60 * 24))
  setDays(d)
  const d1 = Math.floor(difference / (2000 * 60 * 60 * 24))
  setDays1(d1)
  const d2 = Math.floor(difference / (4000 * 60 * 60 * 24))
  setDays2(d2)
  const d3 = Math.floor(difference / (6000 * 60 * 60 * 24))
  setDays3(d3)
  

  const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 )); 
  setHours(h)
  const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 70))
  setMinutes(m)
  const s = Math.floor((difference % (1000 * 60)) / 1000)
  setSeconds(s)
  

  }, 1000)

  return () => clearInterval(interval)
}, [])

  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
      title: "Shallow NFT #103",
      id: 1,
      name: "Anthony",
      collection: "Cute",
      price: "06.64 ETH",
      like: 243,
      image: images.user1,
      nftImage: images.nft_image_1,
      days: days,
    
    },
    {
      title: "Buddy NFT #100",
      id: 2,
      name: "George",
      collection: "Home",
      price: "0.04 ETH",
      like: 243,
      image: images.user2,
      nftImage: images.nft_image_2,
      days: days1,
 
    },
    {
      title: "Buddy NFT #53 ",
      id: 3,
      name: "Ryan",
      collection: "GYm",
      price: "0.3064 ETH",
      like: 243,
      image: images.user3,
      nftImage: images.nft_image_3,
      days: days2,
 
    },
    {
      title: "Buddy NFT #394",
      id: 4,
      name: "Justin",
      collection: "Build",
      price: "4.664 ETH",
      like: 243,
      image: images.user4,
      nftImage: images.nft_image_2,
      days: days3,
   
    },
  ];

  //-------INC
  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  //-------DEC
  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <Image
                className={Style.bigNFTSlider_box_left_creator_profile_img}
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />
              
              <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name} {" "}
                  <span>
                    <MdVerified/>
                  </span>
                </h4>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.bigNFTSlider_box_left_creator_collection_icon}
              />

              <div
                className={Style.bigNFTSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div className={Style.bigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price} <span>$221,21</span>
              </p>
            </div>

            <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.bigNFTSlider_box_left_bidding_box_icon}
              />
              <span>Auction ending in</span>
            </p>

            <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].days}</p>
                <span>Days</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{hours}</p>
                <span>Hours</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{minutes}</p>
                <span>mins</span>
              </div>

              <div
                className={Style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{seconds}</p>
                <span>secs</span>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <Image
              src={sliderData[idNumber].nftImage}
              alt="NFT IMAGE"
              className={Style.bigNFTSlider_box_right_box_img}
            />

            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSlider;