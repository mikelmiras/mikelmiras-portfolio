import "./App.css"
import "./Pc.css"
import "./Mobile.css"
import MainButton from "./MainButton";
import {BsCodeSlash} from "react-icons/bs"
import {AiOutlineTwitter, AiOutlineClose, AiOutlineInstagram, AiFillGithub, AiOutlineMail} from "react-icons/ai"
import {VscDebugBreakpointDataUnverified, VscDebugBreakpointFunction} from "react-icons/vsc"
import { useState } from "react";
function App() {
  const [display, notDisplay] = useState();
  return (
  <>
  <div className={"supremo " + display}>
    {<AiOutlineClose className="close" onClick={() => {
      notDisplay("notvisible")
    }}/>}
    <div className="content">
      <a href="https://github.com/mikelmiras/mikelmiras-portfolio" target="_blank"><p>Ver en {<AiFillGithub className="separate separate-gt"/>}</p></a>
    </div>
  </div>
  <section className="main-info-holder">
  <h1 className="main-title animate__animated animate__fadeInLeftBig">Mikel Miras</h1>
  <p className="animate__animated animate__fadeInUp second-title">Programador y desarrollador de software. {<BsCodeSlash className="separate"/>}</p>
  <div className="rrss-holder animate__animated animate__fadeInUp">
    {
      <>
        <a target="_blank" href="https://twitter.com/mikelmiras_" className="rrss-a"><AiOutlineTwitter/> </a>
        <a target="_blank" href="https://instagram.com/mikelmiras_" className="rrss-a"><AiOutlineInstagram/></a>
        <a target="_blank" href="https://github.com/mikelmiras" className="rrss-a"><AiFillGithub/></a>
        <a target="_blank" href="mailto:m@mikelmiras.com" className="rrss-a"><AiOutlineMail/></a>
      </>
    }
  </div>
  <MainButton additional_clases="animate__animated animate__fadeInUp" className="main-btn" text="Más información" goto="#second-section"/>
  </section>
  <section id="second-section" className="second-section">
   <h2 className="subsection-title">{<VscDebugBreakpointDataUnverified/>} Proyectos:</h2> 
   <ul className="project-list">
    <li>
      <div className="text-holder">
      <h3 className="project-main-title">Mmods GTA V</h3>
      <p className="mobile-text">Mmods GTA V es un proyecto que comienza en 2018 y que consiste en introducir vehículos reales (mayormente de emergencias) en el videojuego GTA 5 a través de los mods.
        <br/>
        <br/>
        Ahora mismo este proyecto lleva casi 5 años activo, y cuenta con más de <strong>300 vehículos</strong> y modificaciones de todo tipo realizadas.
        <br/>
        <br/>
        Mis trabajos para este proyecto han sido referenciados en medios como <b>ABC de Sevilla</b>, <b>El Español</b> y <b>En Castilla la Mancha</b> entre otros; así como también en redes sociales oficiales de distinas instituciones.
        <br/>
        <br/>
        <b>Referencias en medios:</b>
        <Reference media="ABC" text="La policía local de Sevilla, protagonista en el GTA V" goto="https://sevilla.abc.es/tecnologia/videojuegos/sevi-policia-local-sevilla-protagonista-202007151106_noticia.html"/>
        <Reference media="El Español" text="La Policía Foral, en el videojuego más vendido de la historia" goto="https://navarra.elespanol.com/articulo/sociedad/gtav-mods-forales-municipales-pamplona/20201222170514349854.html"/> 
        <Reference media="ECM" text="La Policía Local de Toledo, en el GTA V" goto="https://www.encastillalamancha.es/castilla-la-mancha-cat/toledo/la-policia-local-de-toledo-en-el-gta-v-realismo-en-el-famoso-videojuego-con-aviso-por-covid-persecucion/"/>
        <b>Referencias en redes sociales:</b>
        <Reference text="Twitter de la Ertzaintza" goto="https://twitter.com/ertzaintzaEJGV/status/1462399103296540678"/>
        <Reference text="Twitter de la policía local de Alcorcón" goto="https://twitter.com/PoliciaAlcorcon/status/1572255413860536320"/>
      </p>
      </div>
      <div className="logo-holder">
        <img className="mmodsgtav-logo" src="https://mmodsgtav.es/cdn/img/logo.png"/>
        <p>Logo del proyecto</p>
      </div>
      </li>

   </ul>
  </section>
  </>    
  );
  
}


export default App;


function Reference(props){
if (props.media){
  return(
    <>
    <a target="_blank" className="reference-a" href={props.goto}><p className="reference">{<VscDebugBreakpointFunction/>} <span>{props.text}, {props.media}</span></p></a>
    </>
  )
}else{
  return(
    <>
    <a target="_blank" className="reference-a" href={props.goto}><p className="reference">{<AiOutlineTwitter/>} <span>{props.text}</span></p></a>
    </>
  )
}
}
