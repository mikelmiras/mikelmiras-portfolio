import Header from "../components/Header";
import Link from "next/link";
import { months } from "../util";
import { BsCalendarDate  } from "react-icons/bs";
export default function Blog({data}){
    return(
        <>
        <Header selected="blog"/> 
        <div className="blog-wrapper">
            <section className="blog-holder">
            <h1>Blog</h1>
            {data.data.map((item)=>{
                const date = new Date(item.date)
                return(
                    <>
                    <h2 className="linked-h2"><Link href={"/blog/" + item.slug}>{item.title}</Link></h2>
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

export async function getServerSideProps(){
    const resp = await fetch(process.env.FETCH_URL)
    const data = await resp.json();
    return{
        props:{
            data
        }
    }
}