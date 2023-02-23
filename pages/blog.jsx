import Header from "../components/Header";
import Link from "next/link";
import { months } from "../util";
import { BsCalendarDate  } from "react-icons/bs";
import {AiOutlineLock} from "react-icons/ai"
import { GenericMeta } from ".";
export default function Blog({data}){
    let noitem = <></>
    if (data.data.length == 0){
        noitem = <h2>Aún no hay entradas de blog.</h2>
    }
    return(
        <>
        <GenericMeta title="Blog - Mikel Miras"/>
        <Header selected="blog"/> 
        <div className="blog-wrapper">
            <section className="blog-holder">
            <h1>Blog</h1>
            {noitem}
            {data.data.map((item)=>{
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
        </>
    )
}

export async function getServerSideProps(context){
    const resp = await fetch(process.env.FETCH_URL, {
        "method":"POST",
        "headers":{
            "Content-type":"application/json"
        },
        "body":JSON.stringify({"allowprivate": context.req.cookies.auth})
    })
    const data = await resp.json();
    return{
        props:{
            data
        }
    }
}