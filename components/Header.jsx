import {IoIosArrowBack} from "react-icons/io"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useState } from "react"
export default function Header(){
    const router = useRouter()
    const [goBack, setGoBack] = useState(<><span className="goback"></span></>)
    useEffect((e)=>{
        if (window.history.length > 2){
            setGoBack(<span className="goback">
            <span onClick={(e)=>{
                router.back()
            }}><IoIosArrowBack/> Volver</span>
            </span>)
        }
    }, [])
    return(
        <header>
            <div className="hr"></div>
            <nav>
              {goBack} 
                <span className="items">
                    <MenuItem text="🏡 Inicio" url="/"/>
                    <MenuItem text={"📝 Blog"} url={"/blog"}/>
                </span>
            </nav>
        </header>
    )
}


function MenuItem({text, url}){
    return(<span className="item"><Link href={url}>{text}</Link></span>)
}