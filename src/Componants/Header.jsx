import styles from "./Header.module.css"
 

const Header = () => {
  return (
    <>
      <nav  id ="navBar" >
        
        <div className={styles.navcontainer}>
          <div className={styles.nameAsLogo}>Himanshu Singh Jani</div>
          <div className={styles.pages}>
            
              <a  className={styles.menuList}  href="#navBar">
                Home
              </a>
            
              <a  className={styles.menuList} href="#aboutsection">
                About
              </a>
            
              <a  className={styles.menuList} href="#skillSection">
              Skills
              </a>
            
              <a   className={styles.menuList} href="#">
                Projects
              </a>
            
              <a  className={styles.menuList} href="#contactSection">
                Contact
              </a>
          </div>
          </div>
      </nav>

    
    </>
  );
};
export default Header;
