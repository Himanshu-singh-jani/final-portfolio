 
 
 
 import style from "./contact.module.css"
 import React, { useRef } from 'react'; 
 import gmail from "../images/gmail.png"
 import emailjs from '@emailjs/browser'
 
const Contact=()=>{


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault( "");

    emailjs
      .sendForm('service_s68q0nk', 'template_krs85pg', form.current, {
        publicKey: 'e66EzBV4-TO06zeH_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


    return <>
      <section id="contactSection">
        <div className={style.maincontainer}>
            <div className={style.logocontainer}>
              <img className={style.gmaillogo} src={gmail} />
            </div>
            <div className={style.contactcontainer} >
                    <h1 className={style.contactme}>Contact Me</h1>
                    <form className={style.writingsection} ref={form} onSubmit={ sendEmail} >
                        <div> <input className={style.inputname} type="text" name="from_name"placeholder="Your Name" />  </div>
                       <div> <input className={style.inputemail} type="email" name="from_email"placeholder="Your email" />  </div>
                       <div> <textarea className={style.textarea} rows="7" placeholder="Your Message"name="message" ></textarea> </div>
                       <button className={style.sandbtn} value="sand"type="submit" > Sand Message</button>
                   </form>
            </div>
        </div>

        </section> 
    </>
}
export default Contact; 
