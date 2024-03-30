import { Outlet } from "react-router-dom";
import Header from "./Componants/Header";
import HeaderIntro from "./Componants/headerInto";
import Skill from "./Componants/skill";
import About from "./Componants/About";
import Contact from "./Componants/contact";


const App =()=>{
    return<>
    <div className="home-page">
        <Header></Header>
        <Outlet></Outlet>
        <HeaderIntro></HeaderIntro>
        <About></About>
        <Skill></Skill>
       <Contact></Contact>
    
    
    </div>
   
        
    </>
}
export default App;