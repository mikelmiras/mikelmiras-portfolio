import Footer from "../../components/Footer";
import ReactMarkdown from "react-markdown";
import {BsCalendarDate, BsClock, BsPencilSquare} from "react-icons/bs"
import Header from "../../components/Header";
import { months } from "../../util";
import {AiOutlineLock} from "react-icons/ai"
import Router from "next/router";

import { Alltags } from "../blog";
import { GenericMeta } from "..";
export default function Blog({response, admin}){
    const date = new Date(response.data.date)
    let isprivate = <></>
    if (response.data.public === 0){
        isprivate = <AiOutlineLock/>
    }
    let edit = <></>
    if (admin === true){
        edit = <div className="edit-btn-wrapper">
            <span onClick={(e)=>{
                console.log(response.data.id)
                localStorage.setItem("new_post_title", response.data.title)
                localStorage.setItem("new_post_content", response.data.content)
                localStorage.setItem("new_post_slug", response.data.slug)
                localStorage.setItem("editing", true)
                localStorage.setItem("editing_id", response.data.id)
                Router.push("/blog/post/")
            }} className="edit-btn"><BsPencilSquare/> Editar</span></div>
    }
    return(
        <>
        <Header selected={"blog"}/>
        <GenericMeta title={response.data.title + " - Mikel Miras"}/>
        <div itemScope itemType="https://schema.org/TechArticle" className="blog-wrapper">
        <section className="blog-holder">
        <h1 itemProp="name">{isprivate}{response.data.title}</h1>
        <Alltags url={"/blog/tags/"} tagArray={response.tags}/>
        <span className="notvisible" itemProp="author" itemType="Person">Mikel Miras</span>
        {edit}
        <span className="article-data">
            <span itemProp="datePublished" datetime={date.toISOString()} className="date-holder"><BsCalendarDate/> <span className="date"> {date.getDate()  + " de " + months[date.getMonth()] + ", " + date.getFullYear()}</span></span>
            <span className="lecture-time"><BsClock/> {calculateReadingTime(response.data.content)} minutos de lectura</span>
        </span>
        <span className="notvisible" itemProp="url">https://mikelmiras.com/blog/{response.data.slug}</span>
        
         <ReactMarkdown itemProp="articleBody">{response.data.content.replaceAll("\\n", "\n")}</ReactMarkdown>
         
   </section>
        </div>
        <Footer/>
        </>
    )
}




export async function getServerSideProps(context){
    const {params} = context
    const {id} = params
    const data = await fetch(process.env.FETCH_URL + id, {
        "method":"POST",
        "headers":{
            "Content-type":"application/json"
        }
        ,
        "body":JSON.stringify({"allowprivate":(context.req.cookies.auth)})
    })
    const response = await data.json()
    if (!response.status){
        return{
            notFound:true,
        }
    }
    return{
        props:{
            response,
            "admin":context.req.cookies.auth == process.env.POST_PASS
        }
    }
}

function calculateReadingTime(text) {
    const wordsPerMinute = 200; // adjust this value to your liking
    const wordCount = text.split(' ').length;
    const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  
    return readingTimeMinutes;
  }
  