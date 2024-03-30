import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Skill from './Componants/skill.jsx'
import HeaderIntro from './Componants/headerInto.jsx'



const router= createBrowserRouter([
 {path:"/",element:<App></App>},
  {path:"/about",element:<HeaderIntro></HeaderIntro>},
  {path:"/skill",element:<Skill></Skill>}
  
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}/>
  
  </React.StrictMode>,
)
