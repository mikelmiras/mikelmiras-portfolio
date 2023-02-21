import MainButton from "../components/MainButton";
import {BsCodeSlash} from "react-icons/bs"
import {AiOutlineHome, AiOutlineTwitter, AiOutlineClose, AiOutlineInstagram, AiFillGithub, AiOutlineMail} from "react-icons/ai"
import {VscDebugBreakpointDataUnverified, VscDebugBreakpointFunction} from "react-icons/vsc"
import { useState } from "react";
import {FaTiktok} from "react-icons/fa"
import {SiLeetcode} from "react-icons/si"
import Footer from "../components/Footer";
import SecondSection from "../components/SecondSection";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
export default function Home() {
  const [display, notDisplay] = useState();
  return (
  <>
  <div className={"supremo " + display}>
    {<AiOutlineClose title="Cerrar" className="close" onClick={() => {
      notDisplay("notvisible")
    }}/>}
    <div className="content">
      <a href="https://github.com/mikelmiras/mikelmiras-portfolio" target="_blank" rel="noreferrer"><p>Ver en {<AiFillGithub className="separate separate-gt"/>}</p></a>
    </div>
  </div>
  <section className="main-info-holder">
  <h1 className="main-title animate__animated animate__fadeInLeftBig">Mikel Miras</h1>
  <p className="animate__animated animate__fadeInUp second-title">Programador y desarrollador de software. {<BsCodeSlash className="separate"/>}</p>
  <div className="rrss-holder animate__animated animate__fadeInUp">
    {
      <>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/mikelmiras_" className="rrss-a"><AiOutlineTwitter/> </a>
        <a target="_blank" rel="noreferrer" href="https://instagram.com/mikelmiras_" className="rrss-a"><AiOutlineInstagram/></a>
        <a target="_blank" rel="noreferrer" href="https://github.com/mikelmiras" className="rrss-a"><AiFillGithub/></a>
        <a target="_blank" rel="noreferrer" href="https://leetcode.com/mikelmiras/" className="rrss-a"><SiLeetcode/></a> 
        <a title="m@mikelmiras.com" target="_blank" rel="noreferrer" href="mailto:m@mikelmiras.com" className="rrss-a"><AiOutlineMail/></a>
      </>
    }
  </div>
  <MainButton additional_clases="animate__animated animate__fadeInUp" className="main-btn" text="Más información" goto="#projects"/>
  </section>
  {
    // Starts second section
  }
  <>
         <section id="projects" className="second-section">
         
   <h2 className="subsection-title">{<VscDebugBreakpointDataUnverified/>} Sobre mí:</h2> 
   <ul className="project-list">
    <li>
      <div className="text-holder">
   <p className="mobile-text">
    Soy una persona con iniciativa que le gusta estar en constante aprendizaje y crecimiento. Mis aficiones son la música, tocar la batería y, por supuesto, la informática y el desarrollo de software. Me interesé por esta rama hace unos cuantos años y desde hace más de 4 llevo aprendiendo y desarrollado proyectos por mi cuenta.
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
        </>
  <Footer/>
  </>    
  );
  
}

export function Reference(props){
  if (props.media){
    return(
      <>
      <a target="_blank" rel="noreferrer" className="reference-a" href={props.goto}><p className="reference">{<VscDebugBreakpointFunction className="white"/>} <span>{props.text}, {props.media}</span></p></a>
      </>
    )
  }else{
    return(
      <>
      <a target="_blank" rel="noreferrer" className="reference-a" href={props.goto}><p className="reference">{<AiOutlineTwitter className="white"/>} <span>{props.text}</span></p></a>
      </>
    )
  }
  }
  
  export function Box(props){
    return(
      <>
      <div className="rrss-box">
        <a className="box-icon-holder-a" target="_blank" rel="noreferrer" href={props.goto}>
          <p className="box-icon-holder">
          <span>{props.icon}</span> {props.text}
          </p>
        </a>
      </div>
      </>
    )
  }