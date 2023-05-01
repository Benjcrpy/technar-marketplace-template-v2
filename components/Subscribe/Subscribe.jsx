import React,  { useRef } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";
import emailjs from '@emailjs/browser';

//INTERNAL IMPORT
import Style from "./Subscribe.module.css";
import images from "../../img";

const Subscribe = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vil4k0x', 'template_r5w9mcn', form.current, 'GEWcPyl9zdyVuGTx5')
          .then((result) => {
              console.log(result.text);
              console.log("Message Sent")
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>Never miss a drop</h2>
          <p>
            Subcribe to our super-exclusive drop list and be the first to know
            abour upcoming drops
          </p>
          <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>Get more discount</small>
          </div>

          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Get premium magazines</small>
          </div>

          <form ref={form} onSubmit={sendEmail}>

          <div className={Style.text_area}>
          <label>Name</label>
          <input className={Style.input_name} type="text" name="user_name" />
          </div>


          <label>Email</label>
          <div className={Style.subscribe_box_left_input}>
          <input type="email" name="user_email" placeholder="Enter your Email"  />
    

          </div>

        <div className={Style.text_area}>
          <label>Message</label>
          <textarea name="message" />

          <input className={Style.subscribe_box_left_input_icon} type="submit" value="Send" />
        </div>
          </form>

   

        </div>
        

        <div className={Style.subscribe_box_right}>
          <Image
            src={images.update}
            alt="get update"
            height={600}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;