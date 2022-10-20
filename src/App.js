import "./App.css"
import "./Pc.css"
import "./Mobile.css"
import MainButton from "./MainButton";
import {BsCodeSlash} from "react-icons/bs"
import {AiOutlineTwitter, AiOutlineClose, AiOutlineInstagram, AiFillGithub, AiOutlineMail} from "react-icons/ai"
import {VscDebugBreakpointDataUnverified} from "react-icons/vsc"
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
        <a target="_blank" href="mailto:m@mikelmiras.com" className="rrss-a"><AiOutlineMail/></a>
      </>
    }
  </div>
  <MainButton additional_clases="animate__animated animate__fadeInUp" className="main-btn" text="Más información" goto="#second-section"/>
  </section>
  <section id="second-section" className="second-section">
   <h2 className="subsection-title">{<VscDebugBreakpointDataUnverified/>} Proyectos</h2> 
  </section>
  </>    
  );
}

export default App;
