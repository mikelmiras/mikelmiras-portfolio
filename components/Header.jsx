import {IoIosArrowBack} from "react-icons/io"
import Link from "next/link"
export default function Header(){
    return(
        <header>
            <hr/>
            <nav>
                <span className="goback">
                <Link href="/"><IoIosArrowBack/> Volver</Link>
                </span>
                <span className="items">
                    <MenuItem text="🏡 Inicio" url="/"/>
                    <MenuItem text={"✒ Blog"} url={"/blog"}/>
                </span>
            </nav>
        </header>
    )
}


function MenuItem({text, url}){
    return(<span className="item"><Link href={url}>{text}</Link></span>)
}