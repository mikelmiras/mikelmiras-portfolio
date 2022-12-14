import "./App.css"
import "./Pc.css"
import "./Mobile.css"
import MainButton from "./MainButton";
import {BsCodeSlash} from "react-icons/bs"
import {AiOutlineHome, AiOutlineTwitter, AiOutlineClose, AiOutlineInstagram, AiFillGithub, AiOutlineMail} from "react-icons/ai"
import {VscDebugBreakpointDataUnverified, VscDebugBreakpointFunction} from "react-icons/vsc"
import { useState } from "react";
import {FaTiktok} from "react-icons/fa"
import Footer from "./Footer";
function App() {
  const [display, notDisplay] = useState();
  return (
  <>
  <div className={"supremo " + display}>
    {<AiOutlineClose title="Cerrar" className="close" onClick={() => {
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
        <a title="m@mikelmiras.com" target="_blank" href="mailto:m@mikelmiras.com" className="rrss-a"><AiOutlineMail/></a>
      </>
    }
  </div>
  <MainButton additional_clases="animate__animated animate__fadeInUp" className="main-btn" text="Más información" goto="#projects"/>
  </section>
  <section id="projects" className="second-section">
   <h2 className="subsection-title">{<VscDebugBreakpointDataUnverified/>} Proyectos:</h2> 
   <ul className="project-list">
    <li>
      <div className="text-holder">
      <h3 className="project-main-title">Mmods GTA V</h3>
      <p className="mobile-text justified">Mmods GTA V es un proyecto que comienza en 2018 y que consiste en introducir vehículos reales (mayormente de emergencias) en el videojuego GTA 5 a través de los mods.
        <br/>
        <br/>
        Actualmente este proyecto lleva casi 5 años activo, y cuenta con más de <strong>300 vehículos</strong> y modificaciones de todo tipo realizadas.
        <br/>
        <br/>
        Mis trabajos para este proyecto han sido referenciados en medios como <b>ABC de Sevilla</b>, <b>El Español</b> y <b>En Castilla la Mancha</b> entre otros; así como también en redes sociales oficiales de distinas instituciones.
        <br/>
        <br/>
        <h4><b className="white">Referencias en medios:</b></h4>
        <Reference media="ABC" text="La policía local de Sevilla, protagonista en el GTA V" goto="https://sevilla.abc.es/tecnologia/videojuegos/sevi-policia-local-sevilla-protagonista-202007151106_noticia.html"/>
        <Reference media="El Español" text="La Policía Foral, en el videojuego más vendido de la historia" goto="https://navarra.elespanol.com/articulo/sociedad/gtav-mods-forales-municipales-pamplona/20201222170514349854.html"/> 
        <Reference media="ECM" text="La Policía Local de Toledo, en el GTA V" goto="https://www.encastillalamancha.es/castilla-la-mancha-cat/toledo/la-policia-local-de-toledo-en-el-gta-v-realismo-en-el-famoso-videojuego-con-aviso-por-covid-persecucion/"/>
        <h4><b className="white">Referencias en redes sociales:</b></h4>
        <Reference text="Twitter de la Ertzaintza" goto="https://twitter.com/ertzaintzaEJGV/status/1462399103296540678"/>
        <Reference text="Twitter de la policía local de Alcorcón" goto="https://twitter.com/PoliciaAlcorcon/status/1572255413860536320"/>
        <br/>
        <h4><b className="white"><u>Redes sociales y enlaces a Mmods GTAV:</u></b></h4>
          <div className="rrss-box-holder">
          <Box icon={<AiOutlineHome/>} text="Web" goto="https://mmodsgtav.es"/>
          <Box icon={<AiOutlineTwitter/>} text="Twitter" goto="https://twitter.com/mmodsgtav"/>
          <Box icon={<AiOutlineInstagram/>} text="Instagram" goto="https://instagram.com/mmodsgtav"/>
          <Box icon={<FaTiktok/>} text="TikTok" goto="https://tiktok.com/@mmodsgtav"/>
          </div>
      </p>
      </div>
      <div className="logo-holder">
        <img className="mmodsgtav-logo" src="https://mmodsgtav.es/cdn/img/logo.png"/>
        <p>Logo del proyecto</p>
      </div>

      </li>
   </ul>
   <hr noshade className="mid-hr"/>
   <ul className="project-list">
    <li>
      <div className="text-holder">
      <h3 className="project-main-title">gta5mods.es</h3>
      <p className="mobile-text">gta5mods.es es una página web desarrollada junto a Alejandro Pereira que fue lanzada en febrero de 2021. Esta página alberga una comunidad de mods de GTA 5 basada en España.
        <br/>
        <br/>
        Esta página permite a los usuarios subir y descargar mods para el GTA 5, así como charlar y solicitar asitencia técnica en los foros.
        <br/>
        <br/>
        Esta página cuenta con cerca de <b>4000</b> usuarios registrados, <b>60.000</b> descargas de archivos y <b>700</b> archivos publicados por la comunidad.
        <br/>
        <br/>
        Actualmente nuestra página web es líder en la comunidad española.
        <br/>
        <br/>
        <b className="white">
          <h4><u>Redes sociales y enlaces a gta5mods.es:</u></h4></b>
          <div className="rrss-box-holder">
          <Box icon={<AiOutlineHome/>} text="Web" goto="https://gta5mods.es"/>
          <Box icon={<AiOutlineTwitter/>} text="Twitter" goto="https://twitter.com/GTA5Mods_Es"/>
          <Box icon={<AiOutlineInstagram/>} text="Instagram" goto="https://instagram.com/gta5mods_es"/>
          </div>
      </p>
      </div>
      <div className="logo-holder">
        <img className="mmodsgtav-logo" src="https://mikelm.eus/static/gmods.png"/>
        <p>Logo del proyecto</p>
      </div>
      </li>
   </ul>
   <hr className="mid-hr"/>
   <h2 className="subsection-title">{<VscDebugBreakpointDataUnverified/>} Sobre mí:</h2> 
   <ul className="project-list">
    <li>
      <div className="text-holder">
   <p className="mobile-text">
    Actualmente estoy estudiando segundo año de Ingeniería Informática en la UPV/EHU.
   </p>
   </div>
   </li>
   </ul>
   <h2 className="subsection-title">{<VscDebugBreakpointDataUnverified/>} Formación:</h2> 
   <ul className="project-list">
    <li>
      <div className="text-holder">
   <p className="mobile-text">
    Actualmente estoy estudiando segundo año de Ingeniería Informática en la UPV/EHU.
   </p>
   </div>
   </li>
   </ul>

   <h2 className="subsection-title">{<VscDebugBreakpointDataUnverified/>} Experiencia:</h2> 
   <ul className="project-list">
    <li>
      <div className="text-holder">
   <p className="mobile-text">
    Experiencia demostrable en el ámbito del desarrollo web. Conocimientos en <b>PHP</b>, <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b> y frameworks JS como <b>React</b> o <b>NextJS</b>; así como experiencia en el manejo de bases de datos relacionales como <b>MySQL</b> y en el desarrollo de API Rests.
    <br/>
    También tengo experiencia en <b>Python</b> desarrollando bots para Discord y en otras plataformas como .NET de Microsoft. 
   </p>
   </div>
   </li>
   </ul>

   <h2 className="subsection-title">{<VscDebugBreakpointDataUnverified/>} Contacto:</h2> 
   <ul className="project-list">
    <li>
      <div className="text-holder">
      <div className="rrss-box-holder">
          <Box icon={<AiOutlineTwitter/>} text="Twitter" goto="https://twitter.com/mikelmiras_"/>
          <Box icon={<AiOutlineInstagram/>} text="Instagram" goto="https://instagram.com/mikemiras_"/>
          <Box icon={<AiFillGithub/>} text="Github" goto="https://github.com/mikelmiras"/>
          <Box icon={<AiOutlineMail/>} text="Email" goto="mailto:m@mikelmiras.com"/>
          </div>
   </div>
   </li>
   </ul>
  </section>
  <Footer/>
  </>    
  );
  
}


export default App;


function Reference(props){
if (props.media){
  return(
    <>
    <a target="_blank" className="reference-a" href={props.goto}><p className="reference">{<VscDebugBreakpointFunction className="white"/>} <span>{props.text}, {props.media}</span></p></a>
    </>
  )
}else{
  return(
    <>
    <a target="_blank" className="reference-a" href={props.goto}><p className="reference">{<AiOutlineTwitter className="white"/>} <span>{props.text}</span></p></a>
    </>
  )
}
}

function Box(props){
  return(
    <>
    <div className="rrss-box">
      <a className="box-icon-holder-a" target="_blank" href={props.goto}>
        <p className="box-icon-holder">
        <span>{props.icon}</span> {props.text}
        </p>
      </a>
    </div>
    </>
  )
}