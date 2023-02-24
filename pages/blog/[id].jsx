import Footer from "../../components/Footer";
import ReactMarkdown from "react-markdown";
import {BsCalendarDate, BsClock} from "react-icons/bs"
import Header from "../../components/Header";
import { months } from "../../util";
import {AiOutlineLock} from "react-icons/ai"
import { Alltags } from "../blog";
export default function Blog({response}){
    const date = new Date(response.data.date)
    let isprivate = <></>
    if (response.data.public === 0){
        isprivate = <AiOutlineLock/>
    }
    return(
        <>
        <Header selected={"blog"}/>
        <div itemScope itemType="https://schema.org/TechArticle" className="blog-wrapper">
        <section className="blog-holder">
        <h1 itemProp="name">{isprivate}{response.data.title}</h1>
        <Alltags tagArray={response.tags}/>
        <span className="notvisible" itemProp="author" itemType="Person">Mikel Miras</span>
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
            response
        }
    }
}

function calculateReadingTime(text) {
    const wordsPerMinute = 200; // adjust this value to your liking
    const wordCount = text.split(' ').length;
    const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  
    return readingTimeMinutes;
  }
  