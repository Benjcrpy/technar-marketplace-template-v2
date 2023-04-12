import { hasUncaughtExceptionCaptureCallback } from 'process';
import React from 'react'

import Style from "./Button.module.css"
const Button = ({btnName, handleClick}) => {
  return  (
    <div className={Style.box}>
      <button className={Style.button} class="text-slate-300" onClick={() => handleClick()}>
        {btnName}
      </button>
    </div>
  )
};

export default Button;