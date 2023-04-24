import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

//INTERNAL IMPORT
import Style from "./BigNFTSilder.module.css";
import images from "../../img";
import Button from "../Button/Button";

const BigNFTSilder = () => {

  const [ idNumber, setIdNumber ] = useState(1);

  

  return (
    <div>BigNFTSilder</div>
  );
};

export default BigNFTSilder