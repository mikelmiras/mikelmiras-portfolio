import { useEffect, useState } from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

export default function Post(){
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const [slug, setSlug] = useState("")
    const [valid, setValid] = useState(true)
    const [err, setErr] = useState(<></>)
    useEffect((e)=>{
        if (localStorage.getItem("new_post_title")){
            setTitle(localStorage.getItem("new_post_title"))
        }
        if (localStorage.getItem("new_post_content")){
            setContent(localStorage.getItem("new_post_content"))
        }
        if (localStorage.getItem("new_post_slug")){
            setSlug(localStorage.getItem("new_post_slug"))
        }
    }, [])
    return(
        <>
        <Header selected="blog"/>
        <div className="blog-wrapper">
            <section className="blog-holder">
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    setErr()
                    if (title == "" || slug =="" || content =="") {
                        setErr(<p className="error">Rellena todos los datos.</p>)
                        return;
                    }

                    if (!valid) return;
                    setValid(false)
                    const data = {title, slug, content}
                    fetch("/api/posts/create",{
                        "method":"POST",
                        "headers":{
                            "Content-type":"application/json"
                        },
                        "body":JSON.stringify(data)
                    }).then(data=>data.json()).then(data=>{
                        setValid(true)
                        if (data.status){
                            setErr(<p>Publicado correctamente</p>)
                        }
                    }).catch(e=>{
                        setErr("Error del servidor")
                        setValid(true)
                    })
                }} className="post-form">
                    <input defaultValue={title} onChange={(e)=>{
                        setTitle(e.target.value)
                        localStorage.setItem("new_post_title", e.target.value)
                    }} className="form-input title-input" placeholder="Título" />
                    <input defaultValue={slug} onChange={(e)=>{
                        setSlug(e.target.value.replaceAll(" ", "").toLocaleLowerCase())
                        localStorage.setItem("new_post_slug",e.target.value.replaceAll(" ", "").toLocaleLowerCase())
                        e.target.value = e.target.value.replaceAll(" ", "").toLocaleLowerCase()
                    }} className="form-input title-input" placeholder="Slug" />
                    <textarea defaultValue={content} onChange={(e)=>{
                        setContent(e.target.value)
                        localStorage.setItem("new_post_content", e.target.value)
                    }} placeholder="Contenido" className="form-input"/>
                    <input className="post-btn" type={"submit"} value="Publicar"/>
                </form>
                {err}
                <h1>Resultado:</h1>
                <hr/>
                <ReactMarkdown>{content}</ReactMarkdown>
            </section>
        </div>
        <Footer/>
        </>
    )
}

export async function getServerSideProps(context){
    const {req} = context

    if (!req.cookies.auth || req.cookies.auth != process.env.POST_PASS) return{
        notFound:true,
    }


    return{
        props:{}
    }
}