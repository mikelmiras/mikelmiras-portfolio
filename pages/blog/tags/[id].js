import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import { GenericMeta } from "../.."
import Link from "next/link"
import { Alltags } from "../../blog"
import { BsCalendarDate } from "react-icons/bs"
import { months } from "../../../util"
import { AiOutlineLock } from "react-icons/ai"
export default function ByTag({response}){

    return(
        <>
        <GenericMeta title={response.tags[0].name + " - Mikel Miras"}/>
        <Header selected="blog"/> 
        <div className="blog-wrapper">
            <section className="blog-holder">
            <h1>Blog (etiqueta: {response.tags[0].name})</h1>
            <Alltags tagArray={response.tags}/>
            {response.data.map((item)=>{
                const date = new Date(item.date)
                let isprivate = <></>
                if (item.public == 0) isprivate = <AiOutlineLock/>
                return(
                    <>
                    <h2 className="linked-h2"><Link href={"/blog/" + item.slug}>{isprivate}{item.title}</Link></h2>
                    <span className="article-data">
                        <span className="date-holder"><BsCalendarDate/> 
                            <span className="date"> {date.getDate()  + " de " + months[date.getMonth()] + ", " + date.getFullYear()}</span>
                            </span>
                        </span>
                    <p>{item.content.substring(0, 196).replaceAll("\\n", "").replaceAll("#", "").replaceAll("*", "") + "..."}</p>
                    </>
                )
            })}
            
            </section>
        </div>
        <Footer/>
        </>
    )
}


export async function getServerSideProps(context){
    const {params} = context
    const {id} = params
    const data = await fetch(process.env.FETCH_URL + "/tags/" + id, {
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
        }
    }
}