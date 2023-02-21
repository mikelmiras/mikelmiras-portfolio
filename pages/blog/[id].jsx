import Footer from "../../components/Footer";
import ReactMarkdown from "react-markdown";
import {BsCalendarDate, BsClock} from "react-icons/bs"
export default function Blog({response}){
    return(
        <>
        <div className="blog-wrapper">
        <section className="blog-holder">
        <h1>{response.data.title}</h1>
        <span className="article-data">
            <BsCalendarDate/> <span className="date"> 21 de febrero, 2023</span>
            <span className="lecture-time"><BsClock/> {calculateReadingTime(response.data.content)} minutos de lectura</span>
        </span>
         <ReactMarkdown>{response.data.content.replaceAll("\\n", "\n")}</ReactMarkdown>
   </section>
        </div>
        <Footer/>
        </>
    )
}




export async function getServerSideProps(context){
    const {params} = context
    const {id} = params
    const data = await fetch(process.env.FETCH_URL + id)
    const response = await data.json()
    if (!response.data){
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
  