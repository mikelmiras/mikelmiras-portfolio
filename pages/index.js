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
import Head from "next/head";
export default function Home() {
  const [display, notDisplay] = useState();
  return (
  <>
  <GenericMeta/>
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
  <SecondSection/>
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


  export async function getServerSideProps(){
    return{
      props:{
        
      }
    }
  }


  function Social(){
    return(
      <>
              <h4>Redes sociales y enlaces a Mmods GTAV:</h4>
          <div className="rrss-box-holder">
          <Box icon={<AiOutlineHome/>} text="Web" goto="https://mmodsgtav.es"/>
          <Box icon={<AiOutlineTwitter/>} text="Twitter" goto="https://twitter.com/mmodsgtav"/>
          <Box icon={<AiOutlineInstagram/>} text="Instagram" goto="https://instagram.com/mmodsgtav"/>
          <Box icon={<FaTiktok/>} text="TikTok" goto="https://tiktok.com/@mmodsgtav"/>
          </div>
      </>
    )
  }

  function GenericMeta(){
    return(
      <Head>
        <title>Mikel Miras</title>
      </Head>
    )
  }