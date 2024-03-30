import styles from "./skill.module.css"

import logo from '../images/logo.jpg'

const Skill=()=>{
    return <>
    
     <section id="skillSection">
     
      
    
       <div className={styles.skillBox}>
      
          <div className={styles.skillcontainer}>
          <h1 className={styles.about}>What I Do</h1>
            <h2 className={styles.skillhead}>Skill</h2>
            <p className={styles.skillpara}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus 
             vitae perspiciatis et reprehenderit error molestias illum asperiores adipisci? Nulla impedit omnis,
             voluptas, assumenda quae illo laborum error accusantium neque voluptate iste, accusamus iusto reiciendis iure.
             Perferendis voluptatum optio hic soluta alias, veniam laborum rem repudiandae a. Laboriosam rem, 
             omnis voluptatum, reprehenderit necessitatibus dolorum fuga eaque reiciendis cupiditate, blanditiis ab exercitationem!
            </p>
         </div>
         <div className={styles.imgcontainer}>
          <img className={styles.logoimg} src={logo}/>
          </div>
        </div>

      </section>
    
    </>
}
export default Skill;