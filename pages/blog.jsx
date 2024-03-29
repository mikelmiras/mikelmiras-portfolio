import Header from "../components/Header";
import Link from "next/link";
import { months } from "../util";
import { BsCalendarDate  } from "react-icons/bs";
import {AiOutlineLock} from "react-icons/ai"
import { GenericMeta } from ".";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Router from "next/router";
import {MdOutlinePostAdd} from "react-icons/md"
export default function Blog({data, admin}){
    let noitem = <></>
    if (data.data.length == 0){
        noitem = <h2>Aún no hay entradas de blog.</h2>
    }
    let admindata = <></>
    if (admin) admindata = <span className="edit-btn" onClick={(e)=> {
        Router.push("/blog/post")
    }}> <MdOutlinePostAdd/> Crear nuevo post</span>
    return(
        <>
        <GenericMeta title="Blog - Mikel Miras"/>
        <Header selected="blog"/> 
        <div className="blog-wrapper">
            <section className="blog-holder">
            <h1>Blog</h1>
            {noitem}
            {admindata}
            {data.data.map((item)=>{
                const date = new Date(item.date)
                let isprivate = <></>
                if (item.public == 0) isprivate = <AiOutlineLock/>
                return(
                    <>
                    <h2 className="linked-h2"><Link href={"/blog/" + item.slug}>{isprivate}{item.title}</Link></h2>
                    <Alltags tagArray={item.tags} url="/blog/tags/"/>
                    <span className="article-data">
                        <span className="date-holder"><BsCalendarDate/> 
                            <span className="date"> {date.getDate()  + " de " + months[date.getMonth()] + ", " + date.getFullYear()}</span>
                            </span>
                        </span>
                    <p>{removeMarkdownSyntax(item.content.substring(0, 196)).replaceAll("\\n", ".").replaceAll("..", ". ") + "..."}</p>
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
    const resp = await fetch(process.env.FETCH_URL, {
        "method":"POST",
        "headers":{
            "Content-type":"application/json"
        },
        "body":JSON.stringify({"allowprivate": context.req.cookies.auth})
    })
    const data = await resp.json();
    let admin = false
    if (context.req.cookies.auth === process.env.POST_PASS) admin = true
    return{
        props:{
            data,
            admin
        }
    }
}

export function Alltags({tagArray, url}){
return(<div className="tags-wrapper">
{tagArray.map(tag=>{
    return(<Tag url={url} key={tag.name} color={tag.color} name={tag.name} emoji={tag.emoji} longname={tag.longname}/>)
})}
</div>)
}

export function Tag({name, emoji, longname, color, url}){
    let newurl
    if (url == "../") newurl = url
    else newurl = url + name
    return(<Link id={"tag-" + name} style={{background:color}} href={newurl} title={longname} className={"tags tag-" + name}><span>{emoji}</span><span>{name}</span></Link>)
}

function removeMarkdownSyntax(str) {
    // Remove bold text
    str = str.replace(/\*\*(.*?)\*\*/g, "$1");
  
    // Remove italicized text
    str = str.replace(/\*(.*?)\*/g, "$1");
  
    // Remove headers
    str = str.replace(/#+\s*(.*?)\s*\#*/g, "$1");
  
    // Remove links
    str = str.replace(/\[(.*?)\]\((.*?)\)/g, "$1 ($2)");
  
    // Remove inline code
    str = str.replace(/`([^`]+)`/g, "$1");
  
    // Remove blockquotes
    str = str.replace(/\n?>\s*(.*)/g, "$1");
  
    // Remove unordered lists
    str = str.replace(/\n\s*\*\s*(.*)/g, "$1");
  
    // Remove ordered lists
    str = str.replace(/\n\s*\d+\.\s*(.*)/g, "$1");
  
    // Remove horizontal lines
    str = str.replace(/---|\*\*\*/g, "");
  
    return str.trim();
  }
  