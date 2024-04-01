import webPhoto from '../images/webPhoto.jpg'
import styles from './headerIntro.module.css'
import{useTypewriter,cursor} from "react-simple-typewriter"
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const HeaderIntro=()=>{
 
    const [typewriter]=useTypewriter({
        words:['Web-Developer'],
        loop:{},
        typeSpeed:200,
        deleteSpeed:40,
    })


  const openwhatsapp=()=>{
  
  let whatsapplink=" https://wa.me/919873267682"
  window.open(whatsapplink,  '_blank').focus();
  }
  
 const openinsta=()=>{
    let instalink="https://ig.me/m/himanshu_singh_jani11"
    window.open (instalink,'_blank').focus();
 }
  const gotocontact =()=>{
  window.location.href='#contactSection'
  }

const openlinkdin=()=>{
  let openlink="https://www.linkedin.com/in/himanshu-jani-589b92256"
  window.open (openlink,'_blank').focus();
}

    return<>
    <section id="inTro">
      <div className={styles.introContant}>
       <div className={styles.leftcontainer}>
          <p >Hello, my name is</p>
          <h1 className={styles.introName}>Himasnhu Jani</h1>
          
          <div className={styles.web}>{typewriter}</div>
     
          <button className={styles.contactme}type="button" onClick={gotocontact}>contact me</button>
          <div className={styles.contactlogo}>
          <div className={styles.whatsapplogo}> <FaWhatsappSquare  onClick={openwhatsapp}  size={55}> </FaWhatsappSquare> </div>
          <div className={styles.linkedinlogo}><FaLinkedin onClick={openlinkdin} size={55}></FaLinkedin> </div>
          <div className={styles.instagramlogo}> <FaSquareInstagram onClick={openinsta} size={55}></FaSquareInstagram> </div>  
          </div>
        </div>

          <div className={styles.rightcontainer}>
          <img src={webPhoto} className={styles.devImage}/>
          </div>
            

      
       
       


      </div>
        
    </section>
   

 
    </> 
}
export default HeaderIntro; 